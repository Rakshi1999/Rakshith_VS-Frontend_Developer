
const Modal = ({ isOpen, onClose, selectedCapsule }) => {
  if (!isOpen) return null;

  return (
    <div className="p-10 fixed  inset-0 flex items-center justify-center z-50">
      <div className="bg-cyan-100 drop-shadow-xl border rounded-lg shadow-md p-6 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">
          {selectedCapsule?.capsule_serial}
        </h1>
        <h4 className="text-xl font-semibold mb-4">
          Total Flights: {selectedCapsule.missions[0]?.flight}
        </h4>
        <h4 className="text-xl font-semibold mb-4">
          Total Landings: {selectedCapsule?.landings}
        </h4>
        <h4 className="capitalize text-xl font-semibold mb-4">
          Status: {selectedCapsule?.status}
        </h4>
        <p>Details: {selectedCapsule?.details}</p>
        <button
          className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
