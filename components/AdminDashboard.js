// components/AdminDashboard.js
import { useState, useEffect } from 'react';
import { firestore, setUserRole } from '../firebase';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

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
    <div>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-4 w-full">
          <h1>Admin Dashboard</h1>
          {error && <div className="text-red-500">{error}</div>}
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Email</th>
                <th className="py-2">Role</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      disabled={loading}
                      className="border border-gray-300 rounded p-1"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="py-2">
                    {loading ? <span>Loading...</span> : <span>Updated</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
