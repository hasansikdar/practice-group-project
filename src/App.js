import logo from './logo.svg';
import './App.css';
import { Router, RouterProvider } from 'react-router-dom';
import { Routers } from './Routers/Routers';

function App() {
  return (
    <div className="app">
      <RouterProvider router={Routers}></RouterProvider>
    </div>
  );
}

export default App;
