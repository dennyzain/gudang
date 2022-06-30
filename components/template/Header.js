import Link from 'next/link';

export default function Header() {
  return (
    <header className="grid grid-cols-2 p-3 justify-items-center mb-5">
      <h1 className="text-xl font-extrabold ">GudangKu</h1>
      <nav className="text-lg font-bold list-none flex space-x-3">
        <Link href="/">
          <li className="hover:cursor-pointer">Inventory</li>
        </Link>
        <Link href="/supplier">
          <li className="hover:cursor-pointer">Supplier</li>
        </Link>
      </nav>
    </header>
  );
}
