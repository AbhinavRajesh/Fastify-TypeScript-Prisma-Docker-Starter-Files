import { PrismaClient } from "@prisma/client";
import Fastify from "fastify";
import { nanoid } from "nanoid";

const fastify = Fastify({ logger: true });
const db = new PrismaClient({ log: ["error", "info", "query", "warn"] });

const genId = () => nanoid(16);

const seedData = async () => {
  if ((await db.user.count()) === 0) {
    await Promise.all([
      db.user.create({
        data: {
          id: genId(),
          email: "test1@test.com",
          name: "Test 1",
        },
      }),
      db.user.create({
        data: {
          id: genId(),
          email: "test2@test.com",
          name: "Test 2",
        },
      }),
    ]);
  }
};

seedData();

fastify.get("/", async () => {
  return db.user.findMany();
});

const PORT = process.env.PORT ?? 8080;

const start = async () => {
  try {
    await fastify.listen(PORT, "0.0.0.0");
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
