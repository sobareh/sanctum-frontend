import { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from '../layout/Dashboard';
import imageUser from '../assets/blank.png';

function Home() {
  const [dashboard, setDashboard] = useState({});
  const { due_date_records, is_completed, newest_records, still_processed } =
    dashboard;

  const token = JSON.parse(localStorage.getItem('auth-sanctum')).token;
  const headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const getDashboardData = async () => {
    const response = await axios.get('http://sanctum-api.test/api/dashboard', {
      headers,
    });
    const data = await response.data.data;

    console.log(data);

    setDashboard(data);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <Dashboard>
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-3'>
          {/*begin::Statistics Widget 5*/}
          <a
            href='#'
            className='card bg-body hoverable card-xl-stretch mb-xl-8'
          >
            {/*begin::Body*/}
            <div className='card-body'>
              {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
              <span className='svg-icon svg-icon-primary svg-icon-3x ms-n1'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x={8}
                    y={9}
                    width={3}
                    height={10}
                    rx='1.5'
                    fill='currentColor'
                  />
                  <rect
                    opacity='0.5'
                    x={13}
                    y={5}
                    width={3}
                    height={14}
                    rx='1.5'
                    fill='currentColor'
                  />
                  <rect
                    x={18}
                    y={11}
                    width={3}
                    height={8}
                    rx='1.5'
                    fill='currentColor'
                  />
                  <rect
                    x={3}
                    y={13}
                    width={3}
                    height={6}
                    rx='1.5'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              <div className='text-gray-900 fw-bold fs-2 mb-2 mt-5'>
                {is_completed + still_processed ?? ''}
              </div>
              <div className='fw-semibold text-gray-400'>
                Dokumen Arsip Pengujian
              </div>
            </div>
            {/*end::Body*/}
          </a>
          {/*end::Statistics Widget 5*/}
        </div>
        <div className='col-xl-3'>
          {/*begin::Statistics Widget 5*/}
          <a
            href='#'
            className='card bg-primary hoverable card-xl-stretch mb-xl-8'
          >
            {/*begin::Body*/}
            <div className='card-body'>
              {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
              <span className='svg-icon svg-icon-white svg-icon-3x ms-n1'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.3'
                    d='M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z'
                    fill='currentColor'
                  />
                  <path
                    d='M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              <div className='text-white fw-bold fs-2 mb-2 mt-5'>
                {still_processed ?? ''}
              </div>
              <div className='fw-semibold text-white'>
                Dokumen Pengujian Tahun Berjalan
              </div>
            </div>
            {/*end::Body*/}
          </a>
          {/*end::Statistics Widget 5*/}
        </div>
      </div>

      {/*begin::Row*/}
      <div className='row gy-5 g-xl-8'>
        {/*begin::Col*/}
        <div className='col-xl-4'>
          {/*begin::List Widget 3*/}
          <div className='card card-xl-stretch mb-xl-8'>
            {/*begin::Header*/}
            <div className='card-header border-0 mb-3'>
              <h3 className='card-title align-items-start flex-column pt-5'>
                <span className='card-label fw-bolder fs-3 mb-1'>
                  Dokumen Pengujian Baru
                </span>
                <span className='text-muted mt-1 fw-bold fs-7'>
                  dalam dua minggu terakhir
                </span>
              </h3>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className='card-body pt-2'>
              {newest_records &&
                newest_records.map((item, key) => (
                  <div className='d-flex align-items-center mb-8' key={key}>
                    {/*begin::Bullet*/}
                    <span className='bullet bullet-vertical h-40px bg-success' />
                    {/*end::Bullet*/}
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid mx-5'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        defaultValue=''
                      />
                    </div>
                    {/*end::Checkbox*/}
                    {/*begin::Description*/}
                    <div className='flex-grow-1'>
                      <a
                        href='#'
                        className='text-gray-800 text-hover-primary fw-bolder fs-6'
                      >
                        {item.nama_wp}
                      </a>
                      <span className='text-muted fw-bold d-block'>
                        {item.no_tindaklanjut_awal}
                      </span>
                    </div>
                    {/*end::Description*/}
                    <span className='badge badge-light-success fs-8 fw-bolder'>
                      New
                    </span>
                  </div>
                ))}
              <div className='d-flex align-items-center mb-8'>
                {/*begin::Bullet*/}
                <span className='bullet bullet-vertical h-40px bg-primary' />
                {/*end::Bullet*/}
                {/*begin::Checkbox*/}
                <div className='form-check form-check-custom form-check-solid mx-5'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    defaultValue=''
                  />
                </div>
                {/*end::Checkbox*/}
                {/*begin::Description*/}
                <div className='flex-grow-1'>
                  <a
                    href='#'
                    className='text-gray-800 text-hover-primary fw-bolder fs-6'
                  >
                    Aplikasi SIDJPNine P3 PBB
                  </a>
                  <span className='text-muted fw-bold d-block'>
                    22 Januari 2024
                  </span>
                </div>
                {/*end::Description*/}
                <span className='badge badge-light-primary fs-8 fw-bolder'>
                  New
                </span>
              </div>
              {/*end:Item*/}
              {/*end:Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end:List Widget 3*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className='col-xl-8'>
          {/*begin::Tables Widget 9*/}
          <div className='card card-xl-stretch mb-5 mb-xl-8'>
            {/*begin::Header*/}
            <div className='card-header border-0 mb-3'>
              <h3 className='card-title align-items-start flex-column pt-5'>
                <span className='card-label fw-bolder fs-3 mb-1'>
                  Summary Dokumen Pengujian Aplikasi
                </span>
                <span className='text-muted mt-1 fw-bold fs-7'>
                  seksi PDSP
                </span>
              </h3>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className='card-body py-3'>
              {/*begin::Table container*/}
              <div className='table-responsive'>
                {/*begin::Table*/}
                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                  {/*begin::Table head*/}
                  <thead>
                    <tr className='fw-bolder text-muted'>
                      <th className='w-25px'>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            defaultValue={1}
                            data-kt-check='true'
                            data-kt-check-target='.widget-9-check'
                          />
                        </div>
                      </th>
                      <th className='min-w-150px'>Nama Aplikasi</th>
                      <th className='min-w-140px'>Jenis Pengujian</th>
                      <th className='min-w-100px text-end'>Actions</th>
                    </tr>
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody>
                    <tr>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input widget-9-check'
                            type='checkbox'
                            defaultValue={1}
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={imageUser} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a
                              href='#'
                              className='text-dark fw-bolder text-hover-primary fs-6'
                            >
                              Aplikasi ECTag Modul Kewilayahan
                            </a>
                            <span className='text-muted fw-bold text-muted d-block fs-7'>
                              18 Januari 2024
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bolder text-hover-primary d-block fs-6'
                        >
                          URS
                        </a>
                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                          15 Desember 2024
                        </span>
                      </td>
                      <td>
                        <div className='d-flex justify-content-end flex-shrink-0'>
                          <a
                            href='#'
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                            <span className='svg-icon svg-icon-3'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  d='M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z'
                                  fill='black'
                                />
                                <path
                                  opacity='0.3'
                                  d='M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a
                            href='#'
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                            <span className='svg-icon svg-icon-3'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  opacity='0.3'
                                  d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                  fill='black'
                                />
                                <path
                                  d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input widget-9-check'
                            type='checkbox'
                            defaultValue={1}
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={imageUser} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a
                              href='#'
                              className='text-dark fw-bolder text-hover-primary fs-6'
                            >
                              Aplikasi Logbook Mobile DJP
                            </a>
                            <span className='text-muted fw-bold text-muted d-block fs-7'>
                              02 Januari 2024
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bolder text-hover-primary d-block fs-6'
                        >
                          Pengujian Baru
                        </a>
                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                         11 November 2024
                        </span>
                      </td>
                      <td>
                        <div className='d-flex justify-content-end flex-shrink-0'>
                          <a
                            href='#'
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                            <span className='svg-icon svg-icon-3'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  d='M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z'
                                  fill='black'
                                />
                                <path
                                  opacity='0.3'
                                  d='M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a
                            href='#'
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                            <span className='svg-icon svg-icon-3'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  opacity='0.3'
                                  d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                  fill='black'
                                />
                                <path
                                  d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                          <input
                            className='form-check-input widget-9-check'
                            type='checkbox'
                            defaultValue={1}
                          />
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='symbol symbol-45px me-5'>
                            <img src={imageUser} alt='' />
                          </div>
                          <div className='d-flex justify-content-start flex-column'>
                            <a
                              href='#'
                              className='text-dark fw-bolder text-hover-primary fs-6'
                            >
                              Aplikasi SIDJPNINE Ekstensifikasi
                            </a>
                            <span className='text-muted fw-bold text-muted d-block fs-7'>
                              5 Januari 2024
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bolder text-hover-primary d-block fs-6'
                        >
                          RFC
                        </a>
                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                          23 Desember 2024
                        </span>
                      </td>
                      <td>
                        <div className='d-flex justify-content-end flex-shrink-0'>
                          <a
                            href='#'
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                            <span className='svg-icon svg-icon-3'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  d='M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z'
                                  fill='black'
                                />
                                <path
                                  opacity='0.3'
                                  d='M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a
                            href='#'
                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                            <span className='svg-icon svg-icon-3'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                              >
                                <path
                                  opacity='0.3'
                                  d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                  fill='black'
                                />
                                <path
                                  d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                  fill='black'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                        </div>
                      </td>
                    </tr>
                    
                    
                  </tbody>
                  {/*end::Table body*/}
                </table>
                {/*end::Table*/}
              </div>
              {/*end::Table container*/}
            </div>
            {/*begin::Body*/}
          </div>
          {/*end::Tables Widget 9*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
    </Dashboard>
  );
}

export default Home;
