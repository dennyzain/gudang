import { useSelector } from 'react-redux';
import Card from '@/components/molecules/Card';
import ListPagination from '@/components/molecules/ListPagination';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function HomeInventory({ data }) {
  const state = useSelector((state) => state.global);
  const { status } = useSession();
  const router = useRouter();
  const handleRedirect = () => {
    status === 'unauthenticated'
      ? toast.error('you must be login for access this url!')
      : router.push('/inventories/add');
  };
  return (
    <main className="layout">
      <button onClick={handleRedirect} className="bg-blue-600 text-white p-2 my-2 rounded-lg">
        Tambah Barang
      </button>
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
