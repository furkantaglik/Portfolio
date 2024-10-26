import { Experience } from "@/types";

type ExperiencesListProps = {
  experiences: Experience[];
};
export default function ExperiencesList({ experiences }: ExperiencesListProps) {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-5">
        EXPERIENCES
      </h1>
    </section>
  );
}
