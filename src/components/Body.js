import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"

const Body = () => {
    
  

    const appRouter = createBrowserRouter([

        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },
    ])    

    // call once the page loads and check the signin

    

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body