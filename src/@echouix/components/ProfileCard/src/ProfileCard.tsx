import { Img } from "react-image";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { IconLink } from "../../IconLink/src";

import clsx from "clsx";

interface ProfileCardProps {
  imageUrl?: string;
  imageAlt?: string;
  profileName?: string;
  profileJob?: string;
  className?: string;
  imageClassName?: string;
}

const ProfileCard = ({
  imageUrl,
  imageAlt,
  profileName,
  profileJob,
  className,
  imageClassName,
}: ProfileCardProps) => {
  return (
    <div
      className={clsx(
        "outline-2 outline-dashed outline-robbinBlue outline-offset-4",
        className
      )}
    >
      <figure className="flex justify-center items-center w-full h-[80%]">
        <Img
          src={imageUrl!}
          alt={imageAlt}
          className={clsx("w-[80%] h-[87%] object-cover", imageClassName)}
        />
      </figure>

      <section className="flex flex-col justify-start items-center w-full h-[20%]">
        <p className="py-1 px-1.5 text-xs text-white bg-night rounded-xl">
          {profileJob}
        </p>

        <h2 className="font-bold text-3xl text-electricBlue">{profileName}</h2>
      </section>
    </div>
  );
};

export default ProfileCard;
