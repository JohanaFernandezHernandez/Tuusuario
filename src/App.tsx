// import { useUserStore } from "./stores/userStore";
// import { useFetchUsers } from "./hooks/useFetchUsers";
import { Header, Footer } from "./components";
import { HomePage } from './pages/HomePage';
import "./App.css";



const App = () => {

  return (
    <div className="app-container">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
};

export default App;
