import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  return (
    <header className="grid grid-cols-[2fr_3fr] py-5 px-3 justify-items-center items-center mb-5">
      <h1 className="text-xl font-extrabold ">GudangKu</h1>
      <nav className="text-lg font-bold list-none flex items-center space-x-3">
        <Link href="/">
          <li className="hover:cursor-pointer">Inventory</li>
        </Link>
        <Link href="/supplier">
          <li className="hover:cursor-pointer">Supplier</li>
        </Link>
        {loading ? (
          <p className="text-sm">...Loading</p>
        ) : (
          <>
            {!session && (
              <>
                <a
                  href={`/api/auth/signin`}
                  className="bg-blue-600 px-2 py-3 text-white rounded-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign in
                </a>
              </>
            )}
            {session?.user && (
              <>
                {session.user.image && (
                  <Image
                    width={40}
                    height={40}
                    src={session.user.image}
                    alt="profile"
                    objectFit="cover"
                    className="rounded-full"
                  />
                )}
                <span className="text-sm">
                  <small>Signed in as</small>
                  <br />
                  <strong>{session.user.email ?? session.user.name}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className="text-sm underline"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Sign out
                </a>
              </>
            )}
          </>
        )}
      </nav>
    </header>
  );
}
