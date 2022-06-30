import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="rounded-lg p-1 bg-blue-400" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button className="rounded-lg p-1 bg-blue-400" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}
