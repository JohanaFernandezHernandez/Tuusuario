import React, { useState } from 'react';
import { useUserStore } from "../stores/userStore";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { Card, Modal } from "../components";
import { Pagination } from '@mui/material';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const { users, loading, error, selectedUser, setSelectedUser } = useUserStore();
  const [page, setPage] = useState(1);
  
  const itemsPerPage = 8; 
  
  // Ejecuta la lógica de carga de usuarios
  useFetchUsers();

  if (loading) return <p className="loading-text">Cargando usuarios...</p>;
  if (error) return <p className="error-text">{error}</p>;

  // Calcular el total de páginas
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Obtener los usuarios de la página actual
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  // Manejar el cambio de página
  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Usuarios</h1>
      <div className="user-grid">
        {currentUsers.map((user) => (
          <Card
            key={user.id}
            user={user}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination-container">
        <Pagination 
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          size="large"
          color="primary"
        />
      </div>

      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};
