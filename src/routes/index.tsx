import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Section1 from '../pages/section1/Section1';
import Section2 from '../pages/section2/Section2';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/section1',
        element: <Section1 />,
      },
      {
        path: '/section2',
        element: <Section2 />,
      },
    ],
  },
]);
