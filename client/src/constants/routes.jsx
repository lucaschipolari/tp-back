import { createBrowserRouter } from 'react-router-dom';
import RootView from '../views/RootView';
import HomeView from '../views/publicViews/HomeView';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootView />,
    children: [
      // Add your routes here
      { path: '/home', element: <HomeView /> },
    ],
  },
]);
