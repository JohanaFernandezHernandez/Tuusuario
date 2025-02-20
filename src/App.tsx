// src/App.tsx
// import { useEffect } from "react";
import { useUserStore } from "./stores/userStore";
import { useFetchUsers } from "./hooks/useFetchUsers";
import Card from "./components/Card/Card";
import Modal from "./components/Modal/Modal";
import "./App.css"; // ✅ Importa el archivo CSS para App

const App = () => {
  const { users, loading, error, selectedUser, setSelectedUser } = useUserStore();

  // Ejecuta la lógica de carga de usuarios
  useFetchUsers();

  if (loading) return <p className="loading-text">Cargando usuarios...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="app-container">
      <h1 className="app-title">Lista de Usuarios</h1>
      <div className="user-grid">
        {users.map((user) => (
          <Card key={user.id} user={user} onClick={() => setSelectedUser(user)} />
        ))}
      </div>

      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default App;
