import { useEffect } from "react";
import { useUserStore } from "../stores/userStore";
import axios from "axios";
import { User } from "../types/user";
const apiUrl = import.meta.env.VITE_API;

export const useFetchUsers = () => {
  const { setUsers, setLoading, setError } = useUserStore();

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      setLoading(true);
      try {
        const { data } = await axios.get<User[]>(apiUrl);
        setUsers(data);
      } catch (error) {
        
        let errorMessage = "Error al obtener usuarios";
        if (axios.isAxiosError(error)) {
          errorMessage = error.response?.data?.message || error.message;
        }
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [setUsers, setLoading, setError]);
};
