import { component$ } from "@builder.io/qwik";

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  weight: string;
}
export const ExDiv = component$(
  ({ exercise, key }: { exercise: Exercise; key: number }) => {
    return (
      <div class="flex w-full rounded bg-slate-300 p-1" key={key}>
        <div class="flex w-1/2 flex-col">
          <p>{exercise.name}</p>
          <p>{exercise.sets} sett</p>
        </div>
        <div class="flex w-1/2 flex-col gap-1">
          <input
            type="text"
            name={exercise.name + " reps"}
            placeholder={exercise.reps + " reps"}
          />
          <input
            type="text"
            name={exercise.name + " weight"}
            placeholder="vekt"
          />
        </div>
      </div>
    );
  },
);
