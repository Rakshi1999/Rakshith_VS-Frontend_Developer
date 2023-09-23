import { useEffect, useState } from "react";

const Filters = ({ capsules, setRenderedCapsulesFun }) => {
  const [statusValue, setStatusValue] = useState("");
  const [launchValue, setLaunchValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  const statusChangeHandler = (e) => {
    console.log(e.target.value);
    setStatusValue(e.target.value);
  };
  const launchChangeHandler = (e) => {
    console.log(e.target.value);
    setLaunchValue(e.target.value);
  };
  const typeChangeHandler = (e) => {
    console.log(e.target.value);
    setTypeValue(e.target.value);
  };

  //   console.log("renderd capsules: ", renderedCapsules);

  const generateFilterOptions = (data, key) => {
    const uniqueOptions = [...new Set(data?.map((item) => item[key]))];
    return uniqueOptions;
  };

  // Generate filter options for status, original_launch, and type
  const statusOptions = generateFilterOptions(capsules, "status");
  const launchOptions = generateFilterOptions(capsules, "original_launch");
  const typeOptions = generateFilterOptions(capsules, "type");
  //   console.log("status: ", statusOptions);
  //   console.log("launch: ", launchOptions);
  //   console.log("type: ", typeOptions);

  useEffect(() => {
    // Start with all capsules
    let filteredCapsules = capsules;

    // Apply filters based on the selected options
    if (statusValue) {
      filteredCapsules = filteredCapsules.filter(
        (capsule) => capsule.status === statusValue
      );
    }

    if (launchValue) {
      filteredCapsules = filteredCapsules.filter(
        (capsule) => capsule.original_launch === launchValue
      );
    }

    if (typeValue) {
      filteredCapsules = filteredCapsules.filter(
        (capsule) => capsule.type === typeValue
      );
    }

    // Send the filtered capsules back to the parent component
    setRenderedCapsulesFun(filteredCapsules);
  }, [statusValue, launchValue, typeValue, capsules]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 p-10">
      <div className="mb-6">
        <label htmlFor="select1" className="block text-md text-gray-700">
          Status:
        </label>
        <select
          value={statusValue}
          onChange={statusChangeHandler}
          id="select1"
          className="mt-2 capitalize block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select</option>

          {/* Add select options here */}
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="select2" className="block text-md text-gray-700">
          Original Launch:
        </label>
        <select
          value={launchValue}
          onChange={launchChangeHandler}
          id="select2"
          className="mt-2 block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select</option>

          {/* Add select options here */}
          {launchOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="select3" className="block text-md text-gray-700">
          Type:
        </label>
        <select
          value={typeValue}
          onChange={typeChangeHandler}
          id="select3"
          className="mt-2 capitalize block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select</option>

          {/* Add select options here */}
          {typeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
