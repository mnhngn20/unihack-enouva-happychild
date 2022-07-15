import { useRoutes } from 'react-router-dom';
import { loadable } from '#/shared/utils/loadable';

const Index = loadable(import('#/pages/index'));
const BlogPage = loadable(import('#/pages/Blog'));
const BlogDetail = loadable(import('#/pages/BlogDetail'));
const Assessment = loadable(import('#/pages/Assessment'));
const AssessmentStart = loadable(import('#/pages/Assessment/Start'));
const Courses = loadable(import('#/pages/Courses'));
const CoursesDetail = loadable(
  import('#/pages/Courses/CoursesDetail/CoursesDetail'),
);
function PrivateRoute() {
  const routes = useRoutes([
    { path: '/', element: <Index /> },
    {
      path: 'assessment',
      children: [
        { index: true, element: <Assessment /> },
        { path: 'start', element: <AssessmentStart /> },
      ],
    },
    {
      path: 'blogs',
      children: [
        {
          index: true,
          element: <BlogPage />,
        },
        {
          path: ':id',
          element: <BlogDetail />,
        },
      ],
    },
    {
      path: 'courses',
      children: [
        {
          index: true,
          element: <Courses />,
        },
        {
          path: ':id',
          element: <CoursesDetail />,
        },
      ],
    },
    { path: '*', element: <p>Not Found</p> },
  ]);

  return routes;
}

export default PrivateRoute;
