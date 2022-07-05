import { unstable_getServerSession } from 'next-auth/next';
import Layout from '@/components/template/Layout';
import Fetch from '@/fetch';
import { toast } from 'react-toastify';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Input from '@/components/atoms/Input';
import { Field, Form } from 'react-final-form';

export default function addInventory() {
  const onSubmit = async (data) => {
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
        <Form onSubmit={onSubmit}>
          {(props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <Field name="sku" type="text" label="SKU" render={Input} placeholder="Jumlah SKU" />
                <Field
                  name="name"
                  type="number"
                  label="Nama Barang"
                  render={Input}
                  placeholder="Nama Barang"
                />
                <Field
                  name="costPrice"
                  type="number"
                  label="Harga Barang"
                  render={Input}
                  placeholder="Jumlah Harga Barang"
                />
                <Field
                  name="retailPrice"
                  type="number"
                  label="Harga Retail"
                  render={Input}
                  placeholder="Jumlah Harga Retail"
                />
                <Field
                  name="qty"
                  type="number"
                  label="Stok Barang"
                  render={Input}
                  placeholder="Jumlah Stok Barang"
                />
                <Field
                  name="marginPercentage"
                  type="number"
                  label="Margin Percentage"
                  placeholder="Jumlah Margin Percentage"
                  render={Input}
                />
                <Field
                  name="supplierID"
                  type="number"
                  label="ID Supplier"
                  render={Input}
                  placeholder="ID Supplier"
                />
                <button className="bg-blue-600 flex text-white p-2 my-2 rounded-lg" type="submit">
                  Submit
                </button>
              </form>
            );
          }}
        </Form>
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
