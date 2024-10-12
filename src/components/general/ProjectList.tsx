"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectList() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-8">
        PROJECTS
      </h1>

      <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {[1, 2, 3].map((item) => (
            <CarouselItem
              key={item}
              className="pl-2 md:pl-4 basis-full md:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video md:aspect-[4/3] items-center justify-center p-6">
                    <span className="text-4xl md:text-6xl font-semibold">
                      {item}
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className=" block">
          <CarouselPrevious className="absolute -left-0 xs:-left-10 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-0  xs:-right-10 top-1/2 transform -translate-y-1/2" />
        </div>
      </Carousel>
    </section>
  );
}