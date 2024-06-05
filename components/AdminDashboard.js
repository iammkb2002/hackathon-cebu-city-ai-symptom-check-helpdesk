// components/AdminDashboard.js
import { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import NavBar from './NavBar';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

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

  return (
    <div>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <div className="ml-64 p-4 w-full">
          <h1>Admin Dashboard</h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Email</th>
                <th className="py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="py-2">{user.email}</td>
                  <td className="py-2">{user.role}</td>
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
