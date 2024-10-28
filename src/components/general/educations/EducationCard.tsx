import { Education } from "@/types";
import Image from "next/image";

type EducationCardProps = {
  education: Education;
};

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <section className="border w-fit grid">
      <div className="mx-auto md:left-0">
        <Image
          src="https://lh3.googleusercontent.com/p/AF1QipP8Kw9Xm7y5SaWVz8u9xY-nWSVkMzzH3ydZLcNa=s1360-w1360-h1020"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="w-full p-5">
        <h1 className="text-lg font-semibold">{education.school}</h1>
        <div className="flex gap-x-5 mx-auto ">
          <p>{education.section}</p>|<span>{education.year}</span>
        </div>
      </div>
    </section>
  );
}
