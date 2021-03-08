import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";

export const getDestinationStatus = async (destinationId) => {
  return axios({
    url: `${BASE_URL}/destination/${destinationId}/status`,
  });
};
