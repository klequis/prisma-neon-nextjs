import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('starting main')

  const i = await prisma.item.create({
    data: {
      title: 'Pay Acme',
      notes: {
        create: [
          {
            body: 'Spoke with Sandy Smith who instructed me to reach out to Kim Kane in the finance department to clarify the amount that needs to be paid',
          },
          {
            body: 'Kim Kane clarified that the amount to be paid is $5,271.45',
          },
        ],
      },
      contacts: {
        create: [
          {
            name: 'Kim Kane',
            phones: {
              create: [
                {
                  phone: '111-111-1111',
                  phone_type: 'mobile',
                },
              ],
            },
          },
          {
            name: 'Sandy Smith',
            phones: {
              create: [
                {
                  phone: '222-222-2222',
                  phone_type: 'mobile',
                },
              ],
            },
          },
        ],
      },
    },
  })
  const j = await prisma.item.create({
    data: {
      title: 'New floors',
      notes: {
        create: [
          {
            body: 'Brandon recommends walnut flooring. Says it will last the longest',
          },
        ]
      },
      contacts: {
        create: [
          {
            name: 'Brandon Bradshaw',
            phones: {
              create: [
                {
                  phone: '333-333-3333',
                  phone_type: 'mobile',
                },
              ],
            },
          },
        ],
      },
    },
  })
  console.log('output', [i, j].map(x => x))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
