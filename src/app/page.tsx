import JobLists from "@/components/jobLists";
import prisma from "@/lib/prisma";
export default async function Home() {
  const job = await prisma?.job.findMany({
    where: {
      approved: true,
    },
  });
  return (
    <main className="mx-w-5xl mx-auto my-10 space-y-10 px-3">
      <section>
        <div className="space-y-4">
          {job?.map((job) => {
            return <JobLists key={job.id} job={job} />;
          })}
        </div>
      </section>
    </main>
  );
}
