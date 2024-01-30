import Dashboard from '../layout/Dashboard';

const UserPage = () => {
  return (
    <Dashboard  
      Desc={'halaman ringkasan semua dokumen pengujian yang telah di arsipkan dan di input.'}
      headerTitle={'Daftar Dokumen Pengujian'} 
    >
      {/*begin::Card*/}
      <div
        className='card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10'
        style={{
          backgroundSize: 'auto calc(100% + 10rem)',
          backgroundPositionX: '100%',
          backgroundImage:
            'url("/metronic8/demo1/assets/media/illustrations/sketchy-1/4.png")',
        }}
      >
        {/*begin::Card header*/}
        <div className='card-header pt-10'>
          <div className='d-flex align-items-center'>
            {/*begin::Icon*/}
            <div className='symbol symbol-circle me-5'>
              <div className='symbol-label bg-transparent text-primary border border-secondary border-dashed'>
                {/*begin::Svg Icon | path: icons/duotune/abstract/abs020.svg*/}
                <span className='svg-icon svg-icon-2x svg-icon-primary'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.302 11.35L12.002 20.55H21.202C21.802 20.55 22.202 19.85 21.902 19.35L17.302 11.35Z'
                      fill='currentColor'
                    />
                    <path
                      opacity='0.3'
                      d='M12.002 20.55H2.802C2.202 20.55 1.80202 19.85 2.10202 19.35L6.70203 11.45L12.002 20.55ZM11.302 3.45L6.70203 11.35H17.302L12.702 3.45C12.402 2.85 11.602 2.85 11.302 3.45Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </div>
            </div>
            {/*end::Icon*/}
            {/*begin::Title*/}
            <div className='d-flex flex-column'>
              <h2 className='mb-1'>File Manager</h2>
              <div className='text-muted fw-bold'>
                <a href='#'>...</a>
                <span className='mx-3'>|</span>
                <a href='#'>File Manager</a>
                <span className='mx-3'>|</span>2.6 GB
                <span className='mx-3'>|</span>758 items
              </div>
            </div>
            {/*end::Title*/}
          </div>
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
        <div className='card-body pb-0'>
          {/*begin::Navs*/}
          <div className='d-flex overflow-auto h-30px'>
          </div>
          {/*begin::Navs*/}
        </div>
        {/*end::Card body*/}
      </div>
      {/*end::Card*/}
      {/*begin::Card*/}
      <div className='card card-flush'>
        {/*begin::Card header*/}
        <div className='card-header pt-8'>
          <div className='card-title'>
            {/* begin::Search*/}
            <div className='d-flex align-items-center position-relative my-1'>
              {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
              {/* <span className='svg-icon svg-icon-1 position-absolute ms-6'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    opacity='0.5'
                    x='17.0365'
                    y='15.1223'
                    width='8.15546'
                    height={2}
                    rx={1}
                    transform='rotate(45 17.0365 15.1223)'
                    fill='currentColor'
                  />
                  <path
                    d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                    fill='currentColor'
                  />
                </svg>
              </span> */}
              {/*end::Svg Icon*/}
              <div className='badge badge-lg badge-primary'>
              <span id='kt_file_manager_items_counter'>66 items</span>
            </div>
            </div>
            {/*end::Search */}
          </div>
          {/*begin::Card toolbar*/}
          <div className='card-toolbar'>
            {/*begin::Toolbar*/}
            <div
              className='d-flex justify-content-end'
              data-kt-filemanager-table-toolbar='base'
            >
              {/*begin::Add customer*/}
              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_upload'
              >
                {/*begin::Svg Icon | path: icons/duotune/files/fil018.svg*/}
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
                      d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                      fill='currentColor'
                    />
                    <path
                      d='M10.4 3.60001L12 6H21C21.6 6 22 6.4 22 7V19C22 19.6 21.6 20 21 20H3C2.4 20 2 19.6 2 19V4C2 3.4 2.4 3 3 3H9.20001C9.70001 3 10.2 3.20001 10.4 3.60001ZM16 11.6L12.7 8.29999C12.3 7.89999 11.7 7.89999 11.3 8.29999L8 11.6H11V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V11.6H16Z'
                      fill='currentColor'
                    />
                    <path
                      opacity='0.3'
                      d='M11 11.6V17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17V11.6H11Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}Tambah Data
              </button>
              {/*end::Add customer*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Group actions*/}
            <div
              className='d-flex justify-content-end align-items-center d-none'
              data-kt-filemanager-table-toolbar='selected'
            >
              <div className='fw-bold me-5'>
                <span
                  className='me-2'
                  data-kt-filemanager-table-select='selected_count'
                />
                Selected
              </div>
              <button
                type='button'
                className='btn btn-danger'
                data-kt-filemanager-table-select='delete_selected'
              >
                Delete Selected
              </button>
            </div>
            {/*end::Group actions*/}
          </div>
          {/*end::Card toolbar*/}
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
        <div className='card-body'>
          {/*begin::Table*/}
          <div
            id='kt_file_manager_list_wrapper'
            className='dataTables_wrapper dt-bootstrap4 no-footer'
          >
            <div className='table-responsive'>
              <table
                id='kt_file_manager_list'
                data-kt-filemanager-table='files'
                className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
              >
                {/*begin::Table head*/}
                <thead>
                  {/*begin::Table row*/}
                  <tr className='text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0'>
                    <th
                      className='w-10px pe-2 sorting_disabled'
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '29.8984px' }}
                    >
                      <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          data-kt-check='true'
                          data-kt-check-target='#kt_file_manager_list .form-check-input'
                          defaultValue={1}
                        />
                      </div>
                    </th>
                    <th
                      className='min-w-250px sorting_disabled'
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '445.938px' }}
                    >
                      Name
                    </th>
                    <th
                      className='min-w-10px sorting_disabled'
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '98.7578px' }}
                    >
                      Size
                    </th>
                    <th
                      className='min-w-125px sorting_disabled'
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: '282.156px' }}
                    >
                      Last Modified
                    </th>
                    <th
                      className='w-125px sorting_disabled'
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: 125 }}
                    />
                  </tr>
                  {/*end::Table row*/}
                </thead>
                {/*end::Table head*/}
                {/*begin::Table body*/}
                <tbody className='fw-semibold text-gray-600'>
                  <tr className='odd'>
                    {/*begin::Checkbox*/}
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    {/*end::Checkbox*/}
                    {/*begin::Name=*/}
                    <td>
                      <div className='d-flex align-items-center'>
                        {/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
                        <span className='svg-icon svg-icon-2x svg-icon-primary me-4'>
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              opacity='0.3'
                              d='M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z'
                              fill='currentColor'
                            />
                            <path
                              d='M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z'
                              fill='currentColor'
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <a
                          href='#'
                          className='text-gray-800 text-hover-primary'
                        >
                          dokumen-pengujian-aplikasi-sidjpnine-eksten.pdf
                        </a>
                      </div>
                    </td>
                    {/*end::Name=*/}
                    {/*begin::Size*/}
                    <td>489 KB</td>
                    {/*end::Size*/}
                    {/*begin::Last modified*/}
                    <td data-order='2022-02-21T11:30:00+07:00'>
                      21 Feb 2022, 11:30 am
                    </td>
                    {/*end::Last modified*/}
                    {/*begin::Actions*/}
                    <td
                      className='text-end'
                      data-kt-filemanager-table='action_dropdown'
                    >
                      <div className='d-flex justify-content-end'>
                        {/*begin::Share link*/}
                        <div
                          className='ms-2'
                          data-kt-filemanger-table='copy_link'
                        >
                          <button
                            type='button'
                            className='btn btn-sm btn-icon btn-light btn-active-light-primary'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
                            <span className='svg-icon svg-icon-5 m-0'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z'
                                  fill='currentColor'
                                />
                                <path
                                  d='M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z'
                                  fill='currentColor'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu*/}
                          <div
                            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px'
                            data-kt-menu='true'
                          >
                            {/*begin::Card*/}
                            <div className='card card-flush'>
                              <div className='card-body p-5'>
                                {/*begin::Loader*/}
                                <div
                                  className='d-flex'
                                  data-kt-filemanger-table='copy_link_generator'
                                >
                                  {/*begin::Spinner*/}
                                  <div className='me-5' data-kt-indicator='on'>
                                    <span className='indicator-progress'>
                                      <span className='spinner-border spinner-border-sm align-middle ms-2' />
                                    </span>
                                  </div>
                                  {/*end::Spinner*/}
                                  {/*begin::Label*/}
                                  <div className='fs-6 text-dark'>
                                    Generating Share Link...
                                  </div>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Loader*/}
                                {/*begin::Link*/}
                                <div
                                  className='d-flex flex-column text-start d-none'
                                  data-kt-filemanger-table='copy_link_result'
                                >
                                  <div className='d-flex mb-3'>
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
                                    <span className='svg-icon svg-icon-2 svg-icon-success me-3'>
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z'
                                          fill='currentColor'
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    <div className='fs-6 text-dark'>
                                      Share Link Generated
                                    </div>
                                  </div>
                                  <input
                                    type='text'
                                    className='form-control form-control-sm'
                                    defaultValue='https://path/to/file/or/folder/'
                                  />
                                  <div className='text-muted fw-normal mt-2 fs-8 px-3'>
                                    Read only.
                                    <a
                                      href='/metronic8/demo1/../demo1/apps/file-manager/settings/.html'
                                      className='ms-2'
                                    >
                                      Change permissions
                                    </a>
                                  </div>
                                </div>
                                {/*end::Link*/}
                              </div>
                            </div>
                            {/*end::Card*/}
                          </div>
                          {/*end::Menu*/}
                        </div>
                        {/*end::Share link*/}
                        {/*begin::More*/}
                        <div className='ms-2'>
                          <button
                            type='button'
                            className='btn btn-sm btn-icon btn-light btn-active-light-primary'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
                            <span className='svg-icon svg-icon-5 m-0'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <rect
                                  x={10}
                                  y={10}
                                  width={4}
                                  height={4}
                                  rx={2}
                                  fill='currentColor'
                                />
                                <rect
                                  x={17}
                                  y={10}
                                  width={4}
                                  height={4}
                                  rx={2}
                                  fill='currentColor'
                                />
                                <rect
                                  x={3}
                                  y={10}
                                  width={4}
                                  height={4}
                                  rx={2}
                                  fill='currentColor'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu*/}
                          <div
                            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4'
                            data-kt-menu='true'
                          >
                            {/*begin::Menu item*/}
                            <div className='menu-item px-3'>
                              <a href='#' className='menu-link px-3'>
                                Download File
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link px-3'
                                data-kt-filemanager-table='rename'
                              >
                                Rename
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link px-3'
                                data-kt-filemanager-table-filter='move_row'
                                data-bs-toggle='modal'
                                data-bs-target='#kt_modal_move_to_folder'
                              >
                                Move to folder
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link text-danger px-3'
                                data-kt-filemanager-table-filter='delete_row'
                              >
                                Delete
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu*/}
                        </div>
                        {/*end::More*/}
                      </div>
                    </td>
                    {/*end::Actions*/}
                  </tr>
                  <tr className='even'>
                    {/*begin::Checkbox*/}
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          defaultValue={1}
                        />
                      </div>
                    </td>
                    {/*end::Checkbox*/}
                    {/*begin::Name=*/}
                    <td>
                      <div className='d-flex align-items-center'>
                        {/*begin::Svg Icon | path: icons/duotune/files/fil003.svg*/}
                        <span className='svg-icon svg-icon-2x svg-icon-primary me-4'>
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              opacity='0.3'
                              d='M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z'
                              fill='currentColor'
                            />
                            <path
                              d='M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z'
                              fill='currentColor'
                            />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                        <a
                          href='#'
                          className='text-gray-800 text-hover-primary'
                        >
                          dokumen-pengujian-aplikasi-ectag.pdf
                        </a>
                      </div>
                    </td>
                    {/*end::Name=*/}
                    {/*begin::Size*/}
                    <td>554 KB</td>
                    {/*end::Size*/}
                    {/*begin::Last modified*/}
                    <td data-order='2022-09-22T20:43:00+07:00'>
                      22 Sep 2022, 8:43 pm
                    </td>
                    {/*end::Last modified*/}
                    {/*begin::Actions*/}
                    <td
                      className='text-end'
                      data-kt-filemanager-table='action_dropdown'
                    >
                      <div className='d-flex justify-content-end'>
                        {/*begin::Share link*/}
                        <div
                          className='ms-2'
                          data-kt-filemanger-table='copy_link'
                        >
                          <button
                            type='button'
                            className='btn btn-sm btn-icon btn-light btn-active-light-primary'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
                            <span className='svg-icon svg-icon-5 m-0'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z'
                                  fill='currentColor'
                                />
                                <path
                                  d='M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z'
                                  fill='currentColor'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu*/}
                          <div
                            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px'
                            data-kt-menu='true'
                          >
                            {/*begin::Card*/}
                            <div className='card card-flush'>
                              <div className='card-body p-5'>
                                {/*begin::Loader*/}
                                <div
                                  className='d-flex'
                                  data-kt-filemanger-table='copy_link_generator'
                                >
                                  {/*begin::Spinner*/}
                                  <div className='me-5' data-kt-indicator='on'>
                                    <span className='indicator-progress'>
                                      <span className='spinner-border spinner-border-sm align-middle ms-2' />
                                    </span>
                                  </div>
                                  {/*end::Spinner*/}
                                  {/*begin::Label*/}
                                  <div className='fs-6 text-dark'>
                                    Generating Share Link...
                                  </div>
                                  {/*end::Label*/}
                                </div>
                                {/*end::Loader*/}
                                {/*begin::Link*/}
                                <div
                                  className='d-flex flex-column text-start d-none'
                                  data-kt-filemanger-table='copy_link_result'
                                >
                                  <div className='d-flex mb-3'>
                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
                                    <span className='svg-icon svg-icon-2 svg-icon-success me-3'>
                                      <svg
                                        width={24}
                                        height={24}
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z'
                                          fill='currentColor'
                                        />
                                      </svg>
                                    </span>
                                    {/*end::Svg Icon*/}
                                    <div className='fs-6 text-dark'>
                                      Share Link Generated
                                    </div>
                                  </div>
                                  <input
                                    type='text'
                                    className='form-control form-control-sm'
                                    defaultValue='https://path/to/file/or/folder/'
                                  />
                                  <div className='text-muted fw-normal mt-2 fs-8 px-3'>
                                    Read only.
                                    <a
                                      href='/metronic8/demo1/../demo1/apps/file-manager/settings/.html'
                                      className='ms-2'
                                    >
                                      Change permissions
                                    </a>
                                  </div>
                                </div>
                                {/*end::Link*/}
                              </div>
                            </div>
                            {/*end::Card*/}
                          </div>
                          {/*end::Menu*/}
                        </div>
                        {/*end::Share link*/}
                        {/*begin::More*/}
                        <div className='ms-2'>
                          <button
                            type='button'
                            className='btn btn-sm btn-icon btn-light btn-active-light-primary'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                          >
                            {/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
                            <span className='svg-icon svg-icon-5 m-0'>
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <rect
                                  x={10}
                                  y={10}
                                  width={4}
                                  height={4}
                                  rx={2}
                                  fill='currentColor'
                                />
                                <rect
                                  x={17}
                                  y={10}
                                  width={4}
                                  height={4}
                                  rx={2}
                                  fill='currentColor'
                                />
                                <rect
                                  x={3}
                                  y={10}
                                  width={4}
                                  height={4}
                                  rx={2}
                                  fill='currentColor'
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </button>
                          {/*begin::Menu*/}
                          <div
                            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4'
                            data-kt-menu='true'
                          >
                            {/*begin::Menu item*/}
                            <div className='menu-item px-3'>
                              <a href='#' className='menu-link px-3'>
                                Download File
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link px-3'
                                data-kt-filemanager-table='rename'
                              >
                                Rename
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link px-3'
                                data-kt-filemanager-table-filter='move_row'
                                data-bs-toggle='modal'
                                data-bs-target='#kt_modal_move_to_folder'
                              >
                                Move to folder
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className='menu-item px-3'>
                              <a
                                href='#'
                                className='menu-link text-danger px-3'
                                data-kt-filemanager-table-filter='delete_row'
                              >
                                Delete
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu*/}
                        </div>
                        {/*end::More*/}
                      </div>
                    </td>
                    {/*end::Actions*/}
                  </tr>
                </tbody>
                {/*end::Table body*/}
              </table>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start' />
              <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
                <div
                  className='dataTables_paginate paging_simple_numbers'
                  id='kt_file_manager_list_paginate'
                >
                  <ul className='pagination'>
                    <li
                      className='paginate_button page-item previous disabled'
                      id='kt_file_manager_list_previous'
                    >
                      <a
                        href='#'
                        aria-controls='kt_file_manager_list'
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
                        aria-controls='kt_file_manager_list'
                        data-dt-idx={1}
                        tabIndex={0}
                        className='page-link'
                      >
                        1
                      </a>
                    </li>
                    <li
                      className='paginate_button page-item next'
                      id='kt_file_manager_list_next'
                    >
                      <a
                        href='#'
                        aria-controls='kt_file_manager_list'
                        data-dt-idx={8}
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
      {/*begin::Upload template*/}
      <table className='d-none'>
        <tbody>
          <tr
            id='kt_file_manager_new_folder_row'
            data-kt-filemanager-template='upload'
          >
            <td />
            <td id='kt_file_manager_add_folder_form' className='fv-row'>
              <div className='d-flex align-items-center'>
                {/*begin::Folder icon*/}
                {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                <span className='svg-icon svg-icon-2x svg-icon-primary me-4'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.3'
                      d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                      fill='currentColor'
                    />
                    <path
                      d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Folder icon*/}
                {/*begin:Input*/}
                <input
                  type='text'
                  name='new_folder_name'
                  placeholder='Enter the folder name'
                  className='form-control mw-250px me-3'
                />
                {/*end:Input*/}
                {/*begin:Submit button*/}
                <button
                  className='btn btn-icon btn-light-primary me-3'
                  id='kt_file_manager_add_folder'
                >
                  <span className='indicator-label'>
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
                    <span className='svg-icon svg-icon-1'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className='indicator-progress'>
                    <span className='spinner-border spinner-border-sm align-middle' />
                  </span>
                </button>
                {/*end:Submit button*/}
                {/*begin:Cancel button*/}
                <button
                  className='btn btn-icon btn-light-danger'
                  id='kt_file_manager_cancel_folder'
                >
                  <span className='indicator-label'>
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
                    <span className='svg-icon svg-icon-1'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          opacity='0.5'
                          x='7.05025'
                          y='15.5356'
                          width={12}
                          height={2}
                          rx={1}
                          transform='rotate(-45 7.05025 15.5356)'
                          fill='currentColor'
                        />
                        <rect
                          x='8.46447'
                          y='7.05029'
                          width={12}
                          height={2}
                          rx={1}
                          transform='rotate(45 8.46447 7.05029)'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </span>
                  <span className='indicator-progress'>
                    <span className='spinner-border spinner-border-sm align-middle' />
                  </span>
                </button>
                {/*end:Cancel button*/}
              </div>
            </td>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>
      {/*end::Upload template*/}
      {/*begin::Rename template*/}
      <div className='d-none' data-kt-filemanager-template='rename'>
        <div className='fv-row'>
          <div className='d-flex align-items-center'>
            <span id='kt_file_manager_rename_folder_icon' />
            <input
              type='text'
              id='kt_file_manager_rename_input'
              name='rename_folder_name'
              placeholder='Enter the new folder name'
              className='form-control mw-250px me-3'
              defaultValue=''
            />
            <button
              className='btn btn-icon btn-light-primary me-3'
              id='kt_file_manager_rename_folder'
            >
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
              <span className='svg-icon svg-icon-1'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </button>
            <button
              className='btn btn-icon btn-light-danger'
              id='kt_file_manager_rename_folder_cancel'
            >
              <span className='indicator-label'>
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
                <span className='svg-icon svg-icon-1'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      opacity='0.5'
                      x='7.05025'
                      y='15.5356'
                      width={12}
                      height={2}
                      rx={1}
                      transform='rotate(-45 7.05025 15.5356)'
                      fill='currentColor'
                    />
                    <rect
                      x='8.46447'
                      y='7.05029'
                      width={12}
                      height={2}
                      rx={1}
                      transform='rotate(45 8.46447 7.05029)'
                      fill='currentColor'
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </span>
              <span className='indicator-progress'>
                <span className='spinner-border spinner-border-sm align-middle' />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/*end::Rename template*/}
      {/*begin::Action template*/}
      <div className='d-none' data-kt-filemanager-template='action'>
        <div className='d-flex justify-content-end'>
          {/*begin::Share link*/}
          <div className='ms-2' data-kt-filemanger-table='copy_link'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-light btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
            >
              {/*begin::Svg Icon | path: icons/duotune/coding/cod007.svg*/}
              <span className='svg-icon svg-icon-5 m-0'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.3'
                    d='M18.4 5.59998C18.7766 5.9772 18.9881 6.48846 18.9881 7.02148C18.9881 7.55451 18.7766 8.06577 18.4 8.44299L14.843 12C14.466 12.377 13.9547 12.5887 13.4215 12.5887C12.8883 12.5887 12.377 12.377 12 12C11.623 11.623 11.4112 11.1117 11.4112 10.5785C11.4112 10.0453 11.623 9.53399 12 9.15698L15.553 5.604C15.9302 5.22741 16.4415 5.01587 16.9745 5.01587C17.5075 5.01587 18.0188 5.22741 18.396 5.604L18.4 5.59998ZM20.528 3.47205C20.0614 3.00535 19.5074 2.63503 18.8977 2.38245C18.288 2.12987 17.6344 1.99988 16.9745 1.99988C16.3145 1.99988 15.661 2.12987 15.0513 2.38245C14.4416 2.63503 13.8876 3.00535 13.421 3.47205L9.86801 7.02502C9.40136 7.49168 9.03118 8.04568 8.77863 8.6554C8.52608 9.26511 8.39609 9.91855 8.39609 10.5785C8.39609 11.2384 8.52608 11.8919 8.77863 12.5016C9.03118 13.1113 9.40136 13.6653 9.86801 14.132C10.3347 14.5986 10.8886 14.9688 11.4984 15.2213C12.1081 15.4739 12.7616 15.6039 13.4215 15.6039C14.0815 15.6039 14.7349 15.4739 15.3446 15.2213C15.9543 14.9688 16.5084 14.5986 16.975 14.132L20.528 10.579C20.9947 10.1124 21.3649 9.55844 21.6175 8.94873C21.8701 8.33902 22.0001 7.68547 22.0001 7.02551C22.0001 6.36555 21.8701 5.71201 21.6175 5.10229C21.3649 4.49258 20.9947 3.93867 20.528 3.47205Z'
                    fill='currentColor'
                  />
                  <path
                    d='M14.132 9.86804C13.6421 9.37931 13.0561 8.99749 12.411 8.74695L12 9.15698C11.6234 9.53421 11.4119 10.0455 11.4119 10.5785C11.4119 11.1115 11.6234 11.6228 12 12C12.3766 12.3772 12.5881 12.8885 12.5881 13.4215C12.5881 13.9545 12.3766 14.4658 12 14.843L8.44699 18.396C8.06999 18.773 7.55868 18.9849 7.02551 18.9849C6.49235 18.9849 5.98101 18.773 5.604 18.396C5.227 18.019 5.0152 17.5077 5.0152 16.9745C5.0152 16.4413 5.227 15.93 5.604 15.553L8.74701 12.411C8.28705 11.233 8.28705 9.92498 8.74701 8.74695C8.10159 8.99737 7.5152 9.37919 7.02499 9.86804L3.47198 13.421C2.52954 14.3635 2.00009 15.6417 2.00009 16.9745C2.00009 18.3073 2.52957 19.5855 3.47202 20.528C4.41446 21.4704 5.69269 21.9999 7.02551 21.9999C8.35833 21.9999 9.63656 21.4704 10.579 20.528L14.132 16.975C14.5987 16.5084 14.9689 15.9544 15.2215 15.3447C15.4741 14.735 15.6041 14.0815 15.6041 13.4215C15.6041 12.7615 15.4741 12.108 15.2215 11.4983C14.9689 10.8886 14.5987 10.3347 14.132 9.86804Z'
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </button>
            {/*begin::Menu*/}
            <div
              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-300px'
              data-kt-menu='true'
            >
              {/*begin::Card*/}
              <div className='card card-flush'>
                <div className='card-body p-5'>
                  {/*begin::Loader*/}
                  <div
                    className='d-flex'
                    data-kt-filemanger-table='copy_link_generator'
                  >
                    {/*begin::Spinner*/}
                    <div className='me-5' data-kt-indicator='on'>
                      <span className='indicator-progress'>
                        <span className='spinner-border spinner-border-sm align-middle ms-2' />
                      </span>
                    </div>
                    {/*end::Spinner*/}
                    {/*begin::Label*/}
                    <div className='fs-6 text-dark'>
                      Generating Share Link...
                    </div>
                    {/*end::Label*/}
                  </div>
                  {/*end::Loader*/}
                  {/*begin::Link*/}
                  <div
                    className='d-flex flex-column text-start d-none'
                    data-kt-filemanger-table='copy_link_result'
                  >
                    <div className='d-flex mb-3'>
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr085.svg*/}
                      <span className='svg-icon svg-icon-2 svg-icon-success me-3'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9.89557 13.4982L7.79487 11.2651C7.26967 10.7068 6.38251 10.7068 5.85731 11.2651C5.37559 11.7772 5.37559 12.5757 5.85731 13.0878L9.74989 17.2257C10.1448 17.6455 10.8118 17.6455 11.2066 17.2257L18.1427 9.85252C18.6244 9.34044 18.6244 8.54191 18.1427 8.02984C17.6175 7.47154 16.7303 7.47154 16.2051 8.02984L11.061 13.4982C10.7451 13.834 10.2115 13.834 9.89557 13.4982Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <div className='fs-6 text-dark'>Share Link Generated</div>
                    </div>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      defaultValue='https://path/to/file/or/folder/'
                    />
                    <div className='text-muted fw-normal mt-2 fs-8 px-3'>
                      Read only.
                      <a
                        href='/metronic8/demo1/../demo1/apps/file-manager/settings/.html'
                        className='ms-2'
                      >
                        Change permissions
                      </a>
                    </div>
                  </div>
                  {/*end::Link*/}
                </div>
              </div>
              {/*end::Card*/}
            </div>
            {/*end::Menu*/}
          </div>
          {/*end::Share link*/}
          {/*begin::More*/}
          <div className='ms-2'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-light btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
            >
              {/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
              <span className='svg-icon svg-icon-5 m-0'>
                <svg
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x={10}
                    y={10}
                    width={4}
                    height={4}
                    rx={2}
                    fill='currentColor'
                  />
                  <rect
                    x={17}
                    y={10}
                    width={4}
                    height={4}
                    rx={2}
                    fill='currentColor'
                  />
                  <rect
                    x={3}
                    y={10}
                    width={4}
                    height={4}
                    rx={2}
                    fill='currentColor'
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </button>
            {/*begin::Menu*/}
            <div
              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-150px py-4'
              data-kt-menu='true'
            >
              {/*begin::Menu item*/}
              <div className='menu-item px-3'>
                <a href='#' className='menu-link px-3'>
                  Download File
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className='menu-item px-3'>
                <a
                  href='#'
                  className='menu-link px-3'
                  data-kt-filemanager-table='rename'
                >
                  Rename
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className='menu-item px-3'>
                <a
                  href='#'
                  className='menu-link px-3'
                  data-kt-filemanager-table-filter='move_row'
                  data-bs-toggle='modal'
                  data-bs-target='#kt_modal_move_to_folder'
                >
                  Move to folder
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className='menu-item px-3'>
                <a
                  href='#'
                  className='menu-link text-danger px-3'
                  data-kt-filemanager-table-filter='delete_row'
                >
                  Delete
                </a>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu*/}
          </div>
          {/*end::More*/}
        </div>
      </div>
      {/*end::Action template*/}
      {/*begin::Checkbox template*/}
      <div className='d-none' data-kt-filemanager-template='checkbox'>
        <div className='form-check form-check-sm form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            defaultValue={1}
          />
        </div>
      </div>
      {/*end::Checkbox template*/}
      {/*begin::Modals*/}
      {/*begin::Modal - Upload File*/}
      <div
        className='modal fade'
        id='kt_modal_upload'
        tabIndex={-1}
        aria-hidden='true'
      >
        {/*begin::Modal dialog*/}
        <div className='modal-dialog modal-dialog-centered mw-650px'>
          {/*begin::Modal content*/}
          <div className='modal-content'>
            {/*begin::Form*/}
            <form className='form' action='none' id='kt_modal_upload_form'>
              {/*begin::Modal header*/}
              <div className='modal-header'>
                {/*begin::Modal title*/}
                <h2 className='fw-bold'>Upload files</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className='btn btn-icon btn-sm btn-active-icon-primary'
                  data-bs-dismiss='modal'
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className='svg-icon svg-icon-1'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        x={6}
                        y='17.3137'
                        width={16}
                        height={2}
                        rx={1}
                        transform='rotate(-45 6 17.3137)'
                        fill='currentColor'
                      />
                      <rect
                        x='7.41422'
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform='rotate(45 7.41422 6)'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className='modal-body pt-10 pb-15 px-lg-17'>
                {/*begin::Input group*/}
                <div className='form-group'>
                  {/*begin::Dropzone*/}
                  <div
                    className='dropzone dropzone-queue mb-2'
                    id='kt_modal_upload_dropzone'
                  >
                    {/*begin::Controls*/}
                    <div className='dropzone-panel mb-4'>
                      <a className='dropzone-select btn btn-sm btn-primary me-2 dz-clickable'>
                        Attach files
                      </a>
                      <a className='dropzone-upload btn btn-sm btn-light-primary me-2'>
                        Upload All
                      </a>
                      <a className='dropzone-remove-all btn btn-sm btn-light-primary'>
                        Remove All
                      </a>
                    </div>
                    {/*end::Controls*/}
                    {/*begin::Items*/}
                    <div className='dropzone-items wm-200px'></div>
                    {/*end::Items*/}
                    <div className='dz-default dz-message'>
                      <button className='dz-button' type='button'>
                        Drop files here to upload
                      </button>
                    </div>
                  </div>
                  {/*end::Dropzone*/}
                  {/*begin::Hint*/}
                  <span className='form-text fs-6 text-muted'>
                    Max file size is 1MB per file.
                  </span>
                  {/*end::Hint*/}
                </div>
                {/*end::Input group*/}
              </div>
              {/*end::Modal body*/}
            </form>
            {/*end::Form*/}
          </div>
        </div>
      </div>
      {/*end::Modal - Upload File*/}
      {/*begin::Modal - New Product*/}
      <div
        className='modal fade'
        id='kt_modal_move_to_folder'
        tabIndex={-1}
        aria-hidden='true'
      >
        {/*begin::Modal dialog*/}
        <div className='modal-dialog modal-dialog-centered mw-650px'>
          {/*begin::Modal content*/}
          <div className='modal-content'>
            {/*begin::Form*/}
            <form
              className='form fv-plugins-bootstrap5 fv-plugins-framework'
              action='#'
              id='kt_modal_move_to_folder_form'
            >
              {/*begin::Modal header*/}
              <div className='modal-header'>
                {/*begin::Modal title*/}
                <h2 className='fw-bold'>Move to folder</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div
                  className='btn btn-icon btn-sm btn-active-icon-primary'
                  data-bs-dismiss='modal'
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className='svg-icon svg-icon-1'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        x={6}
                        y='17.3137'
                        width={16}
                        height={2}
                        rx={1}
                        transform='rotate(-45 6 17.3137)'
                        fill='currentColor'
                      />
                      <rect
                        x='7.41422'
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform='rotate(45 7.41422 6)'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className='modal-body pt-10 pb-15 px-lg-17'>
                {/*begin::Input group*/}
                <div className='form-group fv-row fv-plugins-icon-container'>
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={0}
                        id='kt_modal_move_to_folder_0'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_0'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}account
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={1}
                        id='kt_modal_move_to_folder_1'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_1'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}apps
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={2}
                        id='kt_modal_move_to_folder_2'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_2'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}widgets
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={3}
                        id='kt_modal_move_to_folder_3'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_3'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}assets
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={4}
                        id='kt_modal_move_to_folder_4'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_4'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}documentation
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={5}
                        id='kt_modal_move_to_folder_5'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_5'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}layouts
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={6}
                        id='kt_modal_move_to_folder_6'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_6'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}modals
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={7}
                        id='kt_modal_move_to_folder_7'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_7'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}authentication
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={8}
                        id='kt_modal_move_to_folder_8'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_8'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}dashboards
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='separator separator-dashed my-5' />
                  {/*begin::Item*/}
                  <div className='d-flex'>
                    {/*begin::Checkbox*/}
                    <div className='form-check form-check-custom form-check-solid'>
                      {/*begin::Input*/}
                      <input
                        className='form-check-input me-3'
                        name='move_to_folder'
                        type='radio'
                        defaultValue={9}
                        id='kt_modal_move_to_folder_9'
                      />
                      {/*end::Input*/}
                      {/*begin::Label*/}
                      <label
                        className='form-check-label'
                        htmlFor='kt_modal_move_to_folder_9'
                      >
                        <div className='fw-bold'>
                          {/*begin::Svg Icon | path: icons/duotune/files/fil012.svg*/}
                          <span className='svg-icon svg-icon-2 svg-icon-primary me-2'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z'
                                fill='currentColor'
                              />
                              <path
                                d='M9.2 3H3C2.4 3 2 3.4 2 4V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V7C22 6.4 21.6 6 21 6H12L10.4 3.60001C10.2 3.20001 9.7 3 9.2 3Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}pages
                        </div>
                      </label>
                      {/*end::Label*/}
                    </div>
                    {/*end::Checkbox*/}
                  </div>
                  {/*end::Item*/}
                  <div className='fv-plugins-message-container invalid-feedback' />
                </div>
                {/*end::Input group*/}
                {/*begin::Action buttons*/}
                <div className='d-flex flex-center mt-12'>
                  {/*begin::Button*/}
                  <button
                    type='button'
                    className='btn btn-primary'
                    id='kt_modal_move_to_folder_submit'
                  >
                    <span className='indicator-label'>Save</span>
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2' />
                    </span>
                  </button>
                  {/*end::Button*/}
                </div>
                {/*begin::Action buttons*/}
              </div>
              {/*end::Modal body*/}
            </form>
            {/*end::Form*/}
          </div>
        </div>
      </div>
      {/*end::Modal - Move file*/}
      {/*end::Modals*/}
    </Dashboard>
  );
};

export default UserPage;
