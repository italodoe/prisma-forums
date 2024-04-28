import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const backendForum = await db.forum.create({
  data: {
    name: "Forum BackEnd for question",
  },
});

console.log(`Create Forum with id: ${backendForum.forumId}`);

const frontendForum = await db.forum.create({
  data: {
    name: "Forum FontEnd for question",
  },
});

console.log(`Create Forum with id: ${frontendForum.forumId}`);

const user = await db.user.create({
  data: {
    nick: "london",
    fullName: "Jons Longs",
    messages: {
      createMany: {
        data: [
          {
            forumId: backendForum.forumId,
            text: "Hey, where is the log error?",
          },
          {
            forumId: frontendForum.forumId,
            text: "Please, use ajax responsibility",
          },
        ],
      },
    },
  },
});

console.log(`Created user: ${user.userId} >> ${user.nick} >> ${user.fullName}`);
