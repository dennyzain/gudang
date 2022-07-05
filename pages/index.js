import Fetch from '@/fetch';
import Layout from '@/components/template/Layout';
import HomeInventory from '@/components/organisms/HomeInventory';
import { getInventories } from '@/utils';
import { useQueryClient, useQuery } from 'react-query';

export default function Home(props) {
  const { data, isLoading, isFetching } = useQuery('listInventories', getInventories, {
    initialData: props,
  });
  const queryClient = useQueryClient();
  console.log(queryClient, 'data query client');

  return (
    <Layout>
      <HomeInventory
        data={data.data}
        isLoading={isLoading}
        isFetching={isFetching}
        status={data.status}
      />
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
