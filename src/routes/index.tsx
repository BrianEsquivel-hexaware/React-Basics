import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Section1 from '../pages/section1/Section1';
import Section2 from '../pages/section2/Section2';
import Section3 from '../pages/section3/Section3';
import Section4 from '../pages/section4/Section4';
import Section5 from '../pages/section5/Section5';
import Section6 from '../pages/section6/Section6';
import Section7 from '../pages/section7/Section7';
import Section8 from '../pages/section8/Section8';
import Section9 from '../pages/section9/Section9';
import Section10 from '../pages/section10/Section10';

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
        path: '/section4',
        element: <Section4 />,
      },
      {
        path: '/section5',
        element: <Section5 />,
      },
      {
        path: '/section6',
        element: <Section6 />,
      },
      {
        path: '/section7',
        element: <Section7 />,
      },
      {
        path: '/section8',
        element: <Section8 />,
      },
      {
        path: '/section9',
        element: <Section9 />,
      },
      {
        path: '/section10',
        element: <Section10 />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
