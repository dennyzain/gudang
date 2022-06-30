import CardDetail from '@/components/molecules/CardDetail';
import Layout from '@/components/template/Layout';

export default function detailBarang({ data }) {
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
  const res1 = await fetch(`${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/0/10`).then(
    (res) => res.json()
  );
  const res2 = await fetch(`${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/1/10`).then(
    (res) => res.json()
  );
  const data = [...res1.data, ...res2.data];
  const paths = data.map((item) => ({ params: { id: item.id } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/InventoryItem/${id}`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}
