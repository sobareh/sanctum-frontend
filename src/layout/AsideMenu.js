import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AsideMenu = () => {
  return (
    <div className='aside-menu flex-column-fluid'>
      {/*begin::Aside Menu*/}
      <div
        className='hover-scroll-overlay-y my-5 my-lg-5'
        id='kt_aside_menu_wrapper'
        data-kt-scroll='true'
        data-kt-scroll-activate='{default: false, lg: true}'
        data-kt-scroll-height='auto'
        data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
        data-kt-scroll-wrappers='#kt_aside_menu'
        data-kt-scroll-offset={0}
      >
        {/*begin::Menu*/}
        <div
          className='d-flex justify-content-between h-700px menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500'
          id='#kt_aside_menu'
          data-kt-menu='true'
        >
          <div>
            <div className='menu-item mt-5 mb-5'>
              <NavLink
                to='/home'
                className={({ isActive }) =>
                  isActive ? 'menu-link active' : 'menu-link'
                }
              >
                <span className='menu-icon'>
                  {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                  <span className='svg-icon svg-icon-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <rect
                        x={2}
                        y={2}
                        width={9}
                        height={9}
                        rx={2}
                        fill='black'
                      />
                      <rect
                        opacity='0.3'
                        x={13}
                        y={2}
                        width={9}
                        height={9}
                        rx={2}
                        fill='black'
                      />
                      <rect
                        opacity='0.3'
                        x={13}
                        y={13}
                        width={9}
                        height={9}
                        rx={2}
                        fill='black'
                      />
                      <rect
                        opacity='0.3'
                        x={2}
                        y={13}
                        width={9}
                        height={9}
                        rx={2}
                        fill='black'
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                <span className='menu-title'>Dashboard</span>
              </NavLink>
            </div>
            <div className='menu-item'>
              <div className='menu-content pb-2'>
                <span className='menu-section text-muted text-uppercase fs-8 ls-1'>
                  Pengujian Aplikasi
                </span>
              </div>
            </div>
            <div className='menu-item'>
              <NavLink
                to='/dokumen'
                className={({ isActive }) =>
                  isActive ? 'menu-link active' : 'menu-link'
                }
              >
                <span className='menu-icon'>
                  <span className='svg-icon svg-icon-2'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        opacity='0.3'
                        d='M22 8H8L12 4H19C19.6 4 20.2 4.39999 20.5 4.89999L22 8ZM3.5 19.1C3.8 19.7 4.4 20 5 20H12L16 16H2L3.5 19.1ZM19.1 20.5C19.7 20.2 20 19.6 20 19V12L16 8V22L19.1 20.5ZM4.9 3.5C4.3 3.8 4 4.4 4 5V12L8 16V2L4.9 3.5Z'
                        fill='currentColor'
                      />
                      <path
                        d='M22 8L20 12L16 8H22ZM8 16L4 12L2 16H8ZM16 16L12 20L16 22V16ZM8 8L12 4L8 2V8Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </span>
                <span className='menu-title'>Dokumen Pengujian</span>
              </NavLink>
            </div>
            <div className='menu-item'>
              <NavLink
                to='/user'
                className={({ isActive }) =>
                  isActive ? 'menu-link active' : 'menu-link'
                }
              >
                <span className='menu-icon'>
                  <span className='svg-icon svg-icon-2'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z'
                        fill='currentColor'
                      />
                      <path
                        opacity='0.3'
                        d='M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </span>
                <span className='menu-title'>Pengaturan User</span>
              </NavLink>
            </div>
            {/* <div className='menu-item'>
              <NavLink
                to='/task'
                className={({ isActive }) =>
                  isActive ? 'menu-link active' : 'menu-link'
                }
              >
                <span className='menu-icon'>
                  <span className='svg-icon svg-icon-2'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        opacity='0.3'
                        d='M14 3V20H2V3C2 2.4 2.4 2 3 2H13C13.6 2 14 2.4 14 3ZM11 13V11C11 9.7 10.2 8.59995 9 8.19995V7C9 6.4 8.6 6 8 6C7.4 6 7 6.4 7 7V8.19995C5.8 8.59995 5 9.7 5 11V13C5 13.6 4.6 14 4 14V15C4 15.6 4.4 16 5 16H11C11.6 16 12 15.6 12 15V14C11.4 14 11 13.6 11 13Z'
                        fill='currentColor'
                      />
                      <path
                        d='M2 20H14V21C14 21.6 13.6 22 13 22H3C2.4 22 2 21.6 2 21V20ZM9 3V2H7V3C7 3.6 7.4 4 8 4C8.6 4 9 3.6 9 3ZM6.5 16C6.5 16.8 7.2 17.5 8 17.5C8.8 17.5 9.5 16.8 9.5 16H6.5ZM21.7 12C21.7 11.4 21.3 11 20.7 11H17.6C17 11 16.6 11.4 16.6 12C16.6 12.6 17 13 17.6 13H20.7C21.2 13 21.7 12.6 21.7 12ZM17 8C16.6 8 16.2 7.80002 16.1 7.40002C15.9 6.90002 16.1 6.29998 16.6 6.09998L19.1 5C19.6 4.8 20.2 5 20.4 5.5C20.6 6 20.4 6.60005 19.9 6.80005L17.4 7.90002C17.3 8.00002 17.1 8 17 8ZM19.5 19.1C19.4 19.1 19.2 19.1 19.1 19L16.6 17.9C16.1 17.7 15.9 17.1 16.1 16.6C16.3 16.1 16.9 15.9 17.4 16.1L19.9 17.2C20.4 17.4 20.6 18 20.4 18.5C20.2 18.9 19.9 19.1 19.5 19.1Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </span>
                <span className='menu-title'>Daftar Tugas</span>
              </NavLink>
            </div> */}
          </div>
          <div className='menu-item'>
            <span className='menu-link'>
              <span className='menu-icon'>
                {/*begin::Svg Icon | path: icons/duotune/coding/cod003.svg*/}
                <span className='svg-icon svg-icon-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z'
                      fill='black'
                    />
                    <path
                      opacity='0.3'
                      d='M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z'
                      fill='black'
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </span>
              <span className='menu-title'>Changelog v0.1.1</span>
            </span>
          </div>
        </div>
        {/*end::Menu*/}
      </div>
      {/*end::Aside Menu*/}
    </div>
  );
};

export default AsideMenu;
