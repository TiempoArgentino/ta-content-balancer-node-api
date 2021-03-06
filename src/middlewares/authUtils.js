import { getClientDetails } from "../controllers/apykey.auth.controller.js";
export const clientApiKeyValidation = async (req, res, next) => {
  // let clientApiKey = req.get("api_key");
  let clientApiKey = req.headers["api_key"];
  if (!clientApiKey) {
    return res.status(400).send({
      status: false,
      response: "Missing Api Key",
    });
  }
  try {
    let clientDetails = await getClientDetails(clientApiKey);
    if (clientDetails) {
      next();
    } else {
      return res.status(400).send({
        status: false,
        response: "Invalid Api Key",
      });
    }
  } catch (error) {
    console.log("%%%%%%%% error :", error);
    return res.status(400).send({
      status: false,
      response: "Invalid Api Key",
    });
  }
};
