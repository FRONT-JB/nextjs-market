# Carrot Market

Serverless Carrot Market Clone using NextJS, Tailwind, Prisma, PlanetScale and Cloudflare.

---

`brew install planetscale/tap/pscale`

    PlanetScale Install

`brew install mysql-client`

    MySQL Client Install

`pscale connect nextjs-market`

    Connect DB

---

`env Url`

    Connect 후에 열린 url을 env에 입력

    DATABASE_URL="mysql://127.0.0.1:3306/nextjs-market"

    mysql://127.0.0.1:3306/nextjs-market
    db://url:3306/projectName

---

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

```js

// model Field 에서 참조값으로 사용할 경우 아래의 datasource db 에서
// referentialIntegrity = "prisma" 을 주석처리 한 뒤에
// 참조로 쓰게할 model Field 에서 자동완성을 시켜준다.
// VSCODE 에서 아직 완전히 지원하지 않기 때문에 위의 방법으로 작성

datasource db {
  provider             = "mysql"
  url                  = env("DATABASE_URL")
  referentialIntegrity = "prisma"
}

model Token {
  id        Int      @id @default(autoincrement())
  payload   String   @unique
  user      User     @relation(fields: [userId], references: [id]) // relation 연결
  userId    Int                                                    // relation 연결시 자동으로 생성
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

```

---

`npx prisma generate`

**libs/client.ts**

**node_modules/.prisma/client/index.d.ts**

    DB에게 어떻게 말을걸지 Client를 생성
    PrismaClient가 node_modules에 d.ts로 정의해주어
    스키마를 바탕으로 생성된 타입스크립트 타입정보를 모두 확인할 수 있다.

---

`npx prisma db push`

    Prisma가 schema.prisma 파일을 확인해서
    plantScale에 전달한다.

---

`npx prisma studio`

    Prisma Playground
    ( GraphQL Playground 처럼 현재 DB 상태를 볼 수 있다. )

---

`Update or create records (upsert)`

    upsert()는 기존 데이터를 업데이트하거나 새 데이터베이스 레코드를 생성합니다.
    다음 쿼리는 upsert를 사용하여 특정 이메일 주소로 사용자 레코드를 업데이트하거나,
    존재하지 않는 경우 해당 사용자 레코드를 생성합니다.

```js
const upsertUser = await prisma.user.upsert({
  where: {
    email: 'hello@gmail.com',
  },
  update: {
    name: 'pizza',
  },
  create: {
    email: 'hello@gmail.com',
    name: 'pizza',
  },
});
```

---

`Api Routes`

**pages/api**

    Client에서 DB를 수정하는 권한을 사용할 수 없기 때문에 Client 페이지에서는 DB에 접근할 수 없다.
    API 요청을 통해 서버에서 DB에 접근할 수 있다.

---

`React Hook Form`

[React-Hook-Form Page](https://react-hook-form.com/)

```javascript
const { register } = useForm();

console.log(register('name'));

{
  name: "name"
  onBlur: async (event) => {…}
  onChange: async (event) => {…}
  ref: (ref) => {…}
}
```

```html
<input {...register('username')} type='text' placeholder='Username' required />
```

**input에 state를 주입하기 위해 register 사용**

    register 객체 내부에 있는 속성들을 input에 주입

```javascript
const { watch } = useForm();

console.log(watch());

{username: '111', email: '', password: ''}
```

**각 input에 대한 state를 가지고있는 watch 함수**

```javascript
import { FieldErrors, useForm } from 'react-hook-form';
interface LoginFormTypes {
  username: string;
  password: string;
  email: string;
}

const { register, handleSubmit, formState: { errors } } = useForm<LoginFormTypes>();

const onValid = (data: LoginFormTypes) => {
  console.log('im valid');
};

const onInValid = (errors: FieldErrors) => {
  console.log('im invalid');
  console.log(errors);
};

<form
  onSubmit={handleSubmit(onValid)}
  style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
>
  <input
    {...register('username', {
      required: 'Username is Required',
      minLength: {
        message: 'The Username shold be longer than 5 chars.',
        value: 5,
      },
      // Validation 조건에 걸렸을 경우 어떻게 메시지를 보여줄지
    })}
    type='text'
    placeholder='Username'
  />
  {<span>{errors.username?.message}</span>}
  <input
    {...register('email', {
      required: 'Email is Required',
      validate: {
        notGmail: (value) =>
          !value.includes('@gmail.com') || 'Gmail is not allowed',
      },
      // Validation 조건에 걸렸을 경우 어떻게 메시지를 보여줄지
    })}
    type='email'
    placeholder='Email'
  />
  {<span>{errors.email?.message}</span>}
  {...inputs}
</form>;
```

**handleSubmit 함수를 통해 Validation 체크**
