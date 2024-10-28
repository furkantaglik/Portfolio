import { Certificate } from "@/types";
import Link from "next/link";
import { Link as LucideLink } from "lucide-react";

type CertificateCardProps = {
  certificate: Certificate;
};

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <div className="border p-3 w-full">
      <h1 className="text-lg font-semibold">{certificate.title}</h1>
      <div className="flex gap-x-3 mb-5">
        <p>{certificate.company}</p>|<p>{certificate.date}</p>
      </div>
      <Link
        className="px-5 py-1 rounded bg-secondary text-sm italic flex items-center w-fit"
        href={certificate.source}
      >
        <LucideLink size={20} /> Source link
      </Link>
    </div>
  );
}
