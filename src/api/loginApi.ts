import { User } from "../interfaces/user";
import { api } from "./api";

export const login = async (data: User) => {
  try {
    const response = await api.post("/login", {
      email: data.email,
      password: data.password,
    });
    console.log(response.data);
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
