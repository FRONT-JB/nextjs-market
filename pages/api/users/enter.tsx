import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

// User를 조회하는 영역
// const user = await client.user.upsert({
//   where: {
//     ...payload,
//   },
//   create: {
//     name: 'Anonymous',
//     ...payload,
//   },
//   update: {},
// });

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>,
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  const payload = Math.floor(100000 + Math.random() * 900000) + '';

  if (!user) return res.status(400).json({ ok: false });

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: 'Anonymous',
            ...user,
          },
        },
      },
    },
  });

  return res.json({
    ok: true,
  });
}

export default withHandler('POST', handler);
