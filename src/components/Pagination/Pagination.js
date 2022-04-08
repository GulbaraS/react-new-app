import React from 'react'
import "./Pagination.scss"

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pages = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

  return (
    <ul className='pagination-list'>
       {pages.map((page) => (
           <li className='pagination-item'
            key={page}
            onClick = {() => paginate(page)}>
               {page}
           </li>
       ))}
    </ul>
  );
};

export default Pagination;