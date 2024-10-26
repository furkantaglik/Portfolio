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
      <ProjectList projects={projects} />
      <Arrow />
      <EducationsList educations={educations} />
      <Arrow />
      <ExperiencesList experiences={experiences} />
      <Arrow />
      <CertificatesList certificates={certificates} />
      <Arrow />
      <Contact />
    </>
  );
}
