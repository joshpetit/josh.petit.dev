import { Show } from "solid-js";

import openbook from "./openbook.svg";
import cross from "./cross.svg";
import petitdev from "./petit.dev-partial.svg";
import instagram from "./instagram.svg";
import github from "./github.svg";
import megaphone from "./megaphone.svg";
import code from "./code.svg";
import coder from "./coder.svg";
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
    <div>
      <div class="bg-baseLight rounded-b-3xl p-5 flex flex-col items-center">
        <div class="flex border-primary border-solid border-8 overflow-hidden bg-gray-300 h-40 rounded-full w-40 mb-4 web-cam">
          <video
            class="object-cover"
            poster="/src/assets/josh.petit.dev-slideshow_poster.jpg"
            muted
            autoplay
            loop
          >
            <source
              src="/src/assets/josh.petit.dev-slideshow.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="mb-4 px-6">
          <p class="text-3xl font-extrabold">Joshua Petitma</p>
          <Show when={false}>
            <p class="text-s mb-2">(Joshua "Pey tee ma")</p>
          </Show>
          <p class="font-bold">
            Love God, work hard, help others, and experience life.
          </p>
        </div>
        <div class="flex w-full px-28 py-2 justify-evenly">
          <SocialIcon
            href="https://www.instagram.com/josh.petitma/"
            icon={instagram}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/joshua-petitma"
            icon={linkedin}
          />
        </div>
      </div>

      <div class="flex flex-col items-center mt-7 font-noto-sans px-4">
        <BioItem
          title="YouTube"
          icon={youtube}
          graphic={megaphone}
          graphicPosition="top-left"
          videoSource="/src/assets/ytgif.mp4"
          videoPoster="/src/assets/ytgif_poster.png"
          href={"https://www.youtube.com/@joshpetit"}
        >
          Me talking about tech I use to supercharge my life and occasionally
          skits!
        </BioItem>
        <div class="bg-black rounded-full h-3 w-3" />
        <BioItem
          title="petit.dev"
          icon={petitdev}
          graphic={coder}
          graphicPosition="top-right"
          imageSource="/src/assets/petit.dev.png"
          href={"https://petit.dev"}
        >
          I do freelance web & mobile app development, open to new project
          requests!
        </BioItem>
        <div class="bg-black rounded-full h-3 w-3" />
        <BioItem
          title="joshministers.com"
          icon={openbook}
          graphic={cross}
          imageSource="/src/assets/joshministers.png"
          href={"https://joshministers.com"}
          rotate="rotate-[45deg]"
        >
          A Life & Religion blog where I post devotionals and sermons I create.
        </BioItem>
        <div class="bg-black rounded-full h-3 w-3" />
        <BioItem
          title="Github"
          icon={github}
          graphic={code}
          graphicPosition="bottom-right"
          videoSource="/src/assets/coding.mp4"
          videoPoster="/src/assets/nice_bg.png"
          href={"https://github.com/joshpetit"}
        >
          Find my dotfiles and programs/packages I make
        </BioItem>
      </div>
    </div>
  );
}

function SocialIcon(props: { icon: string; href: string }) {
  return (
    <a href={props.href} target="_blank">
      <div class={"w-fit overflow-visible"}>
        <img class="h-10 social-icon" src={props.icon} />
      </div>
    </a>
  );
}

function BioItem(props: {
  title: string;
  graphic?: string;
  icon: string;
  graphicPosition?: "top-left" | "bottom-right" | "top-right";
  children: string;
  videoPoster?: string;
  videoSource?: string;
  imageSource?: string;
  href?: string;
  rotate?: string;
}) {
  return (
    <div class="flex max-w-full flex-col overflow-y-visible">
      <Show
        when={
          props.graphic &&
          (!props.graphicPosition || props.graphicPosition == "top-left")
        }
      >
        <div class="relative bottom-10">
          <img
            class={"h-24 object-cover z-20 absolute" + " " + props.rotate ?? ""}
            src={props.graphic}
          />
        </div>
      </Show>
      <Show when={props.graphic && props.graphicPosition == "top-right"}>
        <div class="relative bottom-10">
          <img
            class={
              "h-24 object-cover z-20 absolute right-0" + " " + props.rotate ??
              ""
            }
            src={props.graphic}
          />
        </div>
      </Show>
      <div
        class={
          "overflow-hidden bg-baseLight z-10 hover:drop-shadow-none transition-all left-1 bottom-1 hover:left-0 hover:bottom-0 drop-shadow-cool m-4 rounded-3xl relative border-solid border-black border-4"
        }
      >
        <a href={props.href} target="_blank">
          <Show
            when={props.videoSource}
            fallback={<img src={props.imageSource} />}
          >
            <video
              class="object-cover"
              poster={props.videoPoster ?? undefined}
              muted
              autoplay
              loop
            >
              <source src={props.videoSource} type="video/mp4" />
            </video>
          </Show>
          <div class="py-2">
            <h2 class="font-extrabold text-l flex items-center justify-center">
              {props.title} <img class="ml-1 h-4" src={props.icon} />
            </h2>

            <p class="font-medium px-4 py-1">{props.children}</p>
          </div>
        </a>
      </div>
      <Show when={props.graphicPosition == "bottom-right"}>
        <div class="relative">
          <img
            class="h-24 z-0 bottom-[-15px] right-0 absolute rotate-[135deg] "
            src={props.graphic}
          />
        </div>
      </Show>
    </div>
  );
}

export default App;
