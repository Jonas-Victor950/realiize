import { api, requestConfig } from "../utils/config";

// Create a User
const createUser = async (data) => {
  const config = requestConfig("POST", data, null, false);

  try {
    const res = await fetch(api + "/user", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const userService = {
  createUser,
};

export default userService;
