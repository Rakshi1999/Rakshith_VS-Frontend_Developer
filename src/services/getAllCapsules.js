import axios from "axios";

const URL = "https://api.spacexdata.com/v3/capsules";
const GetAllCapsules = async () => {
  const result = await axios.get(URL);
  return result.data;
};
export { GetAllCapsules };
