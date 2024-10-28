import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="border w-full mx-auto bg-background"
      aria-labelledby={`card-${project.id}`}
    >
      <CardHeader>
        <h1 className="text-2xl font-semibold" id={`card-${project.id}`}>
          {project.title}
        </h1>
        <CardDescription className="h-[50px]">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={project.images[0]}
          width={300}
          height={200}
          alt={project.title}
          className="w-full h-[200px]"
          priority
        />
      </CardContent>
      <CardFooter>
        <Link
          className="outline-dashed italic outline-secondary hover:bg-secondary transition-all bg-secondary/70 rounded w-full text-center font-semibold text-lg "
          href={`/project/${project.id}`}
          aria-label={`Detayları görüntüle: ${project.title}`}
        >
          Details
        </Link>
      </CardFooter>
    </Card>
  );
}
