const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex mt-4 mb-20 gap-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-black"
        } text-white`}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 ${
            currentPage === page ? "bg-black text-white" : "bg-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-black"
        } text-white`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
