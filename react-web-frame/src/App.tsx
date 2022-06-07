import React, { FC } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Main } from './pages/main';
import { NotFound } from './pages/NotFound';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App;
