import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';
import axios from 'axios';

import { setAlertTrue } from '../context/GlobalActions';

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { dispatch } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState();

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const msg = {
      message: 'Login berhasil.',
      type: 'success',
      position: 'top-center',
    };

    try {
      await axios.get('http://sanctum-api.test/sanctum/csrf-cookie');

      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };

      const reqLogin = await axios.post(
        'http://sanctum-api.test/api/login',
        formData,
        {
          headers,
        }
      );

      if (reqLogin.status === 200) {
        const token = JSON.stringify(reqLogin.data.data);
        localStorage.setItem('auth-sanctum', token);

        dispatch({
          type: 'LOGGED_IN',
          payload: reqLogin.data.data.user,
        });

        setTimeout(() => {
          navigate(state?.path || '/home');
          setAlertTrue(msg, dispatch);
        }, 1000);

        setTimeout(() => {
          dispatch({
            type: 'REMOVE_ALERT',
          });
        }, 5000);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.response);
      const err = error.response.data;

      setError(err);
      console.log(error);

      setTimeout(() => {
        setError();
      }, 5000);
    }
  };

  return (
    <div className='d-flex flex-column flex-root'>
      {/*begin::Authentication - Sign-in */}
      <div
        className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
        style={{
          backgroundImage: 'url(assets/media/illustrations/sketchy-1/14.png',
        }}
      >
        {/*begin::Content*/}
        <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
          {/*begin::Logo*/}
          <a href='../../demo1/dist/index.html' className='mb-12'>
            <img
              alt='Logo'
              src='assets/DJP-Kemenkeu_FC.svg'
              style={{
                height: '115px',
              }}
            />
          </a>
          {/*end::Logo*/}
          {/*begin::Wrapper*/}
          <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto'>
            {/*begin::Form*/}
            <form
              onSubmit={handleSubmit}
              className='form w-100'
              noValidate='novalidate'
              id='kt_sign_in_form'
              action='#'
            >
              {/*begin::Heading*/}
              <div className='text-center mb-7'>
                {/*begin::Title*/}
                <h1 className='text-dark mb-3'>Sign In</h1>
                {/*end::Title*/}
                {/*begin::Link*/}
                <div className='text-gray-400 fw-bold fs-4'>
                  Aplikasi Penyimpanan Berkas Dokumentasi Pengujian Aplikasi
                </div>
                {/*end::Link*/}
              </div>
              {/*begin::Heading*/}
              {error && (
                <div className='py-3'>
                  {/*begin::Information*/}
                  <div className='d-flex align-items-center rounded py-4 px-5 bg-light-danger'>
                    <span className='svg-icon svg-icon-3x svg-icon-danger me-5'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                      >
                        <rect
                          opacity='0.3'
                          x={2}
                          y={2}
                          width={20}
                          height={20}
                          rx={10}
                          fill='black'
                        />
                        <rect
                          x={11}
                          y={14}
                          width={7}
                          height={2}
                          rx={1}
                          transform='rotate(-90 11 14)'
                          fill='black'
                        />
                        <rect
                          x={11}
                          y={17}
                          width={2}
                          height={2}
                          rx={1}
                          transform='rotate(-90 11 17)'
                          fill='black'
                        />
                      </svg>
                    </span>
                    <div className='text-danger fs-6'>
                      {error.message}
                      {error.errors && (
                        <ul className='mb-0'>
                          {Object.entries(error.errors).map(([key, value]) => (
                            <li key={key}>{value}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {/*begin::Input group*/}
              <div className='fv-row mb-7'>
                {/*begin::Label*/}
                <label className='form-label fs-6 fw-bolder text-dark'>
                  Username
                </label>
                {/*end::Label*/}
                {/*begin::Input*/}
                <input
                  onChange={onChange}
                  className='form-control form-control-lg form-control-solid'
                  type='text'
                  name='username'
                  autoComplete='off'
                />
                {/*end::Input*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className='fv-row mb-9'>
                {/*begin::Wrapper*/}
                <div className='d-flex flex-stack mb-2'>
                  {/*begin::Label*/}
                  <label className='form-label fw-bolder text-dark fs-6 mb-0'>
                    Password
                  </label>
                  {/*end::Label*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Input*/}
                <input
                  onChange={onChange}
                  className='form-control form-control-lg form-control-solid'
                  type='password'
                  name='password'
                  autoComplete='off'
                />
                {/*end::Input*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Actions*/}
              <div className='text-center mb-8'>
                {/*begin::Submit button*/}
                {loading ? (
                  <button
                    disabled
                    id='kt_sign_in_submit'
                    className='btn btn-lg btn-primary w-100 mb-5'
                    data-kt-indicator='on'
                  >
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2' />
                    </span>
                  </button>
                ) : (
                  <button
                    type='submit'
                    id='kt_sign_in_submit'
                    className='btn btn-lg btn-primary w-100 mb-5'
                  >
                    <span className='indicator-label'>Continue</span>
                  </button>
                )}
                {/*end::Submit button*/}
                {/*begin::Separator*/}
                <div className='text-center text-muted text-uppercase fw-bolder mb-5'></div>
                {/*end::Separator*/}
              </div>
              {/*end::Actions*/}
            </form>
            {/*end::Form*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Content*/}
        {/*begin::Footer*/}
        <div className='d-flex flex-center flex-column-auto p-10'>
          {/*begin::Links*/}
          <div className='d-flex align-items-center fw-bold fs-6'>
            <Link to='/login' className='text-muted text-hover-primary px-2'>
              Seksi Pengujian dan Dokumentasi Sistem Perpajakan 2023
            </Link>
          </div>
          {/*end::Links*/}
        </div>
        {/*end::Footer*/}
      </div>
      {/*end::Authentication - Sign-in*/}
    </div>
  );
};

export default Login;
