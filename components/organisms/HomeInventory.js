import Link from 'next/link';
import { useSelector } from 'react-redux';
import Card from '@components/molecules/Card';
import ListPagination from '@components/molecules/ListPagination';

export default function HomeInventory({ data }) {
  const state = useSelector((state) => state.global);
  return (
    <main className="layout">
      <Link href={'/inventories/add'}>
        <button className="border-black border-4 p-1 my-2 rounded-lg">Tambah Barang</button>
      </Link>
      <h1 className="text-xl font-bold">List Barang Inventory</h1>
      <hr />
      <div className="grid grid-rows-5 space-y-4 my-2">
        {!state.isPagination
          ? data?.data.map((item) => {
              return <Card key={data.id} data={item} />;
            })
          : state?.data.map((item) => {
              return <Card key={data.id} data={item} />;
            })}
      </div>
      <ListPagination totalPages={data.totalPages} />
    </main>
  );
}
