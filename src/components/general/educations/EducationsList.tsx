import { Education } from "@/types";
import EducationCard from "./EducationCard";

type EducationsListProps = {
  educations: Education[];
};
export default function EducationsList({ educations }: EducationsListProps) {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-5">
        EDUCATIONS
      </h1>
      <div className="flex  gap-x-10  justify-center">
        {educations.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </section>
  );
}
