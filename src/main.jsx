//read documentation on actual react.router its easier to understand

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contacts/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'


// const router = createBrowserRouter([//it will have an array of list of objects we need
//   {
//     path: '/', //here "/" is top level element and iske ander nexting ho rahi so we have to write element that we are gonna render
//     element: <Layout />,//add other props as home contact whatever we have
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "Contact",
//         element:<Contact/>
//       }]//now add all your objects in form of array 
//   }
// ])


//other method of router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='User/:userid' element={<User/>}/>
      <Route //loader helps in api call and fetching in faster way like whenever we hover so even befor clicking it will fetch the data.
       //loader={()=>{}}
       path='Github' element={<Github/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/*this is used in routing and it take prop as router and we have to make router as well*/}
  </React.StrictMode>,
)
