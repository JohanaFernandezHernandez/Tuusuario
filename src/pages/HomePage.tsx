import React, { useState } from 'react';
import { useUserStore } from "../stores/userStore";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { Card, Modal } from "../components";
import { Pagination, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const { users, loading, error, selectedUser, setSelectedUser } = useUserStore();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  
  const itemsPerPage = 8; 
  
  // Ejecuta la lógica de carga de usuarios
  useFetchUsers();

  if (loading) return <p className="loading-text">Cargando usuarios...</p>;
  if (error) return <p className="error-text">{error}</p>;

  // Filtrar usuarios por nombre
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calcular el total de páginas con usuarios filtrados
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Obtener los usuarios de la página actual
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Manejar el cambio de página
  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejar la búsqueda
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(1); // Resetear a la primera página cuando se busca
  };

  return (
    <div className="container">
      <h1 className="title">Lista de Usuarios</h1>
      
      {/* Barra de búsqueda */}
      <div className="search-container">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Busca por nombre"
          value={searchQuery}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="user-grid">
        {currentUsers.map((user) => (
          <Card
            key={user.id}
            user={user}
            onClick={() => setSelectedUser(user)}
          />
        ))}
      </div>

      {/* Mostrar mensaje cuando no hay resultados */}
      {currentUsers.length === 0 && (
        <p className="no-results">No se encontraron usuarios con ese nombre</p>
      )}

      {/* Paginación */}
      {filteredUsers.length > 0 && (
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
      )}

      {selectedUser && (
        <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};
