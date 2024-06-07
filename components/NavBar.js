import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4 fixed w-full z-20 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-gray-800">Home</Link>
        <Link href="/chatbot" className="text-2xl font-semibold text-gray-800">Chatbot</Link>
      </div>
    </nav>
  );
};

export default NavBar;
