export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  weight: string;
}
export const upperBody: Exercise[] = [
  { name: "Benkpress", sets: "4", reps: "5-8", weight: "" },
  { name: "Skulderpress", sets: "3", reps: "6-10", weight: "" },
  { name: "Pull-ups", sets: "3", reps: "6-10", weight: "" },
  { name: "Biceps curls", sets: "4", reps: "10-12", weight: "" },
  { name: "Dips/triceps-push", sets: "3", reps: "10-12", weight: "" },
];

export const lowerBody: Exercise[] = [
  { name: "Knebøy", sets: "4", reps: "6-8", weight: "" },
  { name: "Deadlift", sets: "3", reps: "6-8", weight: "" },
  { name: "Leg-press", sets: "3", reps: "8-10", weight: "" },
  { name: "Legg-curls", sets: "3", reps: "10-12", weight: "" },
  { name: "Calf-raises", sets: "3", reps: "10-15", weight: "" },
];

export const fullBody: Exercise[] = [
  { name: "Legg-press", sets: "3", reps: "8-10", weight: "" },
  { name: "Benkpress", sets: "4", reps: "5-8", weight: "" },
  { name: "Roing", sets: "3", reps: "6-10", weight: "" },
  { name: "Face-pulls/omvendt", sets: "3", reps: "10-12", weight: "" },
  { name: "Glutes", sets: "3", reps: "10-12", weight: "" },
];
