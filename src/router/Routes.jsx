import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../mainLayout/MainLayout'
import Home from '../pages/home/Home'
import Donation from '../pages/donation/Donation'
import Statistics from '../pages/statistics/Statistics'
import ErrorMessagePage from '../pages/errorMessagePage/ErrorMessagePage'

const myCreateRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorMessagePage/>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/donation',
            element: <Donation></Donation>
        },
        {
            path: '/statistics',
            element: <Statistics></Statistics>
        }
    ],
    
  },
])

export { myCreateRouter }
