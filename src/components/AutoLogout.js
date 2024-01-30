import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import GlobalContext from '../context/GlobalContext';
import notificationAction from '../utils/notificationAction';

const AutoLogout = ({ children }) => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  let timer;
  const timeout = 1000 * 60 * 60;
  const events = [
    'load',
    'mousemove',
    'mousedown',
    'click',
    'scroll',
    'keypress',
  ];

  const handleAutoLogout = () => {
    timer = setTimeout(() => {
      resetTimer();

      Object.values(events).forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });

      logoutAction();
    }, timeout);
  };

  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };

  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleAutoLogout();
      });
    });
  });

  const logoutAction = async () => {
    const headers = {
      Authorization:
        'Bearer ' + JSON.parse(localStorage.getItem('auth-sanctum')).token,
      Accept: 'application/json',
    };
    const data = null;

    const requestLogout = await axios.post(
      'http://sanctum-api.test/api/logout',
      data,
      { headers }
    );

    if (requestLogout.status === 200) {
      setTimeout(() => {
        localStorage.clear();
        navigate('/');

        notificationAction(dispatch);
      }, 2000);
    }
  };

  return children;
};

export default AutoLogout;
