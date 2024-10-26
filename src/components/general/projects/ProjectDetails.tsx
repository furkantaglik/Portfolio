import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Globe, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectDetails({ projectDetail }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 mx-auto justify-center items-center gap-y-10 gap-x-10">
      <Carousel className="w-full mx-auto md:col-span-4">
        <CarouselContent>
          {projectDetail.images.map((imageUrl, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Image
                  className="w-full object-fill h-[300px]"
                  src={imageUrl}
                  alt={projectDetail.title}
                  width={500}
                  height={300}
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 hover:text-background" />
          <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 hover:text-background" />
        </div>
      </Carousel>

      <div className="border border-dashed w-full md:col-span-8 p-5">
        <h1 className="text-2xl font-semibold">{projectDetail.title}</h1>
        <p className="text-sm mt-2">{projectDetail.description}</p>

        <h2 className="mt-10 font-semibold text-lg">Tech</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {projectDetail.techs.map((tech) => (
            <span key={tech} className="p-1 bg-secondary text-xs rounded">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="font-semibold text-lg">Links</h2>
          <div className="flex flex-wrap gap-x-5 mt-2">
            <Link
              href={projectDetail.sourceCodeUrl}
              className="text-sm bg-accent/70 hover:bg-accent text-background font-semibold p-1 rounded flex w-fit items-center gap-x-2"
              aria-label={`Source code for ${projectDetail.title}`}
            >
              <Github size={20} /> Source Code
            </Link>
            <Link
              href={projectDetail.demoUrl}
              className="text-sm bg-accent/70 hover:bg-accent text-background font-semibold p-1 rounded flex w-fit items-center gap-x-2"
              aria-label={`Demo for ${projectDetail.title}`}
            >
              <Globe size={20} /> Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
