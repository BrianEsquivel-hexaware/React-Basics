import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Section1 from '../pages/section1/Section1';
import Section2 from '../pages/section2/Section2';
import Section3 from '../pages/section3/Section3';

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
      {
        path: '/section3',
        element: <Section3 />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
