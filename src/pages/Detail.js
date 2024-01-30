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
      headerTitle={'Detail Restitusi'}
      headerDesc={'Detail Restitusi Wajib Pajak'}
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
                      {detail.nama_wp}
                    </span>
                    <span
                      className={`badge badge-sm badge-${
                        detail.is_completed ? 'success' : 'warning'
                      } fw-bolder ms-2 fs-8 py-1 px-3`}
                    >
                      {detail.is_completed ? 'Completed' : 'In Progress'}
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
                      Yani Melanyi Sihombing
                    </span>
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
                            d='M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z'
                            fill='black'
                          />
                          <path
                            d='M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z'
                            fill='black'
                          />
                        </svg>
                      </span>
                      Medan Selayang
                    </span>
                  </div>
                </div>
                <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-5 gy-5 gx-xl-10'>
        <div className='col-xl-7'>
          <div className='card card-xl-stretch mb-xl-10'>
            <div className='card-header border-0 mt-4'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='fw-bolder mb-2 text-dark'>Activities</span>
                <span className='text-muted fs-7'>
                  Progress pengerjaan restitusi.
                </span>
              </h3>
              <Link
                to='/update'
                className='btn btn-sm btn-light-primary align-self-center pulse pulse-danger'
              >
                Update Data
                <span
                  className='pulse-ring border-3'
                  style={{ top: 0, left: 50 }}
                ></span>
              </Link>
            </div>
            <div className='card-body pt-5'>
              <div className='timeline-label'>
                <div className='timeline-item'>
                  <div className='timeline-label fw-bolder text-gray-800 fs-6'>
                    Aug 23, 2022
                  </div>
                  <div className='timeline-badge'>
                    <i className='fa fa-genderless text-warning fs-1' />
                  </div>
                  <div className='fw-normal timeline-content text-muted ps-3'>
                    SPT Tahunan Lebih Bayar 2021 diajukan permohonan
                    Pengembalian Pendahuluan.
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-label fw-bolder fs-6'>
                    Aug 25, 2022
                  </div>
                  <div className='timeline-badge'>
                    <i className='fa fa-genderless text-success fs-1' />
                  </div>
                  <div className='timeline-content d-flex'>
                    <span className='fw-bolder text-gray-800 ps-3'>
                      Penerbitan Produk Hukum SKPPKP atas SPT Tahunan Lebih
                      Bayar 2021.
                    </span>
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-label fw-bolder text-gray-800 fs-6'>
                    Sep 01, 2022
                  </div>
                  <div className='timeline-badge'>
                    <i className='fa fa-genderless text-primary fs-1' />
                  </div>

                  <div className='fw-normal timeline-content text-muted ps-3'>
                    Pengiriman SKPPKP dan Permintaan Nomor Rekening atas SPTLB
                    ke alamat wajib pajak.
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-label fw-bolder text-gray-800 fs-6'>
                    Sep 08, 2022
                  </div>
                  <div className='timeline-badge'>
                    <i className='fa fa-genderless text-primary fs-1' />
                  </div>
                  <div className='timeline-content fw-normal text-muted ps-3'>
                    Data rekening Pengembalian diterima, proses dilanjutkan ke
                    penerbitan SKPKPP.
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-label fw-bolder text-gray-800 fs-6'>
                    Sep 15, 2022
                  </div>
                  <div className='timeline-badge'>
                    <i className='fa fa-genderless text-success fs-1' />
                  </div>
                  <div className='timeline-content fw-bolder text-gray-800 ps-3'>
                    SKPKPP terbit dengan no: &nbsp;
                    <span className='text-primary'>
                      KEP-00077/WPJ.0102/2022
                    </span>
                    &nbsp; tanggal 13 September 2022.
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-label fw-bolder text-gray-800 fs-6'>
                    Sep 20, 2022
                  </div>

                  <div className='timeline-badge'>
                    <i className='fa fa-genderless text-success fs-1' />
                  </div>
                  <div className='timeline-content fw-bolder text-gray-800 ps-3'>
                    SPMKP terbit dengan no: 00284T/119677/2022 tanggal 18
                    September 2022.
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-label fw-bolder text-gray-800 fs-6'>
                    Sep 21, 2022
                  </div>
                  <div className='timeline-badge'>
                    <i className='fa fa-genderless text-danger fs-1' />
                  </div>
                  <div className='timeline-content fw-normal text-muted ps-3'>
                    Proses Penerbitan SPMKP selesai.
                  </div>
                </div>
                <div className='timeline-item'>
                  <div className='timeline-label fw-bolder text-muted fs-8'>
                    On going..
                  </div>
                  <div className='timeline-badge'>
                    <i className='fa fa-genderless text-muted fs-1' />
                  </div>
                  <div className='timeline-content fw-normal text-muted ps-3'>
                    menunggu progress selanjutnya..
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-end flex-column mt-9'>
                <span className='text-muted fs-7'>
                  <em>Last updated at: 21 September 2022, 17:56</em>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-5'>
          <div className='card mb-5 mb-xl-10'>
            <div className='card-header mt-3'>
              <div className='card-title flex-column'>
                <h3 className='fw-bolder mb-2 text-dark'>Profile Details</h3>
              </div>
            </div>
            <div className='card-body ps-9 pe-9'>
              <div className='row mb-6'>
                {/*begin::Label*/}
                <label className='col-lg-4 fw-bold text-muted'>
                  Dokumen Restitusi
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-800'>
                    DBR0011-2022
                  </span>
                </div>
                {/*end::Col*/}
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Jatuh Tempo SKPPKP
                </label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bolder text-gray-800 fs-6 me-2'>
                    25 September 2022
                  </span>
                  <span className='badge badge-light-success'>completed</span>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Jatuh Tempo SKPKPP
                </label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bolder text-muted fs-6 me-2'>
                    ---------------
                  </span>
                  <span className='badge badge-light-danger'></span>
                </div>
              </div>
              <div className='row mb-6'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Jatuh Tempo SPMKP
                </label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bolder text-muted fs-6 me-2'>
                    ---------------
                  </span>
                  <span className='badge badge-light-danger'></span>
                </div>
              </div>
              <div className='row mb-6'>
                {/*begin::Label*/}
                <label className='col-lg-4 fw-bold text-muted'>
                  Nama Wajib Pajak
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-800'>
                    Sulaiman Iskandar Simabua
                  </span>
                </div>
                {/*end::Col*/}
              </div>
              <div className='row mb-6'>
                {/*begin::Label*/}
                <label className='col-lg-4 fw-bold text-muted'>NPWP</label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bolder text-gray-800 fs-6'>
                    718676380-403.000
                  </span>
                </div>
                {/*end::Col*/}
              </div>
              <div className='row mb-6'>
                {/*begin::Label*/}
                <label className='col-lg-4 fw-bold text-muted'>Telepon</label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className='col-lg-8 d-flex align-items-center'>
                  <span className='fw-bolder fs-6 text-gray-800 me-2'>
                    0822 4434 1256
                  </span>
                </div>
                {/*end::Col*/}
              </div>
              <div className='row mb-6'>
                {/*begin::Label*/}
                <label className='col-lg-4 fw-bold text-muted'>
                  Alamat
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title='Country of origination'
                  />
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-gray-800'>
                    Jalan Radio no.5, Medan Helvetia, Medan Petisah, Kota Medan
                  </span>
                </div>
                {/*end::Col*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row gy-5 gx-xl-10'>
        <div className='col-xl-12'>
          <div className='card card-xl-stretch mb-xl-8'>
            <div className='card-header border-0 pt-5'>
              <h3 className='card-title align-items-start flex-column'>
                <span className='card-label fw-bolder fs-3 mb-1'>Files</span>
                <span className='text-muted mt-1 fw-bold fs-7'>
                  Dokumen Restitusi yang telah di upload.
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
                      <th className='p-0 min-w-120px' />
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
                        DOK-SKPPKP
                      </td>
                      <td className='text-end text-muted fw-bold'>
                        ReactJs, HTML
                      </td>
                      <td className='text-end text-muted fw-bold'>
                        4600 Users
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
                    <tr>
                      <td>
                        <img
                          src={pdfSvg}
                          className='h-35px w-35px text-center'
                        />
                      </td>
                      <td className='text-dark fw-bolder mb-1 fs-6'>
                        DOK-SKPPKP
                      </td>
                      <td className='text-end text-muted fw-bold'>
                        ReactJs, HTML
                      </td>
                      <td className='text-end text-muted fw-bold'>
                        4600 Users
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
