import Layout from '@components/template/Layout';
import HomeInventory from '@components/organisms/HomeInventory';

export default function Home({ data }) {
  return (
    <Layout>
      <HomeInventory data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/0/5`);
  const data = await res.json();
  return {
    props: { data },
    revalidate: 2,
  };
}
