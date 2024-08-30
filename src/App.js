
import About from "./About/About";
import Contact from './Contact/Contact';
import Menu from "./Menu";
import "./App.css"
function App() {
  return (
    <>
      <div className="App">
      
        <BrowserRouter>
          <Menu/>
          <Routes>
          <Route exact path="/"  element={<About name="About" />} />
         
        <Route path="/contact" element={<Contact name="Contact"/>} />
      </Routes>
        </BrowserRouter>
        </div>
      </>

  );
}

export default App;