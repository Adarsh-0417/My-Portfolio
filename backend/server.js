const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


require("dotenv").config();

const app = express();
const Message = require("./models/Message");

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is alive");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
      const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(200).json({
      success: true,
      message: "Message saved successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
