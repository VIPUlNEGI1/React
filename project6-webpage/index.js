import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import User from './User/User';
import Github from './component/github/Github';
// const router = createBrowserRouter([
//   // this is way to eccess the variable in any component file
//   {
//     path:'/',
//     element : <Layout/>,
//     children : [
//    {
//     path:"",
//     element : <Home/>
//    },
//    {
//     path : "about",
//     element : <About/>
//    }
// ,
// {
//   path : "Contact",
//   element : <Contact/>
//  }
//     ]
//   }
 
// ])

//   // this the secound way ?
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}  />
          <Route path='about' element={<About/>}  />
          <Route path='contact' element={<Contact/>}  />
          <Route path='user/:userid' element={<User/>}  />
          <Route path='github' element={<Github/>}  />
          
    </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  
  </React.StrictMode>
);


reportWebVitals();
