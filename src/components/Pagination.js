// import React from 'react'

const Pagination = ({ page, pages, changePage }) => {
  let middlePagination;

  if (pages <= 5) {
    middlePagination = [...Array(pages)].map((_, idx) => (
      <button
        key={idx}
        onClick={() => changePage((p) => idx + 1)}
        disabled={page === idx + 1}
      >
        {idx + 1}
      </button>
    ));
  } else {
    const startVal = Math.floor((page - 1) / 5) * 5;

    middlePagination = (
      <>
        {[...Array(5)].map((_, idx) => (
          <button
            key={startVal + idx + 1}
            onClick={() => changePage(startVal + idx + 1)}
            disabled={page === startVal + idx + 1}
          >
            {startVal + idx + 1}
          </button>
        ))}
        <button>...</button>
        <button onClick={() => changePage(pages)}>{pages}</button>
      </>
    );

    if (page > 5) {
      if (pages - page > 5) {
        middlePagination = (
          <>
            <button disabled={page === 1} onClick={() => changePage(1)}>
              1
            </button>
            <button>...</button>
            <button
              disabled={page === startVal}
              onClick={() => changePage(startVal)}
            >
              {startVal}
            </button>
            {[...Array(5)].map((_, idx) => (
              <button
                key={startVal + idx + 1}
                onClick={() => changePage(startVal + idx + 1)}
                disabled={page === startVal + idx + 1}
              >
                {startVal + idx + 1}
              </button>
            ))}
            <button>...</button>
            <button onClick={() => changePage(pages)}>{pages}</button>
          </>
        );
      } else {
        // let amountLeft = pages - page + 5;
        middlePagination = (
          <>
            <button disabled={page === 1} onClick={() => changePage(1)}>
              1
            </button>
            <button>...</button>
            <button
              disabled={page === startVal}
              onClick={() => changePage(startVal)}
            >
              {startVal}
            </button>
            {[...Array(5)].map((_, idx) => (
              <button
                key={startVal + idx + 1}
                style={pages < startVal + idx + 1 ? { display: "none" } : null}
                onClick={() => changePage(startVal + idx + 1)}
                disabled={page === startVal + idx + 1}
              >
                {startVal + idx + 1}
              </button>
            ))}
          </>
        );
      }
    }
  }

  return (
    <div className="pagination">
      <button
        className="left"
        onClick={() => changePage((p) => p - 1)}
        disabled={page === 1}
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      {middlePagination}
      <button
        className="right"
        onClick={() => changePage((p) => p + 1)}
        disabled={page === pages}
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
