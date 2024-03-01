const { PrismaClient } = require("@prisma/client");
const { placeholderJobs } = require("./placeholder-data");
const prisma = new PrismaClient();

const main = async () => {
  await Promise.all(
    placeholderJobs.map(async (job) => {
      await prisma.job.upsert({
        where: {
          slug: job.slug,
        },
        update: job,
        create: job,
      });
    }),
  );
};

main()
  .then(() => {
    prisma.$disconnect;
  })
  .catch((err) => {
    console.log("error while connecting prisma : ", err);
    prisma.$disconnect;
    process.exit(1);
  });
