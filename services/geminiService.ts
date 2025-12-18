
import { GoogleGenAI, Modality, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// TTS for reading the scenario and instructions aloud
export const speakText = async (text: string, voiceName: 'Kore' | 'Puck' = 'Kore') => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Say clearly and slowly for an English learner: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName }
          }
        }
      }
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      const binary = atob(base64Audio);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      
      const dataInt16 = new Int16Array(bytes.buffer);
      const buffer = audioCtx.createBuffer(1, dataInt16.length, 24000);
      const channelData = buffer.getChannelData(0);
      for (let i = 0; i < dataInt16.length; i++) {
        channelData[i] = dataInt16[i] / 32768.0;
      }

      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      source.start();
    }
  } catch (error) {
    console.error("Speech generation failed:", error);
  }
};

// Grammar Feedback (AI Coach) with Scoring and "And" requirement
export const checkSentence = async (scenario: string, modal: string, input: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Scenario: ${scenario}. 
      Goal: The student must use the modal verb "${modal}" AND the conjunction "and" correctly. 
      Student Input: "${input}". 
      
      Instructions for Coach:
      1. Rate the response from 1 to 10. 
         - Deduct points if the modal "${modal}" is missing.
         - Deduct points if the word "and" is missing.
         - Evaluate for completeness, accuracy, and clarity.
      2. Provide encouraging feedback in English. 
      3. Provide a Spanish translation of that feedback. 
      4. Provide a "Gold Standard" suggestion that uses both the modal and "and".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER, description: "Score from 1 to 10" },
            isCorrect: { type: Type.BOOLEAN, description: "Whether both modal and 'and' were used correctly" },
            feedback: { type: Type.STRING, description: "Encouraging feedback in English" },
            spanishFeedback: { type: Type.STRING, description: "Feedback translated to Spanish" },
            suggestion: { type: Type.STRING, description: "A perfect example response" }
          },
          required: ["score", "isCorrect", "feedback", "spanishFeedback", "suggestion"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Check sentence failed:", error);
    return null;
  }
};
