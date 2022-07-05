import axios from 'axios';

export default async function Fetch({ method, url, data }) {
  const fetch = await axios({ method, url, data })
    .then((res) => ({ status: 'success', data: res.data }))
    .catch((err) => ({ status: 'error', err }));
  return fetch;
}
