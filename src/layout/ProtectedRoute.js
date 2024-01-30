import { useContext } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { parseISO, isFuture } from 'date-fns';
import axios from 'axios';
import notificationAction from '../utils/notificationAction';

import GlobalContext from '../context/GlobalContext';

const ProtectedRoute = ({ children }) => {
  const { dispatch } = useContext(GlobalContext);
  const location = useLocation();
  const authData = JSON.parse(localStorage.getItem('auth-sanctum')) ?? null;

  const logoutSession = async () => {
    const headers = {
      Authorization:
        'Bearer ' + JSON.parse(localStorage.getItem('auth-sanctum')).token,
      Accept: 'application/json',
    };
    const data = null;

    await axios.post('http://sanctum-api.test/api/logout', data, { headers });
  };

  if (authData === null) {
    return <Navigate to='/' replace state={{ path: location.pathname }} />;
  }

  if (authData) {
    const expiredDate = parseISO(authData?.expired_at);
    const isActive = isFuture(expiredDate);

    if (isActive === false) {
      logoutSession();
      notificationAction(dispatch);
      localStorage.removeItem('auth-sanctum');

      return <Navigate to='/' replace />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
