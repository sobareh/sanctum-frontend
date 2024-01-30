import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({ children }) {
  const auth = JSON.parse(localStorage.getItem('auth-sanctum')) ?? {
    data: { token: null },
  };

  if (auth?.token) {
    return <Navigate to='/home' />;
  }

  return children ? children : <Outlet />;
}

export default PublicRoute;
