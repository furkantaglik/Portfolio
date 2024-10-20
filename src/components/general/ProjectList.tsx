"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/actions/projectActions";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-8">
        PROJECTS
      </h1>

      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.length > 0 ? (
            projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/3"
              >
                <div className="p-1">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageUrl={project.images[0]}
                    projectId={project.id}
                  />
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className="text-center basis-full">
              <p>No projects available.</p>
            </CarouselItem>
          )}
        </CarouselContent>
        <div className="block">
          <CarouselPrevious className="absolute -left-0 xs:-left-10 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-0 xs:-right-10 top-1/2 transform -translate-y-1/2" />
        </div>
      </Carousel>
    </section>
  );
}
