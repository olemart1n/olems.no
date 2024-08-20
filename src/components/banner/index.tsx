import { component$ } from "@builder.io/qwik";
export const Banner = component$(() => {
  return (
    <div>
      <img
        src="ProfileImage.jpg"
        alt="Bilde av meg"
        height={200}
        width={200}
        class="block rounded-full object-cover"
      />
      {/* <ProfileImg /> */}
    </div>
  );
});
