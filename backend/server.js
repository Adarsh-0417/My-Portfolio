const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Contact = require("./models/Contact");

require("dotenv").config();

const app = express();
const Message = require("./models/Message");

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend is alive");
});

app.post("/api/Contact", async (req, res) => {
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
