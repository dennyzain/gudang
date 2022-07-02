import Layout from '@/components/template/Layout';
import { unstable_getServerSession } from 'next-auth/next';
import Fetch from '@/fetch';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Input from '@/components/atoms/Input';

export default function addInventory() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data, 'data');
    const res = await Fetch({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/AddItem`,
      data,
    });
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
          <Input {...register('sku', { required: true })} label="SKU" name="sku" type="text" />
          <Input label="Nama Barang" name="name" type="text" />
          <Input label="Harga Barang" name="costPrice" type="number" />
          <Input label="Harga Retail" name="retailPrice" type="number" />
          <Input label="Stok Barang" name="qty" type="number" />
          <Input label="Margin Percentage" name="marginPercentage" type="number" />
          <Input label="ID Supplier" name="supplierId" type="number" />
          <input className="border-[#eee] rounded-lg border-4 my-3" type="submit" />
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { data: null },
  };
}
