import { Img } from "react-image";

import { SkillGraph } from "../ui/components/SkillGraph";
import { skills } from "../lib/skills";

export default function AboutMe() {
  return (
    <div className="w-full h-full md:flex">
      <div className="flex w-full h-1/2 md:w-[70%] md:h-full">
        <figure className="w-1/2 h-full p-5 md:flex md:justify-center md:items-center md:w-[40%] md:p-16">
          <Img
            src="/IMGs/echo_v3.png"
            className="w-full h-full object-cover rounded-xl outline-2 outline-dashed outline-robbinBlue outline-offset-4 brightness-90 md:h-[80%]"
          />
        </figure>

        <section className="flex flex-col justify-evenly items-center w-1/2 h-full pr-2.5 md:w-[60%] ">
          <IntroText />
        </section>
      </div>

      <div className="flex flex-col justify-center items-center gap-2.5 w-full h-1/2 md:w-[30%] md:h-full">
        <h2 className="font-bold text-2xl text-robbinBlue md:text-4xl">
          Skills
        </h2>
        <SkillGraph
          skills={skills}
          strokeWidth={10}
          className="w-[80%] h-[80%] text-white bg-night p-2.5 rounded-xl shadow shadow-absoluteBlack rotate-2 md:p-5 md:rotate-3"
          baseCircleClassName="stroke-black"
          progressCircleClassName="stroke-robbinBlue"
        />
      </div>
    </div>
  );
}

const IntroText = () => {
  return (
    <>
      <article>
        <h2 className="font-bold text-2xl text-robbinBlue md:text-4xl">
          Who am I?
        </h2>
        <p className="md:text-xl">
          I am <b>Bryan Álvarez</b>, Front-end Developer with passion for his
          work. I'm a self-taught developer from Mexico.
        </p>
      </article>

      <article>
        <h2 className="font-bold text-2xl text-robbinBlue md:text-4xl">
          Who is Echo?
        </h2>
        <p className="md:text-xl">
          Is not only my brand mascot, is my fellow mate and the one that will
          be at my side in this journey.
        </p>
      </article>
    </>
  );
};
