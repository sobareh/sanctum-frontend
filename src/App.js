import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Detail from './pages/Detail';
import AddData from './pages/AddData';
import UpdateData from './pages/UpdateData';
import RefundsPage from './pages/RefundsPage';
import TaskPage from './pages/TaskPage';
import UserPage from './pages/UserPage';
import ProtectedRoute from './layout/ProtectedRoute';
import PublicRoute from './layout/PublicRoute';
import Alert from './components/Alert';
import Spinner from './components/Spinner';
import AddDokumen from './pages/AddDokumen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Router>
          <Routes>
            <Route path='/notfound' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
            <Route element={<ProtectedRoute />}>
              <Route exact path='/home' element={<Home />} />
              <Route path='/user' element={<RefundsPage />} />
              <Route path='/dokumen/:id' element={<Detail />}></Route>
              <Route path='/add' element={<AddData />}></Route>
              <Route path='/tambahdokumen' element={<AddDokumen />}></Route>
              <Route path='/update' element={<UpdateData />}></Route>
              <Route path='/dokumen' element={<UserPage />}></Route>
              <Route path='/task' element={<TaskPage />}></Route>
            </Route>
            <Route
              path='/'
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Routes>
          <Alert />
        </Router>
      )}
    </>
  );
}

export default App;
