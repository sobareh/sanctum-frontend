import { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../layout/Dashboard';
import { RefundsTable } from '../components/RefundsTable';
import Spinner from '../components/Spinner';

const RefundsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = JSON.parse(localStorage.getItem('auth-sanctum')).token;
  const headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const getListRestitusi = async () => {
    await axios
      .get('http://sanctum-api.test/api/restitusi', { headers })
      .then((response) => {
        const responseData = response.data.data;

        setData(responseData);

        setLoading(false);
      });
  };

  useEffect(() => {
    if (loading) {
      getListRestitusi();
    }
  }, []);

  return (
    <Dashboard
      headerDesc={'halaman Pengaturan User.'}
      headerTitle={'Pengaturan User'}
    >
      {loading ? <Spinner /> : <RefundsTable resData={data} />}
    </Dashboard>
  );
};

export default RefundsPage;
