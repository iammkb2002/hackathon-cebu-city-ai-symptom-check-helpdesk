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
    <nav className="bg-white shadow-md py-4 fixed w-full z-20 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-gray-800">Home</Link>
        <div className="flex space-x-4">
          {user ? (
            <>
              <Link href="/dashboard" className="text-gray-600">Dashboard</Link>
              <Link href="/profile" className="text-gray-600">Profile</Link>
              {role === 'admin' && <Link href="/admin" className="text-gray-600">Admin</Link>}
              <button onClick={async () => { await auth.signOut(); clearUser(); }} className="text-gray-600">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-600">Login</Link>
              <Link href="/signup" className="text-gray-600">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
