import { Item, Layout } from 'components';
import type { NextPage } from 'next';

const Bought: NextPage = () => {
  return (
    <Layout title='구매내역' canGoBack>
      <div className='flex flex-col pb-10 space-y-5 divide-y'>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title='iPhone 14'
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
