// useFetchUsers.ts
import { useEffect } from "react";
import { useUserStore } from "../stores/userStore";
import axios from "axios";
import { User } from "../types/user";

export const useFetchUsers = () => {
  const { setUsers, setLoading, setError } = useUserStore();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
      } catch (error) {
        setError("Error al obtener usuarios");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [setUsers, setLoading, setError]);
};
