import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Section1 from '../pages/section1/Section1';

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
        element: <div className="container"><h1>Advanced Topics</h1><p>Deep dive into advanced React concepts and patterns</p></div>,
      },
    ],
  },
]);
