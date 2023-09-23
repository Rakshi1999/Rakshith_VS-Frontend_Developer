const IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPerJtTaqoqGUYGTBMf-Zh2oKybgRkIw10Q&usqp=CAU";

const Capsule = ({ serial, type, openModal }) => {
  return (
    <div>
      <div className="max-w-sm bg-white drop-shadow-2xl border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
        <img
          className="rounded-t-lg"
          src={IMAGE_URL}
          alt={`capsule ${serial} image`}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {serial}
          </h5>
          <h6 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {type}
          </h6>
          <button
            onClick={openModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Capsule;
