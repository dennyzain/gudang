import { useSelector } from 'react-redux';
import Card from '@/components/molecules/Card';
import ListPagination from '@/components/molecules/ListPagination';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Loading from '../molecules/Loading';
import { useCallback, useEffect, useState } from 'react';
import { getInventories } from '@/utils';

export default function HomeInventory({ data, isLoading, isFetching }) {
  const [pagination, setPagination] = useState(0);
  console.log(data, 'totalPages');

  const getDataInventories = useCallback(async () => {
    const res = await getInventories(pagination);
    console.log(res);
  }, [pagination]);

  useEffect(() => {
    getDataInventories();
  }, []);

  const state = useSelector((state) => state.global);
  const { status } = useSession();
  const router = useRouter();

  const handleRedirect = () => {
    status === 'unauthenticated'
      ? toast.error('you must be login for access this url!')
      : router.push('/inventories/add');
  };

  const nextPage = () => {
    if (pagination <= data.totalPages) {
      setPagination(pagination + 1);
    }
  };

  const prevPage = () => {
    if (pagination >= 0) {
      setPagination(pagination - 1);
    }
  };

  console.log(data, 'data query from homeInventory');
  return (
    <main className="layout">
      <button onClick={handleRedirect} className="bg-blue-600 text-white p-2 my-2 rounded-lg">
        Tambah Barang
      </button>
      <h1 className="text-xl font-bold">List Barang Inventory</h1>
      <hr />
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-rows-5 space-y-4 my-2">
            {!state.isPagination
              ? data?.data.map((item) => {
                  return <Card key={data.id} data={item} />;
                })
              : state?.data.map((item) => {
                  return <Card key={data.id} data={item} />;
                })}
          </div>
          {/* <div className="flex space-x-2 items-center justify-center my-3">
            <button
              disabled={pagination === 0}
              onClick={prevPage}
              type="button"
              className="bg-blue-600 p-2 rounded-lg text-white font-semibold disabled:bg-blue-800 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <p>{pagination}</p>
            <button
              disabled={pagination === data.totalPages}
              onClick={nextPage}
              type="button"
              className="bg-blue-600 p-2 rounded-lg text-white font-semibold disabled:bg-blue-800 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div> */}
        </>
      )}
    </main>
  );
}
