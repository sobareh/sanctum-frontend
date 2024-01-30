import DJPLogo from '../assets/DJP-Kemenkeu_Dark.svg';

const Spinner = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
      <img alt='Logo' src={DJPLogo} className='h-55px logo' />
      <span
        type='submit'
        id='kt_sign_in_submit'
        className='btn btn-sm btn-light w-30'
        data-kt-indicator='on'
        disabled
      >
        <span className='indicator-progress fs-7' data-kt-indicator='on'>
          Please wait...
          <span className='spinner-border spinner-border-sm align-middle ms-2' />
        </span>
      </span>
    </div>
  );
};

export default Spinner;
