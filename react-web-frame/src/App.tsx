import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { NotFound } from './pages/errorPage/404';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="login" element={<Login />}/>
        <Route path="main" element={<Main />} >
          <Route path="pageOne" element={<PageOne />}/>
          <Route path="pageTwo" element={<PageTwo />}/>
        </Route>
        <Route path="404" element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;
