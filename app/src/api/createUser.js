import axios from "axios";

const createUser = async (req, res) => {
  const { userId, userName } = req.body;

  axios
    .post(
      "https://api.chatengine.io/projects/people/",
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

export const createUser1 = (userName, userId) => {
  axios.post(
    "https://api.chatengine.io/projects/people/",
    {
      username: userName,
      secret: userId,
    },
    {
      headers: { "Private-Key": "cd9b2ad5-bcd8-4e15-8d66-1430c66958bc" },
    }
  );
};

export default createUser;
