import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectId: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectId,
}: ProjectCardProps) {
  return (
    <Card
      className="border w-full mx-auto"
      aria-labelledby={`card-${projectId}`}
    >
      <CardHeader>
        <h1 className="text-2xl font-semibold" id={`card-${projectId}`}>
          {title}
        </h1>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={imageUrl}
          width={300}
          height={100}
          alt={title}
          className="w-full h-auto"
          priority
        />
      </CardContent>
      <CardFooter>
        <Link
          className="outline-dashed italic outline-secondary hover:bg-primary transition-all bg-secondary rounded w-full text-center font-semibold text-lg py-2"
          href={`/project/${projectId}`}
          aria-label={`Detayları görüntüle: ${title}`}
        >
          Details
        </Link>
      </CardFooter>
    </Card>
  );
}
