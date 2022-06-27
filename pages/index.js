import Layout from "../components/template/Layout";
import Card from "../components/molecules/Card";

export default function Home(){
  return (
    <Layout>
    <main className="layout">
            <h1 className="text-xl font-bold">List Barang Inventory</h1>
            <hr />
            <div className="grid grid-cols-4">
            <Card />
            </div>
    </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}//InventoryItem/inquiry/1/10`);
  const barang = await res.json()
  console.log(barang)
  return {
    props: {
      posts:null,
    },
  }
}
