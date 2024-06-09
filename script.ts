import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DBにクエリ送信
async function main() {
  // DBへ格納
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // })

  //   data: {
    //     name: 'Bob',
    //     email: 'bob@prisma.io',
    //     posts: {
      //       create: [
        //         {
          //           title: 'Hello World',
          //           published: true
          //         },
          //         {
            //           title: 'My second post',
            //           content: 'This is still a draft'
            //         }
            //       ],
            //     },
            //   },
            // })

  //DBから取得
    // const users = await prisma.user.findMany()
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  // console.log(user)
  console.dir(usersWithPosts, {depth:null})
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
