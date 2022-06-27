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

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
