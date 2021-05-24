import Role from "../models/Role";
import User from "../models/User";

export const verifyDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).json({ message: "User already exist" });

  const email = await User.findOne({ email: req.body.email });
  if (email) return res.status(400).json({ messje: "Email already exist" });

  next();
};

export const checkRolesExisted = async (req, res, next) => {
  console.log("checkRolesExisted");
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      const role = await Role.findOne({ name: req.body.roles[i] });
      console.log("ROLE ", role);
      if (!role)
        return res
          .status(400)
          .json({ message: `Role ${req.body.roles[i]} does not exist` });
    }
  }
  next();
};
