import axios from "axios";

const createUser = () => {
  const { userId, userName } = req.body;

  axios
    .post(
      "https://api.chatengine.io/project/people",
      {
        username: userName,
        secret: userId,
      },
      {
        headers: { "Private-Key": process.env.chat_engine_private_key },
      }
    )
    .then((apiRes) => {
      res.json({
        body: apiRes.body,
        error: null,
      });
    })
    .catch(() => {
      res.json({
        body: null,
        error: "Error while creating a user",
      });
    });
};

export default createUser;
