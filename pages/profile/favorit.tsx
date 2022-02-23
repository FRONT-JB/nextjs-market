import { Item, Layout } from 'components';
import type { NextPage } from 'next';

const Favorit: NextPage = () => {
  return (
    <Layout title='관심목록' canGoBack>
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

export default Favorit;
