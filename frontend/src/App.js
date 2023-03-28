import './App.css';
import {Outlet} from 'react-router-dom'
import NavComponent from './components/nav-component';
import Footer from './components/footer-component';

function App(props) {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <header className="App-header">
        <Outlet></Outlet>
      </header>
    <Footer></Footer>
    </div>
  );
}

export default App;