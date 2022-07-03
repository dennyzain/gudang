import Layout from '@/components/template/Layout';
import Fetch from '@/fetch';
import { useForm } from 'react-hook-form';

export default function EditInventory({ data }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await Fetch({
      method: 'PUT',
      url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/UpdateItem`,
      data,
    });
    res.status === 'success'
      ? toast.success('Update Barang Berhasil!')
      : toast.error('Gagal Update Barang!');
  };
  return (
    <Layout>
      <div className="layout">
        <h1>Edit Barang</h1>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-flow-row-dense my-2">
          <label>SKU</label>
          <input
            className="border-[#eee] rounded-lg border-4"
            type="text"
            value={data.sku}
            {...register('sku', { required: true })}
          />
          <label>Nama Barang</label>
          <input
            className="border-[#eee] rounded-lg border-4"
            type="text"
            value={data.name}
            {...register('name', { required: true })}
          />
          <label>Harga Barang</label>
          <input
            className="border-[#eee] rounded-lg border-4"
            type="number"
            value={data.costPrice}
            {...register('costPrice', { required: true })}
          />
          <label>Harga Retail</label>
          <input
            className="border-[#eee] rounded-lg border-4"
            type="number"
            value={data.retailPrice}
            {...register('retailPrice', { required: true })}
          />
          <label>Stok Barang</label>
          <input
            type="number"
            className="border-[#eee] rounded-lg border-4"
            value={data.qty}
            {...register('qty', { required: true })}
          />
          <label>Margin Percentage</label>
          <input
            type="number"
            className="border-[#eee] rounded-lg border-4"
            value={data.marginPercentage}
            {...register('marginPercentage', { required: true })}
          />
          <label>ID Supplier</label>
          <input
            type="number"
            className="border-[#eee] rounded-lg border-4"
            value={data.supplierId}
            {...register('supplierId', { required: true, maxLength: 20 })}
          />
          <input
            className="bg-blue-600 text-white p-2 my-2 rounded-lg hover:cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res1 = await Fetch(`${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/0/10`);
  const res2 = await Fetch(`${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/1/10`);
  if (res1.status === 'success' || res2.status === 'success') {
    const data = [...res1.data, ...res2.data];
    const paths = data.map((item) => ({ params: { id: item.id } }));
    return {
      paths,
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await Fetch(`${process.env.NEXT_PUBLIC_URL}/InventoryItem/${id}`);

  return {
    props: { data: res.data },
    revalidate: 1,
  };
}
