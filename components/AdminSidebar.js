import Link from 'next/link';

const AdminSidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-10 mt-16">
      <ul className="menu p-4 h-full">
        <li className="my-2">
          <Link href="/admin/users" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Users</Link>
        </li>
        {/* Future table links */}
        <li className="my-2">
          <Link href="/admin/another-table" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">Another Table</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
