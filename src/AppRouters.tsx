import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Layout from './layout/Layout';
import Brokers from './pages/Brokers';
import Submissions from './pages/Submissions';
import Orgsnizations from './pages/Orgsnizations';
import GoalsRoals from './pages/GoalsRoals';
import Admin from './pages/Admin';

export const AppRouters = () => {
  return (
      <Routes>
         <Route element={<Layout />}>
           <Route index element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/brokers" element={<Brokers />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/organizations" element={<Orgsnizations />} />
            <Route path="/goals-rules" element={<GoalsRoals />} />
              <Route path="/admin" element={<Admin />} />
         </Route>
    {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
    </Route> */}

  {/* <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route> */}
      </Routes>
 
  );
};