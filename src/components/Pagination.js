import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.length > 2
          ? pageNumbers.slice(-2).map((number) => (
              <li key={number} className='page-item'>
                <Link
                  to=''
                  onClick={() => paginate(number)}
                  className='page-link'
                >
                  {number}
                </Link>
              </li>
            ))
          : pageNumbers.map((number) => (
              <li key={number} className='page-item'>
                <Link
                  to=''
                  onClick={() => paginate(number)}
                  className='page-link'
                >
                  {number}
                </Link>
              </li>
            ))}

        <div
          className='dataTables_paginate paging_simple_numbers'
          id='kt_subscriptions_table_paginate'
        >
          <ul className='pagination'>
            <li
              className='paginate_button page-item previous disabled'
              id='kt_subscriptions_table_previous'
            >
              <a
                href='#'
                aria-controls='kt_subscriptions_table'
                data-dt-idx='0'
                tabindex='0'
                className='page-link'
              >
                <i className='previous'></i>
              </a>
            </li>
            <li className='paginate_button page-item active'>
              <a
                href='#'
                aria-controls='kt_subscriptions_table'
                data-dt-idx='1'
                tabindex='0'
                className='page-link'
              >
                1
              </a>
            </li>
            <li className='paginate_button page-item '>
              <a
                href='#'
                aria-controls='kt_subscriptions_table'
                data-dt-idx='2'
                tabindex='0'
                className='page-link'
              >
                2
              </a>
            </li>
            <li
              className='paginate_button page-item next'
              id='kt_subscriptions_table_next'
            >
              <a
                href='#'
                aria-controls='kt_subscriptions_table'
                data-dt-idx='3'
                tabindex='0'
                className='page-link'
              >
                <i className='next'></i>
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
