import React from 'react'

//Setting up pagination

const Pagination = ({ emailsPerPage, totalEmails, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEmails / emailsPerPage); ++i) {
        pageNumbers.push(i);
    }
    return (
        <nav style={{ marginTop: "10px" }}>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
