import { createBrowserRouter, RouterProvider } from 'react-router';
import PageHome from '~pages/PageHome';
import PageLogin from '~pages/PageLogin';
import PageProfile from '~pages/PageProfile';
import PageRoot from '~pages/PageRoot';
import PageSignup from '~pages/PageSignup';
import PageTest from '~pages/PageTest';
import PageTestResult from '~pages/PageTestResult';

function App() {
  const PublicRouters = [
    {
      path: '/',
      element: <PageRoot />,
      children: [
        {
          path: '',
          element: <PageHome />
        },
        {
          path: '/login',
          element: <PageLogin />
        },
        {
          path: '/signup',
          element: <PageSignup />
        },
        {
          path: '/profile',
          element: <PageProfile />
        },
        {
          path: '/test',
          element: <PageTest />
        },
        {
          path: '/results',
          element: <PageTestResult />
        }
      ]
    }
  ];

  const router = createBrowserRouter([...PublicRouters]);

  return <RouterProvider router={router} />;
}

export default App;
