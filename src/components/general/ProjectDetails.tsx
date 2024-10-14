import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Globe, Github } from "lucide-react";

export default function ProjectDetails() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-12 mx-auto justify-center items-center gap-y-10 gap-x-10">
        <Carousel className="w-full mx-auto md:col-span-4">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="">
            <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 hover:text-background" />
            <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 hover:text-background" />
          </div>
        </Carousel>

        <div className="border border-dashed w-full md:col-span-8 p-5">
          <h1 className="text-2xl font-semibold">Furkan Otomotiv</h1>
          <p className="text-sm mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            corrupti, omnis itaque aut inventore eos labore dolorum, vero
            corporis temporibus blanditiis eaque nulla assumenda nam aliquam
            impedit accusantium quod in! Expedita quaerat assumenda veniam
            eveniet facilis voluptates recusandae saepe velit fugiat dolore.
            Beatae optio ipsam error velit. Nobis consectetur facilis minima
            eos, ex molestias porro deleniti, quod laboriosam culpa
            voluptatibus. Mollitia at, cumque minima praesentium, perspiciatis
            riatur? Perferendis nam voluptates velit!
          </p>

          <h1 className="mt-10 font-semibold text-lg">Tech</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "TailwindCSS",
              "Node.js",
              "MongoDB",
              "Git",
            ].map((tech) => (
              <span key={tech} className="p-1 bg-secondary text-xs rounded">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-lg">Links</h1>
            <div className="flex flex-wrap gap-x-5 mt-2">
              <Link
                href="https://github.com/furkantaglik/furkanoto"
                className="text-sm bg-accent/70 hover:bg-accent text-background font-semibold p-1 rounded flex w-fit items-center gap-x-2"
              >
                <Github size={20} /> Source Code
              </Link>
              <Link
                href="https://github.com/furkantaglik/furkanoto"
                className="text-sm bg-accent/70 hover:bg-accent text-background font-semibold p-1 rounded flex w-fit items-center gap-x-2"
              >
                <Globe size={20} /> Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
