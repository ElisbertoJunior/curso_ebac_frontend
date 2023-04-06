import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import RepoList from "./components/RepoList";

const App = () => {
  const [formVisible, setFormVisible] = useState(false); 
  
  
  return (
    <div className="App">
      <Header name="Elisberto Junior" address="https://github.com/ElisbertoJunior.png"/>
      <RepoList />
      
       {/* {formVisible && (
        <Form/>
      )}
      <button onClick={() => setFormVisible(!formVisible)} type="button">Clique para abrir o formulario</button> */}
    </div>
  )
}

export default App
