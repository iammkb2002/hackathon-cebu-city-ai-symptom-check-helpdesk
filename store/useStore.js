// store/useStore.js
import create from 'zustand';
import { auth, getUserRole, setUserRole } from '../firebase';

const useStore = create((set) => ({
  user: null,
  role: null,
  setUser: (user) => set({ user }),
  setRole: (role) => set({ role }),
  clearUser: () => set({ user: null, role: null }),
}));

auth.onAuthStateChanged(async (user) => {
  if (user) {
    const role = await getUserRole(user.uid);
    useStore.setState({ user, role });
  } else {
    useStore.setState({ user: null, role: null });
  }
});

export { setUserRole };
export default useStore;
