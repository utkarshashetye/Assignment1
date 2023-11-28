

import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      
        <Main />
        <Form />
      
      <Footer />
    </div>
  );
}

export default App;
