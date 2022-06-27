export default function Header(){
    return (
        <header className="grid grid-cols-2  p-3 justify-items-center bg-[#eee]">
        <h1 className="text-xl font-bold">Gudang</h1>
        <nav className="text-lg font-bold list-none flex space-x-3">
          <li>Home</li>
          <li>About</li>
          <li>Prices</li>
        </nav>
      </header>
    )
}