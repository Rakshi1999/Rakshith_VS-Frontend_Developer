import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Capsule from "./components/Capsule/Capsule";
import Pagination from "./components/Pgination/Pagination";
import Filters from "./components/Filters/Filters";
import Modal from "./components/Modal/Modal";
import { v4 as uuidv4 } from "uuid";
import bg from "./assets/spacex-693229_1920.jpg";

// api call
import { GetAllCapsules } from "./services/getAllCapsules";

const App = () => {
  const [capsules, setCapsules] = useState([]);
  const [currentPage, setCurrenPage] = useState(1);
  const [renderedCapsules, setRenderedCapsules] = useState([]);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log("all rendered capsules: ", selectedCapsule);
  // console.log("current page: ", currentPage);

  const setRenderedCapsulesFun = (filteredCapsules) => {
    setRenderedCapsules(filteredCapsules);
  };

  const perPageItems = 10;

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await GetAllCapsules();
      setCapsules(data);
    };
    fetchAPI();
  }, []);

  const startIndex = (currentPage - 1) * perPageItems;
  // console.log("start Index: ", startIndex);
  const lastIndex = Math.min(perPageItems * currentPage, capsules?.length);
  // console.log("last Index: ", lastIndex);

  const paginatedCapsules = capsules?.slice(startIndex, lastIndex);
  console.log("paginated: ", paginatedCapsules);

  const totalPages = Math.ceil(capsules?.length / perPageItems);

  // Function to handle page change
  useEffect(() => {
    setRenderedCapsules(paginatedCapsules);
  }, [currentPage, capsules]);
  

  const handlePageChange = (page) => {
    setCurrenPage(page);
  };

  const handleCapsuleClick = (capsule) => {
    // Set the selected capsule when it's clicked
    setSelectedCapsule(capsule);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const URL = bg;

  return (
    <div>
      <Banner
        backgroundImage={URL}
        title={"Welcome To SpaceX"}
        subtitle={"Explore our missions!"}
      />
      {/* filters */}
      <Filters
        capsules={capsules}
        renderdCapsules={renderedCapsules}
        setRenderedCapsulesFun={setRenderedCapsulesFun}
      />
      {/* <Capsule /> */}
      <div
        className={`relative flex items-center flex-col ${
          isModalOpen ? "opacity-5" : ""
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 p-10">
          {renderedCapsules?.map((capsule) => (
            <div
              key={uuidv4()}
              onClick={() => {
                handleCapsuleClick(capsule);
                // openModal();
              }} // Handle click event
            >
              <Capsule
                serial={capsule.capsule_serial}
                type={capsule.type}
                openModal={openModal}
              />
            </div>
          ))}

          {renderedCapsules?.length === 0 && (
            <div className="absolute text-xl text-justify">No data found</div>
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedCapsule={selectedCapsule}
      />
    </div>
  );
};

export default App;
