# Carrot Market

Serverless Carrot Market Clone using NextJS, Tailwind, Prisma, PlanetScale and Cloudflare.

`pscale connect nextjs-market`

    Connect DB

`env Url`

    Connect 후에 열린 url을 env에 입력

    DATABASE_URL="mysql://127.0.0.1:3306/nextjs-market"

    mysql://127.0.0.1:3306/nextjs-market
    db://url:3306/projectName

`Prisma Schema`

**prisma/schema.prisma**

[Prisma Schema, Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)

```javascript

// User DB 타입 선언

model User {
  id        Int      @id @default(autoincrement())
  phone     Int?     @unique
  email     String?  @unique
  name      String
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

```

`npx prisma generate`

**libs/client.ts**

**node_modules/.prisma/client/index.d.ts**

    DB에게 어떻게 말을걸지 Client를 생성
    PrismaClient가 node_modules에 d.ts로 정의해주어
    스키마를 바탕으로 생성된 타입스크립트 타입 정보를 모두 확인 할 수 있다.

`npx prisma db push`

    Prisma가 schema.prisma 파일을 확인해서
    plantScale에 전달한다.

`npx prisma studio`

    Prisma Playground
    ( GraphQL Playground 처럼 현재 DB 상태를 볼 수 있다. )

`Api Routes`

**pages/api**

    Client에서 DB를 수정하는 권한을 사용할 수 없기 때문에 Client 페이지에서는 DB에 접근할 수 없다.
    API 요청을 통해 서버에서 DB에 접근할 수 있다.
