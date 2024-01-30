import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

import Dashboard from '../layout/Dashboard';

import avatar from '../assets/blank.png';

const TaskPage = () => {
  const { user } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});

  const modalRef = useRef();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleModalClick);
    return () => {
      document.addEventListener('mousedown', handleModalClick);
    };
    // eslint-disable-next-line
  }, [open]);

  const handleModalClick = (event) => {
    if (open && modalRef.current && !modalRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const taskItems = [
    {
      id: 1,
      berkas: '#DRB11',
      nama: 'PT Alma Nusantara',
      status: 'In Progress',
    },
    {
      id: 2,
      berkas: '#DRB12',
      nama: 'PT Alma Kambinglita',
      status: 'Completed',
    },
    {
      id: 3,
      berkas: '#DRB13',
      nama: 'PT Robocop Corp',
      status: 'Pending',
    },
    {
      id: 4,
      berkas: '#DRB14',
      nama: 'PT Rima Pandega',
      status: 'In Progress',
    },
    {
      id: 5,
      berkas: '#DRB15',
      nama: 'PT Bahaya Nusantara',
      status: 'Completed',
    },
  ];

  return (
    <Dashboard>
      <div className='d-flex flex-column flex-xl-row'>
        {/*begin::Sidebar*/}
        <div className='flex-column flex-lg-row-auto w-100 w-xl-325px mb-10'>
          {/*begin::Card*/}
          <div className='card mb-5 mb-xl-8'>
            {/*begin::Card body*/}
            <div className='card-body pt-15'>
              {/*begin::Summary*/}
              <div className='d-flex flex-center flex-column mb-5'>
                {/*begin::Avatar*/}
                <div className='symbol symbol-150px symbol-circle mb-7'>
                  <img src={avatar} alt='image' />
                </div>
                {/*end::Avatar*/}
                {/*begin::Name*/}
                <a
                  href='#'
                  className='fs-3 text-gray-800 text-hover-primary fw-bold mb-1'
                >
                  {user?.name}
                </a>
                {/*end::Name*/}
                {/*begin::Email*/}
                <a
                  href='#'
                  className='fs-5 fw-semibold text-muted text-hover-primary mb-6'
                >
                  {user?.nip}
                </a>
                {/*end::Email*/}
              </div>
              {/*end::Summary*/}
              {/*begin::Details toggle*/}
              <div className='d-flex flex-stack fs-4 py-3'>
                <div className='fw-bold'>Details</div>
                {/*begin::Badge*/}
                <div className='badge badge-light-danger d-inline'>
                  Penyuluh
                </div>
                {/*begin::Badge*/}
              </div>
              {/*end::Details toggle*/}
              <div className='separator separator-dashed my-3' />
              {/*begin::Details content*/}
              <div className='pb-5 fs-6'>
                {/*begin::Details item*/}
                <div className='fw-bold mt-5'>Jabatan</div>
                <div className='text-gray-600'>Asisten Penyuluh Pajak</div>
                {/*begin::Details item*/}
                {/*begin::Details item*/}
                <div className='fw-bold mt-5'>Email</div>
                <div className='text-gray-600'>
                  <a href='#' className='text-gray-600 text-hover-primary'>
                    achmad.sobari2@pajak.go.id
                  </a>
                </div>
                {/*begin::Details item*/}
                {/*begin::Details item*/}
                <div className='fw-bold mt-5'>Seksi</div>
                <div className='text-gray-600'>Seksi Pelayanan</div>
                {/*begin::Details item*/}
              </div>
              {/*end::Details content*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Card*/}
        </div>
        {/*end::Sidebar*/}
        {/*begin::Content*/}
        <div className='flex-lg-row-fluid ms-lg-15'>
          {/*begin:::Tabs*/}
          <ul
            className='nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8'
            role='tablist'
          >
            {/*begin:::Tab item*/}
            <li className='nav-item' role='presentation'>
              <a
                className='nav-link text-active-primary pb-4 active'
                data-bs-toggle='tab'
                href='#kt_ecommerce_customer_overview'
                aria-selected='true'
                role='tab'
              >
                Overview
              </a>
            </li>
            {/*end:::Tab item*/}
            {/*begin:::Tab item*/}
            <li className='nav-item' role='presentation'>
              <a
                className='nav-link text-active-primary pb-4'
                data-bs-toggle='tab'
                href='#kt_ecommerce_customer_general'
                aria-selected='false'
                tabIndex={-1}
                role='tab'
              >
                General Settings
              </a>
            </li>
            {/*end:::Tab item*/}
            {/*begin:::Tab item*/}
            {/* <li className='nav-item' role='presentation'>
              <a
                className='nav-link text-active-primary pb-4'
                data-bs-toggle='tab'
                href='#kt_ecommerce_customer_advanced'
                aria-selected='false'
                tabIndex={-1}
                role='tab'
              >
                Advanced Settings
              </a>
            </li> */}
            {/*end:::Tab item*/}
          </ul>
          {/*end:::Tabs*/}
          {/*begin:::Tab content*/}
          <div className='tab-content' id='myTabContent'>
            {/*begin:::Tab pane*/}
            <div
              className='tab-pane fade show active'
              id='kt_ecommerce_customer_overview'
              role='tabpanel'
            >
              <div className='row row-cols-1 row-cols-md-2 mb-6 mb-xl-9'>
                <div className='col'>
                  {/*begin::Card*/}
                  <div className='card pt-4 h-md-100 mb-6 mb-md-0'>
                    {/*begin::Card header*/}
                    <div className='card-header border-0'>
                      {/*begin::Card title*/}
                      <div className='card-title'>
                        <h2 className='fw-bold'>Tugas</h2>
                      </div>
                      {/*end::Card title*/}
                    </div>
                    {/*end::Card header*/}
                    {/*begin::Card body*/}
                    <div className='card-body pt-0'>
                      <div className='fw-bold fs-2'>
                        <div className='d-flex'>
                          <div className='ms-2'>
                            17
                            <span className='text-muted fs-4 fw-semibold'>
                              &nbsp;
                            </span>
                          </div>
                        </div>
                        <div className='fs-7 fw-normal text-muted'>
                          Tugas yang telah dikerjakan dalam tahun berjalan
                        </div>
                      </div>
                    </div>
                    {/*end::Card body*/}
                  </div>
                  {/*end::Card*/}
                </div>
                <div className='col'>
                  {/*begin::Reward Tier*/}
                  <a href='#' className='card bg-primary hoverable h-md-100'>
                    {/*begin::Body*/}
                    <div className='card-body'>
                      {/*begin::Svg Icon | path: icons/duotune/general/gen020.svg*/}
                      <span className='svg-icon svg-icon-white svg-icon-3x ms-n1'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M14 18V16H10V18L9 20H15L14 18Z'
                            fill='currentColor'
                          />
                          <path
                            opacity='0.3'
                            d='M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <div className='text-white fw-bold fs-4 mt-5'>
                        Task Management Summary
                      </div>
                      <div className='fw-semibold fs-7 text-white'>
                        untuk Penyuluh dan Asisten Penyuluh Pajak
                      </div>
                    </div>
                    {/*end::Body*/}
                  </a>
                  {/*end::Reward Tier*/}
                </div>
              </div>
              <div className='card pt-4 mb-6 mb-xl-9'>
                <div className='card-header border-0'>
                  <div className='card-title'>
                    <h2>Histori Tugas</h2>
                  </div>
                </div>
                <div className='card-body pt-0 pb-5'>
                  <div
                    id='kt_table_customers_payment_wrapper'
                    className='dataTables_wrapper dt-bootstrap4 no-footer'
                  >
                    <div className='table-responsive'>
                      <table
                        className='table align-middle table-row-dashed gy-5 dataTable no-footer'
                        id='kt_table_customers_payment'
                      >
                        <thead className='border-bottom border-gray-200 fs-7 fw-bold'>
                          <tr className='text-start text-muted text-uppercase gs-0'>
                            <th
                              className='min-w-100px sorting'
                              tabIndex={0}
                              aria-controls='kt_table_customers_payment'
                              rowSpan={1}
                              colSpan={1}
                              aria-label='order No.: activate to sort column ascending'
                            >
                              No. Berkas
                            </th>
                            <th
                              className='sorting'
                              tabIndex={0}
                              aria-controls='kt_table_customers_payment'
                              rowSpan={1}
                              colSpan={1}
                              aria-label='Status: activate to sort column ascending'
                            >
                              Nama WP
                            </th>

                            <th
                              className='min-w-100px sorting'
                              tabIndex={0}
                              aria-controls='kt_table_customers_payment'
                              rowSpan={1}
                              colSpan={1}
                              aria-label='Rewards: activate to sort column ascending'
                            >
                              Status
                            </th>
                            <th
                              className='min-w-100px sorting_disabled text-center'
                              rowSpan={1}
                              colSpan={1}
                              aria-label='Date'
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className='fs-6 fw-semibold text-gray-600'>
                          {taskItems.map((item) => (
                            <tr key={item.id}>
                              <td>
                                <Link
                                  to={`/restitusi/${item.id}`}
                                  className='text-gray-600 text-hover-primary mb-1'
                                >
                                  {item.berkas}
                                </Link>
                              </td>
                              <td>{item.nama}</td>
                              <td>
                                {item.status == 'Completed' ? (
                                  <span className='badge badge-light-success'>
                                    {item.status}
                                  </span>
                                ) : item.status == 'In Progress' ? (
                                  <span className='badge badge-light-warning'>
                                    {item.status}
                                  </span>
                                ) : (
                                  <span className='badge badge-light-danger'>
                                    {item.status}
                                  </span>
                                )}
                              </td>
                              <td className='text-center'>
                                <Link
                                  to={`/restitusi/${item.id}`}
                                  className='btn btn-icon btn-light btn-sm border-0 me-1'
                                >
                                  <span className='svg-icon svg-icon-2 svg-icon-primary'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                    >
                                      <rect
                                        opacity='0.5'
                                        x={18}
                                        y={13}
                                        width={13}
                                        height={2}
                                        rx={1}
                                        transform='rotate(-180 18 13)'
                                        fill='black'
                                      />
                                      <path
                                        d='M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z'
                                        fill='black'
                                      />
                                    </svg>
                                  </span>
                                </Link>
                                <Link
                                  to='#'
                                  className='btn btn-icon btn-light btn-sm border-0 me-1'
                                  data-bs-target='#kt_modal_new_address'
                                  onClick={() => setOpen(!open)}
                                >
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
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className='row'>
                      <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start' />
                      <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
                        <div
                          className='dataTables_paginate paging_simple_numbers'
                          id='kt_table_customers_payment_paginate'
                        >
                          <ul className='pagination'>
                            <li
                              className='paginate_button page-item previous disabled'
                              id='kt_table_customers_payment_previous'
                            >
                              <a
                                href='#'
                                aria-controls='kt_table_customers_payment'
                                data-dt-idx={0}
                                tabIndex={0}
                                className='page-link'
                              >
                                <i className='previous' />
                              </a>
                            </li>
                            <li className='paginate_button page-item active'>
                              <a
                                href='#'
                                aria-controls='kt_table_customers_payment'
                                data-dt-idx={1}
                                tabIndex={0}
                                className='page-link'
                              >
                                1
                              </a>
                            </li>
                            <li className='paginate_button page-item '>
                              <a
                                href='#'
                                aria-controls='kt_table_customers_payment'
                                data-dt-idx={2}
                                tabIndex={0}
                                className='page-link'
                              >
                                2
                              </a>
                            </li>
                            <li
                              className='paginate_button page-item next'
                              id='kt_table_customers_payment_next'
                            >
                              <a
                                href='#'
                                aria-controls='kt_table_customers_payment'
                                data-dt-idx={3}
                                tabIndex={0}
                                className='page-link'
                              >
                                <i className='next' />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end::Table*/}
                </div>
                {/*end::Card body*/}
              </div>
              {/*end::Card*/}
            </div>
            {/*end:::Tab pane*/}
            {/*begin:::Tab pane*/}
            <div
              className='tab-pane fade'
              id='kt_ecommerce_customer_general'
              role='tabpanel'
            ></div>
            {/*end:::Tab pane*/}
          </div>
          {/*end:::Tab content*/}
        </div>
        {/*end::Content*/}
      </div>
      <div>
        {open && (
          <div
            className='modal fade show menu-dropdown'
            id='kt_modal_new_address'
            tabIndex={-1}
            style={{
              display: 'block',
              backgroundColor: '#ffff',
              backgroundColor: 'rgb(10 11 22 / 32%)',
            }}
            aria-modal='true'
            role='dialog'
          >
            {/*begin::Modal dialog*/}
            <div
              ref={modalRef}
              className='modal-dialog modal-dialog-centered mw-650px'
              data-select2-id='select2-data-299-qyxg'
            >
              {/*begin::Modal content*/}
              <div className='modal-content'>
                {/*begin::Form*/}
                <form
                  className='form fv-plugins-bootstrap5 fv-plugins-framework'
                  action='#'
                  id='kt_modal_new_address_form'
                >
                  {/*begin::Modal header*/}
                  <div
                    className='modal-header'
                    id='kt_modal_new_address_header'
                  >
                    {/*begin::Modal title*/}
                    <h2>Penutupan Restitusi</h2>
                    {/*end::Modal title*/}
                    {/*begin::Close*/}
                    <div
                      className='btn btn-sm btn-icon btn-active-color-primary'
                      data-bs-dismiss='modal'
                      onClick={() => setOpen(false)}
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                      <span className='svg-icon svg-icon-1'>
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
                            y='17.3137'
                            width={16}
                            height={2}
                            rx={1}
                            transform='rotate(-45 6 17.3137)'
                            fill='black'
                          />
                          <rect
                            x='7.41422'
                            y={6}
                            width={16}
                            height={2}
                            rx={1}
                            transform='rotate(45 7.41422 6)'
                            fill='black'
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </div>
                    {/*end::Close*/}
                  </div>
                  {/*end::Modal header*/}
                  {/*begin::Modal body*/}
                  <div className='modal-body py-10 px-lg-17'>
                    {/*begin::Scroll*/}
                    <div
                      className='scroll-y me-n7 pe-7'
                      id='kt_modal_new_address_scroll'
                      data-kt-scroll='true'
                      data-kt-scroll-activate='{default: false, lg: true}'
                      data-kt-scroll-max-height='auto'
                      data-kt-scroll-dependencies='#kt_modal_new_address_header'
                      data-kt-scroll-wrappers='#kt_modal_new_address_scroll'
                      data-kt-scroll-offset='300px'
                      style={{ maxHeight: 400 }}
                      data-select2-id='select2-data-kt_modal_new_address_scroll'
                    >
                      {/*begin::Notice*/}
                      {/*begin::Notice*/}
                      <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6'>
                        {/*begin::Icon*/}
                        {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                        <span className='svg-icon svg-icon-2tx svg-icon-warning me-4'>
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
                        {/*end::Svg Icon*/}
                        {/*end::Icon*/}
                        {/*begin::Wrapper*/}
                        <div className='d-flex flex-stack flex-grow-1'>
                          {/*begin::Content*/}
                          <div className='fw-bold'>
                            <h4 className='text-gray-900 fw-bolder'>
                              Peringatan
                            </h4>
                            <div className='fs-6 text-gray-700'>
                              Menetapkan pembetulan pada case management
                              restitusi yang berjalan akan membuat status
                              restitusi lama selesai dan membuat &nbsp;
                              <a href='#'>Restitusi baru.</a>
                            </div>
                          </div>
                          {/*end::Content*/}
                        </div>
                        {/*end::Wrapper*/}
                      </div>
                      {/*end::Notice*/}
                      {/*end::Notice*/}
                      {/*begin::Input group*/}
                      <div className='row mb-5'>
                        {/*begin::Col*/}
                        <div className='col-md-6 fv-row fv-plugins-icon-container'>
                          {/*begin::Label*/}
                          <label className='required fs-5 fw-bold mb-2'>
                            First name
                          </label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <input
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='nomor_dokumen'
                            onChange={onChange}
                          />
                          {/*end::Input*/}
                          <div className='fv-plugins-message-container invalid-feedback' />
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                        <div className='col-md-6 fv-row fv-plugins-icon-container'>
                          {/*end::Label*/}
                          <label className='required fs-5 fw-bold mb-2'>
                            Last name
                          </label>
                          {/*end::Label*/}
                          {/*end::Input*/}
                          <input
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='user_id'
                            onChange={onChange}
                          />
                          {/*end::Input*/}
                          <div className='fv-plugins-message-container invalid-feedback' />
                        </div>
                        {/*end::Col*/}
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div
                        className='d-flex flex-column mb-5 fv-row fv-plugins-icon-container'
                        data-select2-id='select2-data-298-jdrc'
                      >
                        {/*begin::Label*/}
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Country</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title=''
                            data-bs-original-title='Your payment statements may very based on selected country'
                            aria-label='Your payment statements may very based on selected country'
                          />
                        </label>
                        {/*end::Label*/}
                        {/*begin::Select*/}
                        <select
                          name='berkas'
                          onChange={onChange}
                          data-control='select2'
                          data-dropdown-parent='#kt_modal_new_address'
                          data-placeholder='Select a Country...'
                          className='form-select form-select-solid select2-hidden-accessible'
                          tabIndex={-1}
                          aria-hidden='true'
                          data-select2-id='select2-data-294-0v33'
                        >
                          <option
                            value=''
                            data-select2-id='select2-data-296-jylr'
                          >
                            Select a Country...
                          </option>
                          <option
                            value='AS'
                            data-select2-id='select2-data-305-dv46'
                          >
                            American Samoa
                          </option>
                          <option
                            value='AD'
                            data-select2-id='select2-data-306-1n1y'
                          >
                            Andorra
                          </option>
                          <option
                            value='AO'
                            data-select2-id='select2-data-307-7syj'
                          >
                            Angola
                          </option>
                        </select>
                        <span
                          className='select2 select2-container select2-container--bootstrap5 select2-container--open select2-container--open select2-container--focus'
                          dir='ltr'
                          data-select2-id='select2-data-295-wdcm'
                          style={{ width: '100%' }}
                        >
                          <span className='selection'>
                            <span
                              className='select2-selection select2-selection--single form-select form-select-solid'
                              role='combobox'
                              aria-haspopup='true'
                              aria-expanded='false'
                              tabIndex={0}
                              aria-disabled='false'
                              aria-labelledby='select2-country-tk-container'
                              aria-controls='select2-country-tk-container'
                            >
                              <span
                                className='select2-selection__rendered'
                                id='select2-country-tk-container'
                                role='textbox'
                                aria-readonly='true'
                                title='Select a Country...'
                              >
                                <span className='select2-selection__placeholder'>
                                  Select a Country...
                                </span>
                              </span>
                              <span
                                className='select2-selection__arrow'
                                role='presentation'
                              >
                                <b role='presentation' />
                              </span>
                            </span>
                          </span>
                          <span
                            className='dropdown-wrapper'
                            aria-hidden='true'
                          />
                        </span>
                        {/*end::Select*/}
                        <div className='fv-plugins-message-container invalid-feedback' />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className='d-flex flex-column mb-5 fv-row fv-plugins-icon-container'>
                        {/*begin::Label*/}
                        <label className='required fs-5 fw-bold mb-2'>
                          Address Line 1
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <input
                          className='form-control form-control-solid'
                          placeholder=''
                          name='address1'
                        />
                        {/*end::Input*/}
                        <div className='fv-plugins-message-container invalid-feedback' />
                      </div>
                      {/*end::Input group*/}
                      {/*begin::Input group*/}
                      <div className='fv-row mb-5'>
                        {/*begin::Wrapper*/}
                        <div className='d-flex flex-stack'>
                          {/*begin::Label*/}
                          <div className='me-5'>
                            {/*begin::Label*/}
                            <label className='fs-5 fw-bold'>
                              Use as a billing adderess?
                            </label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <div className='fs-7 fw-bold text-muted'>
                              If you need more info, please check budget
                              planning
                            </div>
                            {/*end::Input*/}
                          </div>
                          {/*end::Label*/}
                          {/*begin::Switch*/}
                          <label className='form-check form-switch form-check-custom form-check-solid'>
                            {/*begin::Input*/}
                            <input
                              className='form-check-input'
                              name='billing'
                              type='checkbox'
                              defaultValue={1}
                              defaultChecked='checked'
                            />
                            {/*end::Input*/}
                            {/*begin::Label*/}
                            <span className='form-check-label fw-bold text-muted'>
                              Yes
                            </span>
                            {/*end::Label*/}
                          </label>
                          {/*end::Switch*/}
                        </div>
                        {/*begin::Wrapper*/}
                      </div>
                      {/*end::Input group*/}
                    </div>
                    {/*end::Scroll*/}
                  </div>
                  {/*end::Modal body*/}
                  {/*begin::Modal footer*/}
                  <div className='modal-footer flex-center'>
                    {/*begin::Button*/}
                    <button
                      type='reset'
                      onClick={() => setOpen(false)}
                      id='kt_modal_new_address_cancel'
                      className='btn btn-light me-3'
                    >
                      Cancel
                    </button>
                    {/*end::Button*/}
                    {/*begin::Button*/}
                    <button
                      type='submit'
                      id='kt_modal_new_address_submit'
                      className='btn btn-primary'
                    >
                      <span className='indicator-label'>Submit</span>
                      <span className='indicator-progress'>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2' />
                      </span>
                    </button>
                    {/*end::Button*/}
                  </div>
                  {/*end::Modal footer*/}
                  <div />
                </form>
                {/*end::Form*/}
              </div>
            </div>
          </div>
        )}
      </div>
    </Dashboard>
  );
};

export default TaskPage;
