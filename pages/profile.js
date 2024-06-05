import { useState, useEffect } from 'react';
import { auth, firestore } from '../firebase';
import useStore from '../store/useStore';
import NavBar from '../components/NavBar';

const Profile = () => {
  const { user, setUser } = useStore();
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        setUser({ ...user, ...userDoc.data() });
        setEmail(userDoc.data().email);
        setDisplayName(userDoc.data().displayName);
      }
      setLoading(false);
    });
  }, [setUser]);

  const handleSave = async () => {
    if (user) {
      await firestore.collection('users').doc(user.uid).set(
        {
          email,
          displayName,
        },
        { merge: true }
      );
      setEditMode(false);
      setUser((prevUser) => ({ ...prevUser, email, displayName }));
    }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-gray-50">Loading...</div>;

  return user ? (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="container mx-auto p-6 mt-16">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {editMode ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Display Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <button
                onClick={handleSave}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="ml-2 bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <p className="mb-2"><strong>Email:</strong> {user.email}</p>
              <p className="mb-2"><strong>Display Name:</strong> {user.displayName}</p>
              <button
                onClick={() => setEditMode(true)}
                className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      Please login
    </div>
  );
};

export default Profile;
