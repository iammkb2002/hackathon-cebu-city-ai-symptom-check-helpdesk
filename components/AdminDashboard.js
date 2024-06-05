import { useState, useEffect } from 'react';
import { firestore, setUserRole } from '../firebase';
import NavBar from './NavBar';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = await firestore.collection('users').get();
        setUsers(usersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.warn('Missing or insufficient permissions');
      }
    };
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    setLoading(true);
    setError('');
    try {
      await setUserRole(userId, newRole);
      setUsers(users.map(user => user.id === userId ? { ...user, role: newRole } : user));
    } catch (err) {
      setError('Failed to update role');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-grow p-6 ml-64 mt-16">
          <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200 text-left text-sm font-medium text-gray-600">Email</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-sm font-medium text-gray-600">Role</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">
                      <select
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                        disabled={loading}
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="py-2 px-4 border-b">
                      {loading ? <span className="loading loading-spinner"></span> : <span>Updated</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
