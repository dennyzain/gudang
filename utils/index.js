import Fetch from '@/fetch';

export const getInventories = (page = 0) => {
  console.log(page);
  return Fetch({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/${page}/5`,
  });
};
