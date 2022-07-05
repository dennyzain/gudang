import Fetch from '@/fetch';

export const getInventories = () =>
  Fetch({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/0/5`,
  });
