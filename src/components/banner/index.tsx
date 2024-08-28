import { component$ } from "@builder.io/qwik";
export const Banner = component$(() => {
  return (
    <div>
      <img
        src="ProfileImage.jpg"
        alt="Bilde av meg"
        height={180}
        width={180}
        class="block rounded-md object-cover"
      />
      {/* <ProfileImg /> */}
    </div>
  );
});
