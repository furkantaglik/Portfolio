import { Certificate } from "@/types";
import CertificateCard from "./CertificateCard";
type CertificatesListProps = {
  certificates: Certificate[];
};

export default async function CertificatesList({
  certificates,
}: CertificatesListProps) {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-5">
        CERTIFICATES
      </h1>
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 place-items-center">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </section>
  );
}
