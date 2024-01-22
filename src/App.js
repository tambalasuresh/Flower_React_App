import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './component/navbar';
import Body from './component/body';
import Footer from './component/footer';

function App() {
  return (
    <div className="container-fluid" style={{height:"100vh"}}>
        <NavBar/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
