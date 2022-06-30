import Layout from '@/components/template/Layout';
import { useForm } from 'react-hook-form';

export default function addSupplier() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await Fetch({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_URL}/Supplier/AddSupplier`,
      data,
    });
    res.status === 'success'
      ? toast.success('Tambah Supplier Berhasil!')
      : toast.error('Gagal Menambah Supplier!');
  };

  return (
    <Layout>
      <div className="layout">
        <h1>Tambah Supplier</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-flow-row-dense my-2">
          <label>Nama Supplier</label>
          <input
            className="border-[#eee] rounded-lg border-4"
            type="text"
            {...register('sku', { required: true })}
          />
          <label>Alamat Supplier</label>
          <input
            className="border-[#eee] rounded-lg border-4"
            type="text"
            {...register('name', { required: true })}
          />
          <label>Kota</label>
          <input
            type="text"
            className="border-[#eee] rounded-lg border-4"
            {...register('costPrice', { required: true })}
          />
          <label>Kode Pos</label>
          <input
            className="border-[#eee] rounded-lg border-4"
            type="number"
            {...register('retailPrice', { required: true })}
          />
          <input className="border-[#eee] rounded-lg border-4 my-3" type="submit" />
        </form>
      </div>
    </Layout>
  );
}
