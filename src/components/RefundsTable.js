import React, { useMemo, useEffect } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import { Link } from 'react-router-dom';
import { COLUMNS } from '../utils/columns';

export const RefundsTable = ({ resData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const restitusi = useMemo(() => resData, []);

  const {
    getTableProps,
    getTableBodyProps,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
    setPageSize,
    prepareRow,
  } = useTable(
    { columns, data: restitusi, initialState: { pageIndex: 0, pageSize: 5 } },
    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  useEffect(() => {}, [globalFilter]);

  return (
    <div className='card'>
      {/*begin::Card header*/}
      <div className='card-header border-0 pt-6'>
        {/*begin::Card title*/}
        <div className='card-title'>
          {/*begin::Search*/}
          <div className='d-flex align-items-center position-relative my-1'>
            {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
            <span className='svg-icon svg-icon-1 position-absolute ms-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
              >
                <rect
                  opacity='0.5'
                  x='17.0365'
                  y='15.1223'
                  width='8.15546'
                  height={2}
                  rx={1}
                  transform='rotate(45 17.0365 15.1223)'
                  fill='black'
                />
                <path
                  d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                  fill='black'
                />
              </svg>
            </span>
            {/*end::Svg Icon*/}
            <input
              type='text'
              value={globalFilter || ''}
              onChange={(e) => setGlobalFilter(e.target.value)}
              data-kt-subscription-table-filter='search'
              className='form-control form-control-solid w-250px ps-14'
              placeholder='Cari User...'
            />
          </div>
          {/*end::Search*/}
        </div>
        {/*begin::Card title*/}
        {/*begin::Card toolbar*/}
        <div className='card-toolbar'>
          {/*begin::Toolbar*/}
          <div
            className='d-flex justify-content-end'
            data-kt-subscription-table-toolbar='base'
          >
            {/*begin::Export*/}
            {/* <button
              type='button'
              className='btn btn-light-primary me-3'
              data-bs-toggle='modal'
              data-bs-target='#kt_subscriptions_export_modal'
            > */}
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
              {/* <span className='svg-icon svg-icon-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <rect
                    opacity='0.3'
                    x='12.75'
                    y='4.25'
                    width={12}
                    height={2}
                    rx={1}
                    transform='rotate(90 12.75 4.25)'
                    fill='black'
                  />
                  <path
                    d='M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z'
                    fill='black'
                  />
                  <path
                    d='M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z'
                    fill='#C4C4C4'
                  />
                </svg>
              </span> */}
              {/*end::Svg Icon*/}
            {/* </button> */}
            {/*end::Export*/}
            {/*begin::Add subscription*/}
            <Link to='/add' className='btn btn-primary'>
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
              <span className='svg-icon svg-icon-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <rect
                    opacity='0.5'
                    x='11.364'
                    y='20.364'
                    width={16}
                    height={2}
                    rx={1}
                    transform='rotate(-90 11.364 20.364)'
                    fill='black'
                  />
                  <rect
                    x='4.36396'
                    y='11.364'
                    width={16}
                    height={2}
                    rx={1}
                    fill='black'
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}Tambah User
            </Link>
            {/*end::Add subscription*/}
          </div>
          {/*end::Toolbar*/}
        </div>
        {/*end::Card toolbar*/}
      </div>
      {/*end::Card header*/}
      {/*begin::Card body*/}
      <div className='card-body pt-0'>
        <div
          id='kt_subcriptions_table_wrapper'
          className='dataTables_wrapper dt-bootstrap4 no-footer'
        >
          {/*begin::Table*/}
          <div className='table-responsive'>
            <table
              {...getTableProps}
              className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
              id='kt_subscriptions_table'
            >
              {/*begin::Table head*/}
              <thead>
                {/*begin::Table row*/}
                <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
                  <th className='w-10px pe-2'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
                      <input className='form-check-input' type='checkbox' />
                    </div>
                  </th>
                  <th className='min-w-125px'>Nama </th>
                  <th className='min-w-125px'>Username</th>
                  <th className='min-w-125px'>Status</th>
                  <th className='text-end min-w-70px'>Actions</th>
                </tr>
              </thead>
              <tbody {...getTableBodyProps} className='text-gray-600 fw-bold'>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'></div>
            <div className='col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'>
              <ul className='pagination pagination-outline pe-4'>
                <li
                  className={`page-item previous ${
                    !canPreviousPage ? 'disabled' : ''
                  } `}
                >
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className='page-link'
                  >
                    {'<'}
                  </button>
                </li>
                <li
                  className={`page-item next ${
                    !canNextPage ? 'disabled' : ''
                  } `}
                >
                  <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className='page-link'
                  >
                    {'>'}
                  </button>
                </li>
                <li className='page-item disabled'>
                  <button className='page-link text-gray-700'>
                    Page &nbsp; {pageIndex + 1} of {pageOptions.length}
                  </button>
                </li>
                <li className='page-item'>
                  <select
                    aria-controls='kt_subscriptions_table'
                    data-dt-idx='0'
                    tabIndex='0'
                    className='page-link text-gray-700'
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                  >
                    {[10, 25, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
