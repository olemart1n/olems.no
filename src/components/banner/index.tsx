import { component$ } from "@builder.io/qwik";
import ProfileImg from "../../../public/ProfileImage.jpg?jsx";
export const Banner = component$(() => {
  return (
    <div>
      <ProfileImg class="w-24 rounded md:w-52" alt="Bilde av meg" />
    </div>
  );
});
