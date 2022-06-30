import Link from 'next/link';

export default function CardDetail({ data }) {
  return (
    <div className="w-auto my-2 text-lg">
      <h3>Nama Barang : {data?.name ?? 'Tidak Ada'}</h3>
      <p>Harga : {data?.costPrice ?? 'Tidak ada'}</p>
      <p>Harga Retail : {data.retailPrice ?? 'Tidak Ada'}</p>
      <p>Stok Barang : {data.qty ?? 'Tidak Ada'}</p>
      <p>
        Alamat Supplier : {data.supplier?.name ?? 'Tidak Ada'},{' '}
        {data.supplier?.address ?? 'Tidak Ada'}, {data.supplier?.city ?? 'Tidak Ada'}{' '}
        {data?.postCode ?? 'Tidak Ada'}
      </p>
      <Link href={`/inventories/edit/${data.id}`}>
        <button className="border-black border-4 p-1 my-2 rounded-lg">Update Barang</button>
      </Link>
    </div>
  );
}