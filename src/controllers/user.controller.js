import User from "../models/User";

/* *************************************************** */
/* *************************************************** */
export const createUser = async (req, res) => {
  const users = await User.find();

  return res.status(200).json({ users });
};
