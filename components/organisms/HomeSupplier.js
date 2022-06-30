import Link from 'next/link';
import { useSelector } from 'react-redux';
import Card from '../molecules/Card';
import CardSupplier from '../molecules/CardSupplier';
import ListPagination from '../molecules/ListPagination';

export default function HomeSupplier({ data }) {
  const state = useSelector((state) => state.global);
  return (
    <main className="layout">
      <Link href={'/supplier/add'}>
        <button className="border-black border-4 p-1 my-2 rounded-lg">Tambah Supplier</button>
      </Link>
      <h1 className="text-xl font-bold">List Supplier</h1>
      <hr />
      <div className="grid grid-rows-5 space-y-4 my-2">
        {!state.isPagination
          ? data?.map((item) => {
              return <CardSupplier key={data.id} data={item} />;
            })
          : state?.data.map((item) => {
              return <CardSupplier key={data.id} data={item} />;
            })}
      </div>
      <ListPagination totalPages={data.totalPages} />
    </main>
  );
}
