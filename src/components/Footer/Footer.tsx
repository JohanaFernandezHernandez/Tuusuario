import { GitHub, LinkedIn } from '@mui/icons-material';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footerContainer">
      <p>© 2025 TusUsuarios. Hecho por Johana Fernández</p>
      <div className="socialIcons">
        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
          <GitHub fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">
          <LinkedIn fontSize="large" />
        </a>
      </div>
    </footer>
  );
};
