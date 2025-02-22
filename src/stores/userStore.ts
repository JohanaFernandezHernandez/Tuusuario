import { create } from "zustand";
import {UserState} from "../types/userStore";

export const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,
  error: null,
  selectedUser: null,

  setUsers: (users) => set({ users }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSelectedUser: (user) => set({ selectedUser: user }), 
}));
