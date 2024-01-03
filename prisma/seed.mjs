import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("starting main");

  const i = await prisma.item.create({
    data: {
      title: "Pay Acme",
      dates: {
        create: {},
      },
      notes: {
        create: [
          {
            body: "Spoke with Sandy Smith who instructed me to reach out to Kim Kane in the finance department to clarify the amount that needs to be paid",
          },
          {
            body: "Kim Kane clarified that the amount to be paid is $5,271.45",
          },
        ],
      },
      contacts: {
        create: [
          {
            name: "Kim Kane",
            phones: {
              create: [
                {
                  number: "111-111-1111",
                  type: "mobile",
                },
                {
                  number: "444-444-4444",
                  type: "office",
                },
              ],
            },
          },
          {
            name: "Sandy Smith",
            phones: {
              create: [
                {
                  number: "222-222-2222",
                  type: "mobile",
                },
              ],
            },
          },
        ],
      },
    },
  });
  const j = await prisma.item.create({
    data: {
      title: "New floors",
      dates: {
        create: {},
      },
      notes: {
        create: [
          {
            body: "Brandon recommends walnut flooring. Says it will last the longest",
          },
        ],
      },
      contacts: {
        create: [
          {
            name: "Brandon Bradshaw",
            phones: {
              create: [
                {
                  number: "333-333-3333",
                  type: "mobile",
                },
              ],
            },
          },
        ],
      },
    },
  });
  console.log(
    "output",
    [i, j].map((x) => x),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
