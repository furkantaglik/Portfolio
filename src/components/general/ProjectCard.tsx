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
    <Card className="border w-full mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={imageUrl}
          width={300}
          height={100}
          alt={title}
          className="w-full h-auto"
        />
      </CardContent>
      <CardFooter>
        <Link
          className="outline-dashed italic outline-secondary hover:bg-primary transition-all bg-secondary rounded w-full text-center font-semibold text-lg py-2"
          href={`/project/${projectId}`}
        >
          Details
        </Link>
      </CardFooter>
    </Card>
  );
}
