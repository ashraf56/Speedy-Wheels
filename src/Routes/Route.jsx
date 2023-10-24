import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import App from "../App";
import Blog from "../Random component/Blog";
import Login from "../Authentications/Login";
import Signup from "../Authentications/Signup";
import AddToy from "../Random component/AddToy";
import Private from "./Private";
import AllTOy from "../Random component/AllTOy";
import Mytoy from "../Random component/Mytoy";
import UpdateToy from "../Random component/UpdateToy";
import ViewDetail from "../Random component/ViewDetail";
import Errorpage from "../Errorpage/Errorpage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<Errorpage/>,
      children:[
{
    path:'/'
    ,
    element:<Home></Home>
},
{
    path:'/blog'
    ,
    element:<Blog></Blog>
},
{
    path:'/login'
    ,
    element:<Login></Login>
},

{
    path:'/signup'
    ,
    element:<Signup></Signup>
},
{
    path:'/addtoy'
    ,
    element: 
    <Private>
    <AddToy></AddToy></Private>
},
{
    path:'/alltoy',
    element: <AllTOy></AllTOy>,
    loader:()=> fetch('https://wheels-server-one.vercel.app/alltoy')
},
{
    path:'/mytoy',
    element: <Private>
<Mytoy></Mytoy>
    </Private>,
},
{
    path:'/update/:id',
    element: <Private>
<UpdateToy></UpdateToy>
    </Private>,
    loader: ({params})=> fetch(`https://wheels-server-one.vercel.app/alltoy/${params.id}`)
},
{
    path:'/detail/:id',
    element: <Private>
<ViewDetail/>
    </Private>,
    loader: ({params})=> fetch(`https://wheels-server-one.vercel.app/alltoy/${params.id}`)
},

      ]
    },
  ]);

  export default router;