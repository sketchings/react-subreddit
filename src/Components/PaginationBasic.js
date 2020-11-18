import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationBasic = props => {
    const {
        totalPages,
        activePage,
        setPage
    } = props;
    let items = [];
    for (let number = 1; number <= Math.ceil(totalPages); number++) {
        items.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => setPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <Pagination size="lg">{items}</Pagination>
        </div>
    );
}

export default PaginationBasic;