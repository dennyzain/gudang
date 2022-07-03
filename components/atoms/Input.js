export default function Input({ type, name, label, value, input, placeholder }) {
  console.log(input);
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{label}</label>
      <input
        className="p-1 border-[#eee] rounded-lg border-4 focus:"
        placeholder={placeholder}
        type={type}
        value={value}
        {...input}
      />
    </div>
  );
}
