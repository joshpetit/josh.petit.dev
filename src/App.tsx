import { Component, createEffect, createSignal, For, Index } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  const [cats, setCats] = createSignal([
    "Keyboard Cat",
    "Maru",
    "Henri The Existential Cat",
  ]);

  return (
    <div class="bg-baseDark h-full text-center">
      <Header></Header>
    </div>
  );
}

function Header() {
  return (
    <div class="bg-baseLight rounded-b-3xl p-5 flex flex-col items-center">
      <div class="flex bg-gray-300 h-40 rounded-full w-40 mb-5 web-cam">
        <video class="object-cover" autoplay muted loop>
          <source src="/src/assets/header.mp4" type="video/mp4" />
        </video>
      </div>
      <p class="text-3xl">Joshua Petitma</p>
      <p class="px-10">
        Love God, work hard, help others, and experience life.
      </p>
    </div>
  );
}

export default App;
