import { useRoutes } from 'react-router-dom';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));
const Courses = loadable(import('#/pages/Courses'));

function PrivateRoute() {
  const routes = useRoutes([
    { path: '/', element: <Index /> },
    {
      path: 'courses',
      children: [
        {
          index: true,
          element: <Courses />,
        },
        {
          path: ':/id',
          element: 'hello courses',
        },
      ],
    },
    { path: '*', element: <p>Not Found</p> },
  ]);

  return routes;
}

export default PrivateRoute;
