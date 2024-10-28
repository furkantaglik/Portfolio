import { Experience } from "@/types";
import ExperienceCard from "./ExperienceCard";

type ExperiencesListProps = {
  experiences: Experience[];
};
export default function ExperiencesList({ experiences }: ExperiencesListProps) {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-5">
        EXPERIENCES
      </h1>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 place-items-center">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
