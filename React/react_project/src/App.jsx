import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import RepoList from "./components/RepoList";

const App = () => {
  const [formVisible, setFormVisible] = useState(false); 
  const [userName, setUserName] = useState('');
  
  return (
    <div className="App">
      <input onBlur={({target}) => setUserName(target.value)} type="text" placeholder="Digite o usuario"/>
      
      {userName.length > 4 &&(
       <>
         <Header username={userName}/>
          <RepoList username={userName} />
       </>
      )}
      
       {/* {formVisible && (
        <Form/>
      )}
      <button onClick={() => setFormVisible(!formVisible)} type="button">Clique para abrir o formulario</button> */}
    </div>
  )
}

export default App
