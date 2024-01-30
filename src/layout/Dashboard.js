import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AsideMenu from './AsideMenu';
import AutoLogout from '../components/AutoLogout';
import axios from 'axios';
import { setAlertTrue } from '../context/GlobalActions';
import GlobalContext from '../context/GlobalContext';

// icon and logo
import DJPLogo from '../assets/DJP-Kemenkeu_Dark.svg';
import avatar from '../assets/user-profile.png';

const Dashboard = ({
  children,
  headerTitle = 'Dashboard',
  headerDesc = 'Summary data Arsip Berkas Pengujian Aplikasi ',
}) => {
  const { dispatch, user } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  const handleOutsideClicks = (event) => {
    if (
      open &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    const data = null;
    const config = {
      headers: {
        Authorization:
          'Bearer ' + JSON.parse(localStorage.getItem('auth-sanctum')).token,
        Accept: 'application/json',
      },
    };
    const logout = await axios.post(
      'http://sanctum-api.test/api/logout',
      data,
      config
    );

    if (logout) {
      const msg = {
        message: 'Logout berhasil.',
        type: 'error',
        position: 'top-right',
      };

      localStorage.removeItem('auth-sanctum');

      setTimeout(() => {
        navigate('/');
        setAlertTrue(msg, dispatch);
      }, 1000);

      setTimeout(() => {
        dispatch({
          type: 'REMOVE_ALERT',
        });
      }, 5000);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClicks);
    return () => {
      document.addEventListener('mousedown', handleOutsideClicks);
    };
    // eslint-disable-next-line
  }, [open]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('auth-sanctum'));

    if (token) {
      dispatch({
        type: 'LOGGED_IN',
        payload: token.user ?? null,
      });
    }
  }, []);

  const handleAsideToggle = () => {
    const body = document.body;

    setToggle(!toggle);

    if (toggle) {
      body.setAttribute('data-kt-aside-minimize', 'on');
      document.getElementById('kt_aside_toggle').classList.add('active');
    } else {
      body.setAttribute('data-kt-aside-minimize', 'off');
      document.getElementById('kt_aside_toggle').classList.remove('active');
    }
  };

  return (
    <AutoLogout>
      {/*begin::Main*/}
      {/*begin::Root*/}
      <div className='d-flex flex-column flex-root'>
        {/*begin::Page*/}
        <div className='page d-flex flex-row flex-column-fluid'>
          {/*begin::Aside*/}
          <div
            id='kt_aside'
            className='aside aside-light aside-hoverable'
            data-kt-drawer='true'
            data-kt-drawer-name='aside'
            data-kt-drawer-activate='{default: true, lg: false}'
            data-kt-drawer-overlay='true'
            data-kt-drawer-width="{default:'200px', '300px': '250px'}"
            data-kt-drawer-direction='start'
            data-kt-drawer-toggle='#kt_aside_mobile_toggle'
          >
            {/*begin::Brand*/}
            <div className='aside-logo flex-column-auto' id='kt_aside_logo'>
              {/*begin::Logo*/}
              <img alt='Logo' src={DJPLogo} className='h-55px logo ps-7' />

              {/*end::Logo*/}
              {/*begin::Aside toggler*/}
              <div
                id='kt_aside_toggle'
                className='btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle'
                data-kt-toggle='true'
                data-kt-toggle-state='active'
                data-kt-toggle-target='body'
                data-kt-toggle-name='aside-minimize'
                onClick={handleAsideToggle}
              >
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr079.svg*/}
                <span className='svg-icon svg-icon-1 rotate-180'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      opacity='0.5'
                      d='M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z'
                      fill='black'
                    />
                    <path
                      d='M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z'
                      fill='black'
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </div>
              {/*end::Aside toggler*/}
            </div>
            {/*end::Brand*/}
            {/*begin::Aside menu*/}
            <AsideMenu />
            {/*end::Aside menu*/}
          </div>
          {/*end::Aside*/}
          {/*begin::Wrapper*/}
          <div
            className='wrapper d-flex flex-column flex-row-fluid justify-content-between pt-12 min-vh-100'
            id='kt_wrapper'
          >
            <div>
              {/*begin::Header*/}
              <div
                id='kt_header'
                style={{}}
                className='header align-items-stretch'
              >
                {/*begin::Container*/}
                <div className='container-fluid d-flex align-items-stretch justify-content-between'>
                  {/*begin::Aside mobile toggle*/}
                  <div
                    className='d-flex align-items-center d-lg-none ms-n3 me-1'
                    title='Show aside menu'
                  >
                    <div
                      className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
                      id='kt_aside_mobile_toggle'
                    >
                      {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                      <span className='svg-icon svg-icon-2x mt-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z'
                            fill='black'
                          />
                          <path
                            opacity='0.3'
                            d='M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z'
                            fill='black'
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                  </div>
                  {/*end::Aside mobile toggle*/}
                  {/*begin::Wrapper*/}
                  <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
                    {/*begin::Navbar*/}
                    <div
                      className='d-flex align-items-stretch'
                      id='kt_header_nav'
                    >
                      {/*begin::Menu wrapper*/}
                      <div
                        className='header-menu align-items-stretch'
                        data-kt-drawer='true'
                        data-kt-drawer-name='header-menu'
                        data-kt-drawer-activate='{default: true, lg: false}'
                        data-kt-drawer-overlay='true'
                        data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                        data-kt-drawer-direction='end'
                        data-kt-drawer-toggle='#kt_header_menu_mobile_toggle'
                        data-kt-swapper='true'
                        data-kt-swapper-mode='prepend'
                        data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
                      >
                        {/*begin::Menu*/}
                        {/*end::Menu*/}
                      </div>
                      {/*end::Menu wrapper*/}
                    </div>
                    {/*end::Navbar*/}
                    {/*begin::Topbar*/}
                    <div className='d-flex align-items-stretch flex-shrink-0'>
                      {/*begin::Toolbar wrapper*/}
                      <div className='d-flex align-items-stretch flex-shrink-0'>
                        {/*begin::Name dan job*/}
                        <div className='d-none d-md-flex flex-column align-items-end justify-content-center'>
                          <span className='text-muted fs-7 fw-semibold lh-1 mb-1 '>
                            Halo,
                          </span>
                          <span className='text-gray-800 fs-7 fw-bold lh-1'>
                            {user?.name ?? ' Pengguna'}
                          </span>
                        </div>
                        {/*end::Name dan job*/}
                        {/*begin::User*/}
                        <div
                          className='d-flex align-items-center ms-1 ms-lg-3'
                          id='kt_header_user_menu_toggle'
                          ref={dropdownRef}
                        >
                          {/*begin::Menu wrapper*/}
                          <div className='cursor-pointer symbol symbol-30px symbol-circle symbol-md-40px show menu-dropdown'>
                            <img
                              onClick={() => setOpen(!open)}
                              src={avatar}
                              alt='user'
                            />
                          </div>
                          {/*begin::Menu*/}
                          {open && (
                            <div
                              id='profile-toggle'
                              className='menu show menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
                              data-kt-menu='true'
                              data-popper-placement='bottom-end'
                              style={{
                                zIndex: 105,
                                position: 'fixed',
                                inset: '0px 0px auto auto',
                                margin: '0px',
                                transform: 'translate3d(-30px, 65px, 0px)',
                              }}
                            >
                              {/*begin::Menu item*/}
                              <div className='menu-item px-3'>
                                <div className='menu-content d-flex align-items-center px-3'>
                                  {/*begin::Avatar*/}
                                  <div className='symbol symbol-50px me-5'>
                                    <img alt='image' src={avatar} />
                                  </div>
                                  {/*end::Avatar*/}
                                  {/*begin::Username*/}
                                  <div className='d-flex flex-column'>
                                    <div className='fw-bolder d-flex align-items-center fs-6'>
                                      {user?.name ?? 'Pengguna'}
                                      <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>
                                        Pro
                                      </span>
                                    </div>
                                    <span className='fw-bold text-muted text-hover-primary fs-7'>
                                      {user?.nip ?? '910xxxxxx'}
                                    </span>
                                  </div>
                                  {/*end::Username*/}
                                </div>
                              </div>
                              {/*end::Menu item*/}
                              {/*begin::Menu separator*/}
                              <div className='separator my-2' />
                              {/*end::Menu separator*/}
                              {/*begin::Menu item*/}
                              <div className='menu-item px-5'>
                                <span
                                  // href='../../demo1/dist/account/overview.html'
                                  className='menu-link px-5'
                                >
                                  My Profile
                                </span>
                              </div>
                              {/*end::Menu item*/}
                              {/*end::Menu item*/}
                              {/*begin::Menu item*/}
                              <div className='menu-item px-5'>
                                <span
                                  onClick={handleLogout}
                                  className='menu-link px-5'
                                >
                                  Sign Out
                                </span>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                          )}
                          {/*end::Menu*/}
                          {/*end::Menu wrapper*/}
                        </div>
                        {/*end::User */}
                        {/*begin::Heaeder menu toggle*/}
                        <div
                          className='d-flex align-items-center d-lg-none ms-2 me-n3'
                          title='Show header menu'
                        >
                          <div
                            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
                            id='kt_header_menu_mobile_toggle'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/text/txt001.svg*/}
                            <span className='svg-icon svg-icon-1'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  d='M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z'
                                  fill='black'
                                />
                                <path
                                  opacity='0.3'
                                  d='M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                        </div>
                        {/*end::Heaeder menu toggle*/}
                      </div>
                      {/*end::Toolbar wrapper*/}
                    </div>
                    {/*end::Topbar*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Header*/}
              {/*begin::Content*/}
              <div
                className='content d-flex flex-column flex-column-fluid'
                id='kt_content'
              >
                {/*begin::Toolbar*/}
                <div id='kt_app_toolbar' className='app-toolbar py-3 py-lg-6'>
                  {/*begin::Toolbar container*/}
                  <div
                    id='kt_app_toolbar_container'
                    className='app-container container-fluid d-flex flex-stack'
                  >
                    {/*begin::Page title*/}
                    <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
                      <div className='d-flex flex-row'>
                        {/*begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr063.svg*/}
                        <button
                          onClick={() => navigate(-1)}
                          className='btn btn-icon btn-sm btn-active-light-primary me-2'
                        >
                          <span className='svg-icon svg-icon-2tx svg-icon-hover-primary'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <rect
                                opacity='0.5'
                                x={6}
                                y={11}
                                width={13}
                                height={2}
                                rx={1}
                                fill='black'
                              />
                              <path
                                d='M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z'
                                fill='black'
                              />
                            </svg>
                          </span>
                          {/*begin::Title*/}
                        </button>
                        <div>
                          <h1 className='page-heading d-flex text-dark fw-bolder fs-3 flex-column justify-content-center my-0'>
                            {headerTitle ?? 'Dashboard'}
                          </h1>
                          {/*end::Title*/}
                          {/*begin::Breadcrumb*/}
                          <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                            {/*begin::Item*/}
                            <li className='breadcrumb-item text-muted'>
                              Halaman {headerDesc}
                            </li>
                            {/*end::Item*/}
                          </ul>
                          {/*end::Breadcrumb*/}
                        </div>
                      </div>
                    </div>
                    {/*end::Page title*/}
                  </div>
                  {/*end::Toolbar container*/}
                </div>

                {/*end::Toolbar*/}
                {/*begin::Post*/}
                <div className='post d-flex flex-column-fluid' id='kt_post'>
                  {/*begin::Container*/}
                  <div id='kt_content_container' className='container-xxl'>
                    {children}
                  </div>
                  {/*end::Container*/}
                </div>
                {/*end::Post*/}
              </div>
              {/*end::Content*/}
            </div>
            {/*begin::Footer*/}
            <div className='footer py-4 d-flex flex-lg-column' id='kt_footer'>
              {/*begin::Container*/}
              <div className='container-fluid d-flex flex-column flex-md-row justify-content-end'>
                {/*begin::Copyright*/}
                <div className='text-dark order-2 order-md-1'>
                  <span className='text-muted fw-bold me-1'>2023©</span>
                  <span className='text-gray-800'>Seksi Pengujian dan Dokumentasi Sistem Perpajakan</span>
                </div>
                {/*end::Copyright*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Footer*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
      {/*end::Root*/}
    </AutoLogout>
  );
};

export default Dashboard;
