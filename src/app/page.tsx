import About from "@/components/general/About";
import Arrow from "@/components/general/Arrow";
import Contact from "@/components/general/Contact";
import CertificatesList from "@/components/general/certificates/CertificatesList";
import ProjectList from "@/components/general/projects/ProjectList";
import Skills from "@/components/general/Skills";
import EducationsList from "@/components/general/educations/EducationsList";
import ExperiencesList from "@/components/general/experiences/ExperiencesList";
import { getAllProjects } from "@/actions/projectsActions";
import { getAllEducation } from "@/actions/educationsActions";
import { getAllCertificate } from "@/actions/certificatesActions";
import { getAllExperience } from "@/actions/experiencesActions";
import { Suspense } from "react";

export default async function Home() {
  const [projects, educations, certificates, experiences] = await Promise.all([
    getAllProjects(),
    getAllEducation(),
    getAllCertificate(),
    getAllExperience(),
  ]);

  return (
    <>
      <About />
      <Arrow />
      <Skills />
      <Arrow />

      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectList projects={projects} />
      </Suspense>
      <Arrow />
      <Suspense fallback={<div>Loading experiences...</div>}>
        <ExperiencesList experiences={experiences} />
      </Suspense>
      <Arrow />
      <Suspense fallback={<div>Loading certificates...</div>}>
        <CertificatesList certificates={certificates} />
      </Suspense>
      <Arrow />
      <Suspense fallback={<div>Loading education...</div>}>
        <EducationsList educations={educations} />
      </Suspense>
      <Arrow />
      <Contact />
    </>
  );
}
