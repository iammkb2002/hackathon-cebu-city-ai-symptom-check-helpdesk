// hoc/withAuth.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth, getUserRole } from '../firebase';
import useStore from '../store/useStore';

const withAuth = (WrappedComponent, adminOnly = false) => (props) => {
  const router = useRouter();
  const { user, setUser, role, setRole } = useStore();
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const role = await getUserRole(user.uid);
          setUser(user);
          setRole(role);
          if (adminOnly && role !== 'admin') {
            setHasPermission(false);
            setLoading(false);
          } else {
            setLoading(false);
          }
        } else {
          router.replace('/login');
        }
      });
    };
    checkAuth();
  }, [router, setUser, setRole, adminOnly]);

  if (loading) return <div>Loading...</div>;

  if (!hasPermission) return <div>You do not have permission to access this page.</div>;

  return <WrappedComponent {...props} />;
};

export default withAuth;
