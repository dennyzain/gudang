import Fetch from '@/fetch';
import Layout from '@/components/template/Layout';
import HomeInventory from '@/components/organisms/HomeInventory';
import { getInventories } from '@/utils';
import { useQueryClient, useQuery } from 'react-query';

export default function Home({ data }) {
  console.log(data, 'this a use query result');
  return (
    <Layout>
      <HomeInventory data={data.data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getInventories();
  return {
    props: { data: res.data, status: res.status },
    revalidate: 2,
  };
}
