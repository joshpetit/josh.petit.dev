import { Show } from "solid-js";

import openbook from "./openbook.svg";
import tree from "./sitting_beneath_tree.svg";
import cross from "./cross.svg";
import petitdev from "./petit.dev-partial.svg";
import instagram from "./instagram.svg";
import github from "./github.svg";
import megaphone from "./megaphone.svg";
import code from "./code.svg";
import coder from "./coder.svg";
import youtube from "./youtube.svg";
import linkedin from "./linkedin.svg";
import bird from "./bird.svg";

function App() {
  return (
    <div class="bg-baseDark flex flex-col md:flex-row md:items-center overflow-auto h-full text-center md:justify-between md:h-screen md:overflow-scroll select-none">
      <img
        alt="tree"
        src={tree}
        class="md:visible pointer-events-none invisible absolute object-fill h-screen z-0"
      />
      <Header />
      <BioList />
    </div>
  );
}

function Header() {
  return (
    <div class="md:mr-24 z-10 max-w-full justify-between items-center bg-baseLight md:w-1/2 rounded-b-3xl md:rounded-l-none md:rounded-r-3xl">
      <div class="relative w-full z-50">
        <img
          alt="bird"
          class="absolute pointer-events-none invisible md:visible right-[-65px] top-[-138px]"
          src={bird}
        />
      </div>
      <div class="flex xl:flex-row flex-col items-center justify-center md:p-8 mt-5 md:mt-0">
        <div>
          <div class="flex  xl:h-72 xl:w-72 border-primary border-solid border-8 overflow-hidden bg-gray-300 h-40 md:h-52 md:w-52 rounded-full w-40 web-cam">
            <video
              class="object-cover"
              muted
              autoplay
              loop
            >
              <source
                src="/assets/josh.petit.dev-slideshow.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
        <div class="flex flex-col justify-around h-full px-8">
          <div class="mb-4 px-6 xl:px-0">
            <p class="text-3xl xl:text-5xl font-extrabold">Joshua Petitma</p>
            <p class="font-bold xl:text-2xl">
              Love God, work hard, help others, and experience life.
            </p>
          </div>
          <div class="flex w-full py-2 justify-center">
            <SocialIcon
              href="https://www.instagram.com/josh.petitma/"
              alt="Instagram"
              icon={instagram}
            />
            <SocialIcon
              alt="LinkedIn"
              href="https://www.linkedin.com/in/joshua-petitma"
              icon={linkedin}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function BioList() {
  return (
    <div class="flex xl:text-xl flex-col md:w-1/2 xl:w-5/12 md:overflow-y-scroll items-center md:mt-0 font-noto-sans px-4 h-full">
      <BioItem
        title="YouTube"
        icon={youtube}
        graphic={megaphone}
        graphicPosition="top-left"
        videoSource="/assets/ytgif.webm"
        videoPoster="/assets/ytgif_poster.webp"
        href={"https://www.youtube.com/@joshpetit"}
      >
        Me talking about tech I use to supercharge my life and occasionally
        skits!
      </BioItem>
      <BulletSeparator />
      <BioItem
        title="petit.dev"
        icon={petitdev}
        graphic={coder}
        graphicPosition="top-right"
        imageSource="/assets/petit.dev.webp"
        href={"https://petit.dev"}
      >
        I do freelance web & mobile app development, open to new project
        requests!
      </BioItem>

      <BulletSeparator />
      <BioItem
        title="joshministers.com"
        icon={openbook}
        graphic={cross}
        imageSource="/assets/joshministers.webp"
        href={"https://joshministers.com"}
        rotate="rotate-[45deg]"
      >
        A Life & Religion blog where I post devotionals and sermons I create.
      </BioItem>
      <BulletSeparator />
      <BioItem
        title="Github"
        icon={github}
        graphic={code}
        graphicPosition="bottom-right"
        videoSource="/assets/coding.webm"
        href={"https://github.com/joshpetit"}
      >
        Find my dotfiles and programs/packages I make
      </BioItem>
    </div>
  );
}

function BulletSeparator() {
  return <div class="bg-black rounded-full h-3 w-3" />;
}

function SocialIcon(props: { icon: string; href: string; alt: string }) {
  return (
    <a href={props.href} target="_blank">
      <div class={"overflow-visible "}>
        <img
          alt={props.alt}
          class="h-10 xl:h-12 social-icon md:mx-2 mx-5"
          src={props.icon}
        />
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
    <div class="flex xl:w-10/12 flex-col overflow-y-visible max-w-xlg">
      <Show
        when={
          props.graphic &&
          (!props.graphicPosition || props.graphicPosition == "top-left")
        }
      >
        <div class="relative bottom-10">
          <img
            alt="graphic"
            class={
              "h-24 object-cover z-20 absolute md:top-8" + " " + props.rotate ??
              ""
            }
            src={props.graphic}
          />
        </div>
      </Show>
      <Show when={props.graphic && props.graphicPosition == "top-right"}>
        <div class="relative bottom-10">
          <img
          alt="graphic"
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
            fallback={<img alt="Info Poster" src={props.imageSource} />}
          >
            <video
              class="object-cover"
              poster={props.videoPoster ?? undefined}
              muted
              autoplay
              loop
            >
              <source src={props.videoSource} type="video/webm" />
            </video>
          </Show>
          <div class="py-2">
            <h2 class="font-extrabold text-l flex items-center justify-center">
              {props.title} <img alt="Descriptive Icon" class="ml-1 h-4 xl:h-6" src={props.icon} />
            </h2>

            <p class="font-medium px-4 py-1">{props.children}</p>
          </div>
        </a>
      </div>
      <Show when={props.graphicPosition == "bottom-right"}>
        <div class="relative">
          <img
          alt="graphic"
            class="h-24 z-0 bottom-[-15px] right-0 absolute rotate-[135deg] "
            src={props.graphic}
          />
        </div>
      </Show>
    </div>
  );
}

export default App;
