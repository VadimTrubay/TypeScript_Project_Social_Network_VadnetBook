const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", async (req, res) => {
  try {
    const { data } = await axios({
      method: req.method,
      url: req.url,
      baseURL: "https://social-network.samuraijs.com/api/1.0/",
      headers: {
        ...req.headers,
        "API-KEY": "2606b888-8484-4e56-ac3e-483848e15f9a",
      },
      withCredentials: true,
    });

    res.send(data);
  } catch (error) {
    res.status(error.response.status).send(error.response.data);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
