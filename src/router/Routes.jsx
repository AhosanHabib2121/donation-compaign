import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../mainLayout/MainLayout'
import Home from '../pages/home/Home'
import Donation from '../pages/donation/Donation'
import Statistics from '../pages/statistics/Statistics'
import ErrorMessagePage from '../pages/errorMessagePage/ErrorMessagePage'
import FeatureDetails from '../components/featureDetails/FeatureDetails'

const myCreateRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorMessagePage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/featureDetails/:featureId',
        loader: () => fetch('/donationData.json/'),
        element: <FeatureDetails />
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      {
        path: '/statistics',
        loader: () => fetch('/donationData.json/'),
        element: <Statistics></Statistics>,
      },
    ],
  },
])

export { myCreateRouter }
