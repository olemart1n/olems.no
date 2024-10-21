// import { component$ } from "@builder.io/qwik";

// export const AnimationButtons = component$(
//   ({ direction }: { direction: string }) => {
//     return (
//       <>
//         <div class="row-span-1 ">
//           <button
//             class={
//               "game-direction-button test h-6 w-10 rounded text-blue-300 " +
//               (direction === "forward" ? "bg-amber-300" : "bg-gray-500")
//             }
//           >
//             &#x2191;
//           </button>
//         </div>
//         <div class="flex place-content-center gap-1">
//           <button
//             class={
//               "game-direction-button h-6 w-10 rounded text-blue-300 " +
//               (direction === "left" ? "bg-amber-300" : "bg-gray-500")
//             }
//           >
//             &#x2190;
//           </button>
//           <button
//             class={
//               "game-direction-button h-6 w-10 rounded text-blue-300 " +
//               (direction === "reverse" ? "bg-amber-300" : "bg-gray-500")
//             }
//           >
//             &#x2193;
//           </button>
//           <button
//             class={
//               "game-direction-button h-6 w-10 rounded text-blue-300 " +
//               (direction === "right" ? "bg-amber-300" : "bg-gray-500")
//             }
//           >
//             &#x2192;
//           </button>
//         </div>
//       </>
//     );
//   },
// );

// {
//   /* <figure class="absolute bottom-6 z-10 mt-auto flex w-full flex-col gap-1 text-center sm:hidden">
//           <div class="row-span-1">
//             <button
//               class="game-direction-button h-10 w-10 rounded-full bg-gray-500 text-blue-300"
//               value={"forward"}
//               onTouchStart$={() => (carData.direction.forward = true)}
//               onTouchEnd$={() => (carData.direction.forward = false)}
//             >
//               &#x2191;
//             </button>
//           </div>
//           <div class="flex place-content-center gap-1">
//             <button
//               class="game-direction-button h-10 w-10 rounded-full bg-gray-500 text-blue-300"
//               value={"forward"}
//               onTouchStart$={() => (carData.direction.left = true)}
//               onTouchEnd$={() => (carData.direction.left = false)}
//             >
//               &#x2190;
//             </button>
//             <button
//               class="game-direction-button h-10 w-10 rounded-full bg-gray-500 text-blue-300"
//               value={"forward"}
//               onTouchStart$={() => (carData.direction.reverse = true)}
//               onTouchEnd$={() => (carData.direction.reverse = false)}
//             >
//               &#x2193;
//             </button>
//             <button
//               class="game-direction-button h-10 w-10 rounded-full bg-gray-500 text-blue-300"
//               value={"forward"}
//               onTouchStart$={() => (carData.direction.right = true)}
//               onTouchEnd$={() => (carData.direction.right = false)}
//             >
//               &#x2192;
//             </button>
//           </div>
//         </figure> */
// }
