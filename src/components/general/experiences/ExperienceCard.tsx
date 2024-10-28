import { Experience } from "@/types";
import Image from "next/image";

type ExperienceCardProps = {
  experience: Experience;
};
export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex items-center gap-x-3 border p-3 w-full">
      <div>
        <Image
          src={experience.imageUrl}
          width={100}
          height={100}
          alt={experience.company}
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold">{experience.company}</h1>
        <p>{experience.role}</p>
        <p>{experience.date}</p>
      </div>
    </div>
  );
}
