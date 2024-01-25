import { generatePasswordHash } from "../../src/app/user/utils";
import { prisma } from "../../src/database/client";
export const usersSeed = async () => {
  const adminPassword = generatePasswordHash("SenhaDoAdmin");

  await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@admin.com",
      password: adminPassword,
    },
  });
};
