import React from 'react';

export default function CardSupplier({ data }) {
  return (
    <div className="w-auto my-2 text-lg">
      <h3>Nama Supplier : {data.name ?? 'Tidak Ada'}</h3>
      <p>Alamat : {data.address ?? 'Tidak ada'}</p>
      <p>Kota : {data.city ?? 'Tidak Ada'}</p>
      <p>Kode Pos : {data.postCode ?? 'Tidak Ada'}</p>
    </div>
  );
}
