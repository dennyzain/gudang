import { useForm } from 'react-hook-form';

export default function Input({ type, name, label, value }) {
  const { register } = useForm();
  return (
    <>
      <label>{label}</label>
      <input className="border-[#eee] rounded-lg border-4" type={type} value={value} />
    </>
  );
}
