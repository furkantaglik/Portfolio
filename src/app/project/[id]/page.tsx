import { GetByProjectId } from "@/actions/projectsActions";
import ProjectDetails from "@/components/general/projects/ProjectDetails";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const projectDetail = await GetByProjectId(params.id);

  if (!projectDetail) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for does not exist.",
    };
  }

  return {
    title: `${projectDetail.title} - Project Details`,
    description: projectDetail.description,
    openGraph: {
      title: `${projectDetail.title} - Project Details`,
      description: projectDetail.description,
      url: `/project/${params.id}`,
      siteName: "Furkan Tağlık",
      images: projectDetail.images.map((imageUrl) => ({
        url: imageUrl,
        width: 800,
        height: 600,
        alt: projectDetail.title,
      })),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${projectDetail.title} - Project Details`,
      description: projectDetail.description,
      images: projectDetail.images[0] || "/socials.png",
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const projectDetail = await GetByProjectId(params.id);

  if (!projectDetail) {
    return (
      <section className="text-center my-52">
        <h1 className="text-2xl font-semibold">Project Not Found</h1>
        <p className="mt-2">The project you're looking for does not exist.</p>
      </section>
    );
  }

  return (
    <section className="mt-20 mb-52">
      <ProjectDetails projectDetail={projectDetail} />
    </section>
  );
}
