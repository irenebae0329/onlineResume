import {createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom'
import  Root  from '@src/root'
import Resume from '@src/ResumePage'
function Router(){
    let router=createBrowserRouter([
        {
            path:"/",
            element:<Root/>,
        },
        {   
            path:"/refre",
            element:<Resume/>,
        },
        {
            path:"",
            element:<Navigate to={'/'}></Navigate>
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
export default Router