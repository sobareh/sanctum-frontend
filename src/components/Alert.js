import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function Alert() {
  const { notification } = useContext(GlobalContext);

  const { position, type, message } = notification;

  return (
    <div
      id='toast-container'
      className={`toast-${position} toast-notification`}
      style={{
        display: 'none',
        opacity: 1,
        WebkitTransition: 'opacity 2000ms linear',
        transition: 'opacity 2000ms linear',
      }}
    >
      <div
        id='toast-alert'
        className={`toast toast-${type} d-block`}
        aria-live='polite'
      >
        <div className='toast-message'>
          <span className='text-light fs-6'>{message}</span>
        </div>
      </div>
    </div>
  );
}

export default Alert;
