// pages/profile.js
import { useEffect, useState } from 'react';
import { auth, firestore } from '../firebase';
import useStore from '../store/useStore';
import NavBar from '../components/NavBar';

const Profile = () => {
  const { user, setUser } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await firestore.collection('users').doc(user.uid).get();
        setUser({ ...user, ...userDoc.data() });
      }
      setLoading(false);
    });
  }, [setUser]);

  if (loading) return <div>Loading...</div>;

  return user ? (
    <div>
      <NavBar />
      <h1>Welcome, {user.displayName || user.email}</h1>
      <p>Email: {user.email}</p>
      <p>UID: {user.uid}</p>
    </div>
  ) : (
    <div>Please login</div>
  );
};

export default Profile;
