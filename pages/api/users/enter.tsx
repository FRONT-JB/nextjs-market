import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };

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

  // 이곳에서 위의 유저를 조회한다.
  // 조회 후에 유저정보가 있으면 Token을 생성
  const token = await client.token.create({
    data: {
      payload: '1234',
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: 'Anonymous',
            ...payload,
          },
        },
      },
    },
  });

  return res.status(200).end();
}

export default withHandler('POST', handler);
