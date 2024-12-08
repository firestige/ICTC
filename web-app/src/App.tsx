import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Dashboard, Detail, Explorer, Home, Login, Register, Settings, Welcome } from '@/pages';
import { AuthLayout, MainLayout } from '@/layouts';

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="about" element={<About />} />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="detail" element={<Detail />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;