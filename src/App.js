import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage'
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home/Home';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Main from './layout/Main';
import Statics from './components/Statistics/Statics';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },

          element: <Home></Home>

        },

        { path: '/home', element: <Home></Home> },

        { path: '/blog', element: <Blog></Blog> },

        { path: '/statics', element: <Statics></Statics> },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <QuizDetails></QuizDetails>
        },


      ]
    },



  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>


    </div>
  );
};

export default App;