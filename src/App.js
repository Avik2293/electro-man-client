
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
