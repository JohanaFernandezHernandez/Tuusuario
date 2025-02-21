# Imagen Favorita 

## Descripción 

Esta aplicación web permite a los usuarios gestionar y almacenar sus imágenes más especiales. Ofrece funcionalidades completas de CRUD (Crear, Leer, Actualizar y Eliminar) para las imágenes, con una interfaz adaptativa que funciona perfectamente en dispositivos móviles y de escritorio.

## Demo del Proyecto 🎥

Para ver la aplicación en acción y entender mejor su funcionamiento, mira el [Video Explicativo](https://www.loom.com/share/535e82e836d04ecf9aaa982ba3b31897?sid=00ce248f-4077-4a6b-bd33-884894904dfe)

## Arquitectura y Tecnologías 

El proyecto está construido con una arquitectura cliente-servidor:

### Frontend
- **React + Vite**: Framework moderno para UI con desarrollo rápido y eficiente
- **Material UI**: Componentes prediseñados para una interfaz responsive y accesible
- **Axios**: Cliente HTTP para comunicación con el backend

### Backend
- **Node.js + Express**: Servidor REST con manejo eficiente de operaciones asíncronas
- **PostgreSQL**: Base de datos relacional para almacenamiento de imágenes y metadatos
- **Multer**: Middleware para gestión de subida de archivos

La aplicación implementa operaciones CRUD completas, con énfasis en la reutilización de componentes y la seguridad mediante variables de entorno.

## Instalación 

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JohanaFernandezHernandez/Tuusuario.git
   ```

2. Instala las dependencias :
   ```bash
   cd Tuusuario && npm install

   ```

3. Configura las variables de entorno:

   Frontend (.env):
   ```env
   VITE_API= https://jsonplaceholder.typicode.com/users
   ```


4. Inicia la aplicación:

   ```bash
     npm run dev
   ```

## Tecnologías Utilizadas 

- **Frontend**:
  - [React.js](https://react.dev/) - Biblioteca UI
  - [Vite](https://vitejs.dev/) - Build tool y dev server
  - [Material UI](https://mui.com/) - Componentes de UI
  - [Axios](https://axios-http.com/) - Cliente HTTP
  - [zustand](https://zustand-demo.pmnd.rs/) - Estado Global
  - [TypeScript](https://www.typescriptlang.org/) - Typado

## Autora 

**Johana Fernández Hernández**
- Desarrolladora FrontEnd
