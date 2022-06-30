import HomeSupplier from '@/components/organisms/HomeSupplier';
import Layout from '@/components/template/Layout';

export default function index({ data }) {
  console.log(data);
  return (
    <Layout>
      <HomeSupplier data={data.data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/Supplier/inquiry/0/10`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}
