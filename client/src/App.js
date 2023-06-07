import React from 'react';
import Todo from './components/Todo';
import Signin from "./component/sign-in-side";
import Login from './component/log_in';
import Page from './component/page';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}></Route>
            
          <Route path="Signin" element={<Signin />} />
            
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<Page />} />
          
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;