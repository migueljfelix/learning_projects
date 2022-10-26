import './App.css';
import { BrowserRouter,} from "react-router-dom";
import Pages from './pages/Pages';
import Links from './components/Links';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Links/>
      <Pages/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

