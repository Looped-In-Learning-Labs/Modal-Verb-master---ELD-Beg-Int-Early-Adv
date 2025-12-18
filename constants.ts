
import { Scenario, ModalType, ModalStyle } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 1,
    scenario: "Imagine that your friend keeps interrupting you every time you try to speak. What should you do?",
    scenarioSpanish: "Imagina que tu amigo te interrumpe cada vez que intentas hablar. ¿Qué deberías hacer?",
    modal: "should",
    sentenceFrames: [
      { english: "You should ___.", spanish: "Deberías ___." },
      { english: "Maybe you should ___.", spanish: "Tal vez deberías ___." }
    ],
    wordBank: [
      { english: "talk", spanish: "hablar" },
      { english: "explain", spanish: "explicar" },
      { english: "honesty", spanish: "honestidad" },
      { english: "calm", spanish: "calma" },
      { english: "wait", spanish: "esperar" },
      { english: "polite", spanish: "amable" }
    ],
    icon: "🗣️"
  },
  {
    id: 2,
    scenario: "What if a classmate copied your homework and turned it in as their own? What should you do?",
    scenarioSpanish: "¿Qué pasaría si un compañero de clase copiara tu tarea y la entregara como si fuera suya? ¿Qué deberías hacer?",
    modal: "should",
    sentenceFrames: [
      { english: "You should ___.", spanish: "Deberías ___." },
      { english: "I think you should ___.", spanish: "Creo que deberías ___." }
    ],
    wordBank: [
      { english: "teacher", spanish: "maestro" },
      { english: "talk", spanish: "hablar" },
      { english: "truth", spanish: "verdad" },
      { english: "boundaries", spanish: "límites" },
      { english: "reason", spanish: "razón" },
      { english: "upset", spanish: "molesto" }
    ],
    icon: "📝"
  },
  {
    id: 3,
    scenario: "Imagine your younger sibling is being bullied at school. What should you do to help them?",
    scenarioSpanish: "Imagina que a tu hermano menor le están haciendo bullying en la escuela. ¿Qué deberías hacer para ayudarlo?",
    modal: "should",
    sentenceFrames: [
      { english: "You should ___.", spanish: "Deberías ___." },
      { english: "Maybe you should ___.", spanish: "Tal vez deberías ___." }
    ],
    wordBank: [
      { english: "adult", spanish: "adulto" },
      { english: "support", spanish: "apoyo" },
      { english: "listen", spanish: "escuchar" },
      { english: "help", spanish: "ayuda" },
      { english: "report", spanish: "reportar" },
      { english: "safety", spanish: "seguridad" }
    ],
    icon: "🤝"
  },
  {
    id: 4,
    scenario: "Imagine your best friend failed an important test and feels really sad. What should you do for them?",
    scenarioSpanish: "Imagina que tu mejor amigo reprobó un examen importante y se siente muy triste. ¿Qué deberías hacer por él?",
    modal: "should",
    sentenceFrames: [
      { english: "You should ___.", spanish: "Deberías ___." },
      { english: "I think you should ___.", spanish: "Creo que deberías ___." }
    ],
    wordBank: [
      { english: "study", spanish: "estudiar" },
      { english: "encourage", spanish: "animar" },
      { english: "listen", spanish: "escuchar" },
      { english: "teacher", spanish: "maestro" },
      { english: "plan", spanish: "plan" },
      { english: "positive", spanish: "positivo" }
    ],
    icon: "📚"
  },
  {
    id: 5,
    scenario: "Imagine you have a free Saturday with absolutely no homework! What could you do with your day?",
    scenarioSpanish: "¡Imagina que tienes un sábado libre sin absolutamente nada de tarea! ¿Qué podrías hacer con tu día?",
    modal: "could",
    sentenceFrames: [
      { english: "You could ___.", spanish: "Podrías ___." },
      { english: "We could ___.", spanish: "Podríamos ___." }
    ],
    wordBank: [
      { english: "outside", spanish: "afuera" },
      { english: "friends", spanish: "amigos" },
      { english: "games", spanish: "juegos" },
      { english: "movies", spanish: "películas" },
      { english: "sleep", spanish: "dormir" },
      { english: "new", spanish: "nuevo" }
    ],
    icon: "🎈"
  },
  {
    id: 6,
    scenario: "What if your family wants to do something fun together this weekend? What could you suggest?",
    scenarioSpanish: "¿Qué pasaría si tu familia quisiera hacer algo divertido juntos este fin de semana? ¿Qué podrías sugerir?",
    modal: "could",
    sentenceFrames: [
      { english: "We could ___.", spanish: "Podríamos ___." },
      { english: "You could ___.", spanish: "Podrías ___." }
    ],
    wordBank: [
      { english: "park", spanish: "parque" },
      { english: "cook", spanish: "cocinar" },
      { english: "games", spanish: "juegos" },
      { english: "picnic", spanish: "picnic" },
      { english: "movie", spanish: "película" },
      { english: "relatives", spanish: "familiares" }
    ],
    icon: "🏡"
  },
  {
    id: 7,
    scenario: "Imagine you want to earn some extra money this summer. What could you do for a job?",
    scenarioSpanish: "Imagina que quieres ganar algo de dinero extra este verano. ¿Qué podrías hacer como trabajo?",
    modal: "could",
    sentenceFrames: [
      { english: "I could ___.", spanish: "Yo podría ___." },
      { english: "You could ___.", spanish: "Podrías ___." }
    ],
    wordBank: [
      { english: "dogs", spanish: "perros" },
      { english: "neighbors", spanish: "vecinos" },
      { english: "sell", spanish: "vender" },
      { english: "yard", spanish: "jardín" },
      { english: "babysit", spanish: "cuidar niños" },
      { english: "cars", spanish: "carros" }
    ],
    icon: "💰"
  },
  {
    id: 8,
    scenario: "What if your class needs to choose a topic for a group project? What could you research?",
    scenarioSpanish: "¿Qué pasaría si tu clase necesitara elegir un tema para un proyecto grupal? ¿Qué podrías investigar?",
    modal: "could",
    sentenceFrames: [
      { english: "We could ___.", spanish: "Podríamos ___." },
      { english: "You could ___.", spanish: "Podrías ___." }
    ],
    wordBank: [
      { english: "animals", spanish: "animales" },
      { english: "history", spanish: "historia" },
      { english: "science", spanish: "ciencia" },
      { english: "vote", spanish: "votar" },
      { english: "ideas", spanish: "ideas" },
      { english: "teacher", spanish: "maestro" }
    ],
    icon: "🧬"
  },
  {
    id: 9,
    scenario: "If you could wake up tomorrow with any superpower, what would it be?",
    scenarioSpanish: "Si pudieras despertarte mañana con cualquier superpoder, ¿cuál sería?",
    modal: "would",
    sentenceFrames: [
      { english: "I would ___.", spanish: "Yo [verbo-ría] ___." },
      { english: "I would want to ___.", spanish: "Yo querría ___." }
    ],
    wordBank: [
      { english: "fly", spanish: "volar" },
      { english: "invisible", spanish: "invisible" },
      { english: "minds", spanish: "mentes" },
      { english: "time", spanish: "tiempo" },
      { english: "strong", spanish: "fuerte" },
      { english: "help", spanish: "ayudar" }
    ],
    icon: "⚡"
  },
  {
    id: 10,
    scenario: "Imagine if you won $1,000 in a contest. How would you spend the money?",
    scenarioSpanish: "Imagina si ganaras $1,000 en un concurso. ¿Cómo gastarías el dinero?",
    modal: "would",
    sentenceFrames: [
      { english: "I would ___.", spanish: "Yo [verbo-ría] ___." },
      { english: "I would probably ___.", spanish: "Probablemente yo [verbo-ría] ___." }
    ],
    wordBank: [
      { english: "save", spanish: "ahorrar" },
      { english: "clothes", spanish: "ropa" },
      { english: "family", spanish: "familia" },
      { english: "phone", spanish: "teléfono" },
      { english: "donate", spanish: "donar" },
      { english: "trip", spanish: "viaje" }
    ],
    icon: "🎁"
  }
];

export const MODAL_COLORS: Record<ModalType, ModalStyle> = {
  should: {
    bg: "bg-blue-100",
    border: "border-blue-400",
    text: "text-blue-700",
    accent: "bg-blue-500",
    light: "bg-blue-50/80",
    ring: "ring-blue-400"
  },
  could: {
    bg: "bg-emerald-100",
    border: "border-emerald-400",
    text: "text-emerald-700",
    accent: "bg-emerald-500",
    light: "bg-emerald-50/80",
    ring: "ring-emerald-400"
  },
  would: {
    bg: "bg-purple-100",
    border: "border-purple-400",
    text: "text-purple-700",
    accent: "bg-purple-500",
    light: "bg-purple-50/80",
    ring: "ring-purple-400"
  }
};
