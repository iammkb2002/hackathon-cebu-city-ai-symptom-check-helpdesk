// components/NavBar.js
import Link from 'next/link';
import { useEffect } from 'react';
import { auth } from '../firebase';
import useStore from '../store/useStore';

const NavBar = () => {
  const { user, setUser, clearUser, role } = useStore();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        clearUser();
      }
    });
  }, [setUser, clearUser]);

  return (
    <nav>
      <Link href="/">Home</Link>
      {user ? (
        <>
          <Link href="/profile">Profile</Link>
          {role === 'admin' && <Link href="/admin">Admin</Link>}
          <button onClick={async () => { await auth.signOut(); clearUser(); }}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
