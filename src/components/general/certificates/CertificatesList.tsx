import { Certificate } from "@/types";

type CertificatesListProps = {
  certificates: Certificate[];
};

export default function CertificatesList({
  certificates,
}: CertificatesListProps) {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center border-b-2 border-secondary pb-2 mb-5">
        CERTIFICATES
      </h1>
    </section>
  );
}
