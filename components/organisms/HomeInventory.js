import { useSelector } from 'react-redux';
import Card from '@/components/molecules/Card';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Loading from '../molecules/Loading';
import { useCallback, useEffect, useState } from 'react';
import { getInventories } from '@/utils';
import { useQuery } from 'react-query';

export default function HomeInventory({ data }) {
  const [page, setPage] = useState(0);

  const query = useQuery(['inventories', page], () => getInventories(page), {
    initialData: true,
  });

  const { status } = useSession();
  const router = useRouter();

  const handleRedirect = () => {
    status === 'unauthenticated'
      ? toast.error('you must be login for access this url!')
      : router.push('/inventories/add');
  };

  const nextPage = () => {
    if (page <= query.totalPages) {
      setPage(page + 1);
    }
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page >= 0) {
      setPage(page - 1);
    }
  };

  return (
    <main className="layout">
      <button onClick={handleRedirect} className="bg-blue-600 text-white p-2 my-2 rounded-lg">
        Tambah Barang
      </button>
      <h1 className="text-xl font-bold">List Barang Inventory</h1>
      <hr />
      {query.isLoading || query.isFetching ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-rows-5 space-y-4 my-2">
            {!state.ispage
              ? data?.data.map((item) => {
                  return <Card key={data.id} data={item} />;
                })
              : state?.data.map((item) => {
                  return <Card key={data.id} data={item} />;
                })}
          </div>
          <div className="flex space-x-2 items-center justify-center my-3">
            <button
              disabled={page === 0}
              onClick={prevPage}
              type="button"
              className="bg-blue-600 p-2 rounded-lg text-white font-semibold disabled:bg-blue-800 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <p>{page}</p>
            <button
              // disabled={page === data.totalPages}
              onClick={nextPage}
              type="button"
              className="bg-blue-600 p-2 rounded-lg text-white font-semibold disabled:bg-blue-800 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}
