import { api } from "./api";

export const getBeersAPI = async () => {
  try {
    const response = await api.get("/beer");
    // console.log(response.data);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    if (error.response) {
      console.log(error.response);
      return { error: error.response.data, status: error.response.status };
    }
  }
};
