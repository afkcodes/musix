import { RouteObject } from 'react-router-dom';
import Home from '~/pages/Home';
import Search from '~/pages/Search';

const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: 'search', element: <Search /> }
];

export { routes };
