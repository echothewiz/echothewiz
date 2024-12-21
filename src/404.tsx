import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { RouterLink } from "./ui/components/RouterLink";
import { GridPattern } from "./ui/components/GridPattern";

export default function ErrorPage() {
  return (
    <main className="flex flex-col justify-center gap-2.5 items-center w-full h-screen dark:bg-black dark:text-white">
      <b className="text-xl text-red">Error 404</b>
      <h1 className="font-bold text-3xl">PAGE NOT FOUND</h1>

      <RouterLink
        path="/"
        className="flex items-center gap-2 bg-night text-white p-2 shadow-md hover:scale-105 transition-transform"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <b>Go back</b>
      </RouterLink>

      <GridPattern
        width={100}
        height={100}
        strokeDasharray="10"
        squares={[[1, 5]]}
        className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] skew-x-6"
      />
    </main>
  );
}
