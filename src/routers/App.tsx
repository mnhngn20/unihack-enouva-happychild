import { useRoutes } from 'react-router-dom';
import GuardRoute from './GuardRoute';
import PrivateRoute from './PrivateRoute';
import { loadable } from '#/shared/utils/loadable';

const LoginPage = loadable(import('#/pages/login'));

function App() {
  const routes = useRoutes([
    {
      path: '/login',
      element: (
        <GuardRoute>
          <LoginPage />
        </GuardRoute>
      ),
    },
    {
      path: '/*',
      element: (
        <GuardRoute isPrivate>
          <PrivateRoute />
        </GuardRoute>
      ),
    },
  ]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {routes}
    </div>
  );
}

export default App;
