import { Component, createEffect, createSignal, For, Index } from "solid-js";

import instagram from "./instagram.svg";
import megaphone from "./megaphone.svg";
import youtube from "./youtube.svg";
import linkedin from "./linkedin.svg";

function App() {
  return (
    <div class="bg-baseDark overflow-auto h-full text-center">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div class="">
      <div class="bg-baseLight rounded-b-3xl p-5 flex flex-col items-center">
        <div class="flex border-primary border-solid border-8 overflow-hidden bg-gray-300 h-40 rounded-full w-40 mb-4 web-cam">
          <video
            class="object-cover"
            poster="/src/assets/nice_bg.png"
            muted
            autoplay
            loop
          >
            <source src="/src/assets/header.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="mb-4 px-6">
          <p class="text-3xl font-extrabold">Joshua Petitma</p>
          <p class="font-bold">
            Love God, work hard, help others, and experience life.
          </p>
        </div>
        <div class="flex w-full px-28 py-2 justify-evenly">
          <SocialIcon icon={instagram} />
          <SocialIcon icon={linkedin} />
        </div>
      </div>

      <div class="flex flex-col items-center mt-10 font-noto-sans mx-4">
        <div class="relative bottom-10">
          <img class="h-24 z-10 absolute" src={megaphone} />
        </div>
        <BioItem />
        <div class="bg-black rounded-full h-3 w-3" />
        <BioItem />
      </div>
    </div>
  );
}

function SocialIcon(props: { icon: string }) {
  return (
    <div class={"w-fit overflow-visible"}>
      <img class="h-10 social-icon" src={props.icon} />
    </div>
  );
}

function BioItem(props: {}) {
  return (
    <div class="overflow-hidden bg-baseLight hover:drop-shadow-none transition-all left-1 bottom-1 hover:left-0 hover:bottom-0 drop-shadow-cool m-4 rounded-2xl relative">
      <video
        class="object-cover"
        poster="/src/assets/nice_bg.png"
        muted
        autoplay
        loop
      >
        <source src="/src/assets/ytgif.mp4" type="video/mp4" />
      </video>
      <div class="py-2">
        <h2 class="font-extrabold text-l flex items-center justify-center">
          YouTube <img class="ml-1 h-4" src={youtube} />
        </h2>

        <p class="font-medium px-4 py-1">
          Me talking about tech I use to supercharge my life and occasionally
          skits!
        </p>
      </div>
    </div>
  );
}

export default App;
