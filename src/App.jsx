import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Home = lazy(() => import('./pages/index'));
const Search = lazy(() => import('./pages/search'));
const NotFound = lazy(() => import('./pages/notFound'));
const AddUser = lazy(() => import('./pages/addUser'));

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar />
      <ToastContainer />

      <div className="flex flex-col flex-1 w-full overflow-y-scroll">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
