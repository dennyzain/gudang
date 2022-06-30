import Layout from '@/components/template/Layout';
import Fetch from '@/fetch';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export default function addInventory() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await Fetch(
      { method: 'POST', url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/AddItem`,data }
    );
    res.status === 'success'
      ? toast.success('Tambah Barang Berhasil!')
      : toast.error('Gagal Menambah Barang!');
  };

  return (
    <Layout>
      <div className="layout">
        <h1>Tambah Barang</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-flow-row-dense my-2">
          <label>SKU</label>
          <input className="border-[#eee] rounded-lg border-4" type='text' {...register('sku', { required: true })} />
          <label>Nama Barang</label>
          <input className="border-[#eee] rounded-lg border-4" type='text' {...register('name', { required: true })} />
          <label>Harga Barang</label>
          <input
            type='number'
            className="border-[#eee] rounded-lg border-4"
            {...register('costPrice', { required: true })}
          />
          <label>Harga Retail</label>
          <input
            className="border-[#eee] rounded-lg border-4"
            type='number'
            {...register('retailPrice', { required: true })}
          />
          <label>Stok Barang</label>
          <input
            type='number'
            className="border-[#eee] rounded-lg border-4"
            {...register('qty', { required: true })}
          />
          <label>Margin Percentage</label>
          <input
            type='number'
            className="border-[#eee] rounded-lg border-4"
            {...register('marginPercentage', { required: true })}
          />
          <label>ID Supplier</label>
          <input
            type='number'
            className="border-[#eee] rounded-lg border-4"
            {...register('supplierId', { required: true, maxLength: 20 })}
          />
          <input className="border-[#eee] rounded-lg border-4 my-3" type="submit" />
        </form>
      </div>
    </Layout>
  );
}
