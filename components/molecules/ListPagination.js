import { useEffect, useState } from 'react';
import Fetch from '@/fetch';
import { setDataFetch, setPagination } from '@/store/globalSlice';
import { useQuery } from 'react-query';

export default function ListPagination() {
  // const dispatch = useDispatch();

  const [pagination, setPagination] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getPages = async () => {
    const res = await Fetch({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/${pagination}/5`,
    });
    return res;
  };
  const { data } = useQuery('getPage', getPages);
  console.log(data, 'data dari query');

  // const handlePagination = async () => {
  //   const res = await Fetch({
  //     method: 'GET',
  //     url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/${pagination}/5`,
  //   });
  //   dispatch(setDataFetch(res.data.data));
  //   setTotalPages(res.data.totalPages);
  // };

  const handlePagination = async () => {
    const res = await Fetch({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/${pagination}/5`,
    });
    dispatch(setDataFetch(res.data.data));
    setTotalPages(res.data.totalPages);
  };

  useEffect(() => {
    handlePagination();
  }, [pagination]);

  const nextPage = () => {
    if (pagination <= totalPages) {
      setPagination(pagination + 1);
    }
  };

  const prevPage = () => {
    if (pagination >= 0) {
      setPagination(pagination - 1);
    }
  };

  return (
    <div className="flex space-x-2 items-center justify-center my-3">
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
        disabled={pagination === totalPages}
        onClick={nextPage}
        type="button"
        className="bg-blue-600 p-2 rounded-lg text-white font-semibold disabled:bg-blue-800 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
