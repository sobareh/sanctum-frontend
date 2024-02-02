import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../layout/Dashboard';

import pdfSvg from '../assets/pdf.svg';

const Details = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const headers = {
    Authorization:
      'Bearer ' + JSON.parse(localStorage.getItem('auth-sanctum')).token,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const getDetailData = async () => {
    const response = await axios.get(
      `http://sanctum-api.test/api/restitusi/${id}`,
      { headers }
    );

    setDetail(response.data.data);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <Dashboard
      headerTitle={'Detail Dokumen'}
      headerDesc={'Detail Dokumen Pengujian Aplikasi'}
    >
      <div className='card mb-5 mb-xl-10'>
        <div className='card-body pt-9 pb-0'>
          <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
            <div className='me-7 mb-4'>
              <div className='symbol symbol-75px symbol-fixed position-relative'>
                <div className='symbol-label bg-light-primary text-primary'>
                  <span className='svg-icon svg-icon-4x svg-icon-primary'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M13.0021 10.9128V3.01281C13.0021 2.41281 13.5021 1.91281 14.1021 2.01281C16.1021 2.21281 17.9021 3.11284 19.3021 4.61284C20.7021 6.01284 21.6021 7.91285 21.9021 9.81285C22.0021 10.4129 21.5021 10.9128 20.9021 10.9128H13.0021Z'
                        fill='black'
                      />
                      <path
                        opacity='0.3'
                        d='M11.0021 13.7128V4.91283C11.0021 4.31283 10.5021 3.81283 9.90208 3.91283C5.40208 4.51283 1.90209 8.41284 2.00209 13.1128C2.10209 18.0128 6.40208 22.0128 11.3021 21.9128C13.1021 21.8128 14.7021 21.3128 16.0021 20.4128C16.5021 20.1128 16.6021 19.3128 16.1021 18.9128L11.0021 13.7128Z'
                        fill='black'
                      />
                      <path
                        opacity='0.3'
                        d='M21.9021 14.0128C21.7021 15.6128 21.1021 17.1128 20.1021 18.4128C19.7021 18.9128 19.0021 18.9128 18.6021 18.5128L13.0021 12.9128H20.9021C21.5021 12.9128 22.0021 13.4128 21.9021 14.0128Z'
                        fill='black'
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex-grow-1'>
              <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                <div className='d-flex flex-column'>
                  <div className='d-flex align-items-start mb-2'>
                    <span className='text-gray-900 fs-2 fw-bolder me-1'>
                      {/* {detail.nama_wp} */} Aplikasi CRM Sigakum Interop
                    </span>
                  </div>
                  <div className='d-flex flex-wrap fw-bold align-items-center fs-6 mb-4 pe-2'>
                    <span className='d-flex align-items-center text-gray-400 me-5 mb-2'>
                      <span className='svg-icon svg-icon-4 me-1'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            opacity='0.3'
                            d='M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z'
                            fill='black'
                          />
                          <path
                            d='M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z'
                            fill='black'
                          />
                        </svg>
                      </span>
                      Irham Maulana
                    </span>
                  </div>
                </div>
                {/* <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                  <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                    <span className='fw-bold fs-6 text-gray-400'>
                      Progress Restitusi
                    </span>
                    <span className='fw-bolder fs-6'>75%</span>
                  </div>
                  <div className='h-5px mx-3 w-100 bg-light mb-3'>
                    <div
                      className={`bg-${
                        detail.is_completed ? 'success' : 'warning'
                      } rounded h-5px`}
                      role='progressbar'
                      style={{ width: '75%' }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-5 gy-5 gx-xl-10'>
      <div className='col-xl-5'>
          <div className='card mb-5 mb-xl-10'>
            <div className='card-header mt-3'>
              <div className='card-title flex-column'>
                <h3 className='fw-bolder mb-2 text-dark'>Information Details</h3>
              </div>
            </div>
            <div className='card-body ps-9 pe-9'>
              <div className='row mb-6'>
                {/*begin::Label*/}
                <label className='col-lg-4 fw-bold text-muted'>
                  Nomor Dokumen
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-800'>
                    PJ122400001
                  </span>
                </div>
                {/*end::Col*/}
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Tanggal Rekam
                </label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bolder text-gray-800 fs-6 me-2'>
                    02 Januari 2024
                  </span>
                  <span className='badge badge-light-success'>completed</span>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Nomor Kardus / Rak Dokumen
                </label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bolder text-gray-800 fs-6 me-2'>
                    020100 / A20
                  </span>
                  <span className='badge badge-light-danger'></span>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Jenis Dokumen
                </label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bolder text-gray-800 fs-6 me-2'>
                    Pengujian Baru
                  </span>
                  <span className='badge badge-light-danger'></span>
                </div>
              </div>
              <div className='row mb-6'>
                {/*begin::Label*/}
                <label className='col-lg-4 fw-bold text-muted'>Keterangan</label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className='col-lg-8 d-flex align-items-center'>
                  <span className='fw-bolder fs-6 text-gray-800 me-2'>
                    Dokumen Pengujian Aplikasi CRM Interop Sigakum dengan pic pelaksana pegawai a.n. Juliana Sihombing dan Edward Martin Sitepu
                  </span>
                </div>
                {/*end::Col*/}
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-7'>
        <div className='card card-xl mb-xl-8'>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bolder fs-3 mb-1'>Files</span>
                <span className='text-muted mt-1 fw-bold fs-7'>
                  Dokumen Pengujian Aplikasi.
                </span>
              </h3>
            </div>
            <div className='card-body py-3'>
              <div className='table-responsive'>
                <table className='table align-middle gs-0 gy-3'>
                  <thead>
                    <tr>
                      <th className='p-0 w-50px' />
                      <th className='p-0 min-w-150px' />
                      <th className='p-0 min-w-140px' />
                      <th className='p-0 min-w-40px' />
                      <th className='p-0 min-w-40px' />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={pdfSvg}
                          className='h-35px w-35px text-center'
                        />
                      </td>
                      <td className='text-dark fw-bolder mb-1 fs-6'>
                        Aplikasi Sigakum CRM
                      </td>
                      <td className='text-end text-muted fw-bold'>
                        22-01-2024
                      </td>
                      
                      <td className='text-end text-dark fw-bolder fs-6 pe-0'>
                        5.4MB
                      </td>
                      <td className='text-end text-dark fw-bolder fs-6 pe-0'>
                        <button className='text-end btn btn-light btn-sm btn-active-light-primary'>
                          Download
                        </button>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </Dashboard>
  );
};

export default Details;
