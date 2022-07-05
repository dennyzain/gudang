import CardDetail from '@/components/molecules/CardDetail';
import Layout from '@/components/template/Layout';
import Fetch from '@/fetch';
import { useQuery } from 'react-query';

export default function DetailBarang({ data, status }) {
  if (status === 'error') {
    return (
      <Layout>
        <div className="layout h-screen">
          <h1>Data Error</h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="layout h-screen">
        <h1 className="text-xl font-bold">Detail Barang</h1>
        <hr />
        <div className="flex items-center">
          <CardDetail data={data} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res1 = await Fetch({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/0/10`,
  });
  const res2 = await Fetch({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/1/10`,
  });
  console.log(res1, 'in getStaticPaths function');
  if (res1) {
    const data = [...res1.data.data, ...res2.data.data];
    const paths = data.map((item) => ({ params: { id: item.id } }));
    return {
      paths,
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await Fetch({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/${id}`,
  });
  return {
    props: { status: res.status, data: res.data },
    revalidate: 1,
  };
}
