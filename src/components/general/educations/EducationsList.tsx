import { Education } from "@/types";

type EducationsListProps = {
  educations: Education[];
};
export default function EducationsList({ educations }: EducationsListProps) {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-5">
        EDUCATIONS
      </h1>
    </section>
  );
}
