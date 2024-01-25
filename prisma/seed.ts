
import { usersSeed } from './seeds/users'

import { prisma } from '../src/database/client'


async function main() {
  await Promise.allSettled([
    usersSeed(),
  ])
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
