import Fetch from '@/fetch';
import { useDispatch } from 'react-redux';
import { setDataFetch, setPagination } from '@/store/globalSlice';

export default function ListPagination({ totalPages }) {
  const dispatch = useDispatch();

  const totalPagination = () => {
    const arr = [];
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
    return arr;
  };
  const handlePagination = async (page) => {
    const result = await Fetch({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/${page}/5`,
    });
    dispatch(setDataFetch(result.data.data));
    dispatch(setPagination(true));
  };

  return (
    <div className="flex space-x-2 justify-center my-3">
      {totalPagination().map((number) => {
        return (
          <button
            key={number}
            onClick={() => handlePagination(number)}
            type="button"
            className="border-4 border-black bg-blue-600 text-white p-1 rounded-lg "
          >
            <p>{number}</p>
          </button>
        );
      })}
    </div>
  );
}
