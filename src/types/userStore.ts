import { User } from "../types/user";
 
 export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  selectedUser: User | null;
  setUsers: (users: User[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSelectedUser: (user: User | null) => void;
}