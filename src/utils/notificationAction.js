import { setAlertTrue } from '../context/GlobalActions';

const notificationAction = (dispatch) => {
  const msg = {
    message:
      'Session anda telah habis. Silahkan lakukan login kembali untuk masuk ke halaman aplikasi.',
    type: 'error w-50',
    position: 'top-center',
  };

  setAlertTrue(msg, dispatch);
};

export default notificationAction;
