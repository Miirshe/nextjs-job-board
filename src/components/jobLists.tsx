import { Job } from "@prisma/client";
import Image from "next/image";
import companyLogoPlaceholder from "@/assets/company-logo-placeholder.png";
import { Banknote, Briefcase, Clock, Globe2, MapPin } from "lucide-react";
import { formatMoney, relativeDateFormat } from "@/lib/utils";
import Badge from "./Badge";
interface JobListAttributes {
  job: Job;
}
export default function JobLists({
  job: {
    title,
    companyName,
    type,
    location,
    locationType,
    companyLogoUrl,
    salary,
    createdAt,
  },
}: JobListAttributes) {
  return (
    <article className="flex gap-3 rounded-lg border p-3 hover:bg-muted/60">
      <Image
        src={companyLogoUrl || companyLogoPlaceholder}
        alt={`${companyName} logo`}
        width={150}
        height={150}
        className=" self-center rounded-lg"
      />
      <div className="flex grow flex-col space-y-3">
        <div>
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="text-muted-foreground">{companyName}</p>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <p className="flex items-center gap-2 sm:hidden">
            <Briefcase size={20} className="shrink-0" />
            {type}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={20} className="shrink-0" />
            {locationType}
          </p>
          <p className="flex items-center gap-2">
            <Globe2 size={20} className="shrink-0" />
            {location || "Worldwide"}
          </p>
          <p className="flex items-center gap-2">
            <Banknote size={20} className="shrink-0" />
            {formatMoney(salary)}
          </p>
          <p className="flex items-center gap-2 sm:hidden">
            <Clock size={20} className="shrink-0" />
            {relativeDateFormat(createdAt)}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 flex-col items-end justify-between sm:flex">
        <Badge>{type}</Badge>
        <span className="flex items-center gap-2">
          <Clock size={20} className="shrink-0" />
          {relativeDateFormat(createdAt)}
        </span>
      </div>
    </article>
  );
}
