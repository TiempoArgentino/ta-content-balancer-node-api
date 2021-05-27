import { Mongoose } from "mongoose";
import User from "../models/User";
export const getClientDetails = async (clientApiKey) => {
  try {
    const api_key = await User.findOne({ api_key: clientApiKey });
    if (api_key) return api_key;
    return false;
  } catch (error) {
    console.log("ERRRRRRROR ", error);
  }
};
