import { useRoutes } from 'react-router-dom';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));

function PrivateRoute() {
  const routes = useRoutes([
    { path: '/', element: <Index /> },
    { path: '*', element: <div>Not Found</div> },
  ]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      {routes}
    </div>
  );
}

export default PrivateRoute;
