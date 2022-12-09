import { Component, createEffect, createSignal, For, Index } from "solid-js";

import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div class="bg-baseDark h-full text-center">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div class="bg-baseLight rounded-b-3xl p-5 flex flex-col items-center">
      <div class="flex bg-gray-300 h-40 rounded-full w-40 mb-4 web-cam">
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
        <p class="text-3xl">Joshua Petitma</p>
        <p class="">Love God, work hard, help others, and experience life.</p>
      </div>
      <div class="flex w-full px-28 py-2 justify-evenly">
        <SocialIcon icon={instagram} />
        <SocialIcon icon={linkedin} />
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

export default App;
