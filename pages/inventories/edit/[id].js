import { Field, Form } from 'react-final-form';
import Input from '@/components/atoms/Input';
import Layout from '@/components/template/Layout';
import Fetch from '@/fetch';

export default function EditInventory({ data }) {
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
        <Form onSubmit={onSubmit}>
          {(props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <Field
                  name="sku"
                  type="text"
                  label="SKU"
                  render={Input}
                  placeholder="Jumlah SKU"
                  value={data.sku}
                />
                <Field
                  name="name"
                  type="number"
                  label="Nama Barang"
                  render={Input}
                  placeholder="Nama Barang"
                  value={data.name}
                />
                <Field
                  name="costPrice"
                  type="number"
                  label="Harga Barang"
                  render={Input}
                  placeholder="Jumlah Harga Barang"
                  value={data.costPrice}
                />
                <Field
                  name="retailPrice"
                  type="number"
                  label="Harga Retail"
                  render={Input}
                  placeholder="Jumlah Harga Retail"
                  value={data.retailPrice}
                />
                <Field
                  name="qty"
                  type="number"
                  label="Stok Barang"
                  render={Input}
                  placeholder="Jumlah Stok Barang"
                  value={data.qty}
                />
                <Field
                  name="marginPercentage"
                  type="number"
                  label="Margin Percentage"
                  placeholder="Jumlah Margin Percentage"
                  render={Input}
                  value={data.marginPercentage}
                />
                <Field
                  name="supplierID"
                  type="number"
                  label="ID Supplier"
                  render={Input}
                  placeholder="ID Supplier"
                  value={data.supplierID}
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

export async function getStaticPaths() {
  const res1 = await Fetch({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/0/10`,
  });
  const res2 = await Fetch({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/inquiry/1/10`,
  });
  console.log(res1.data);
  if (res1.status === 'success' || res2.status === 'success') {
    const data = [...res1.data.data, ...res2.data.data];
    const paths = data.map((item) => ({ params: { id: item.id } }));
    return {
      paths,
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await Fetch({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/InventoryItem/${id}`,
  });

  return {
    props: { data: res.data },
    revalidate: 1,
  };
}
