// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed">
      <ul className="mt-8">
        <li className="p-4"><Link href="/admin/users">Users</Link></li>
        {/* Future table links */}
        <li className="p-4"><Link href="/admin/another-table">Another Table</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
