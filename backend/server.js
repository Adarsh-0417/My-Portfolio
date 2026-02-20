const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// import Contact model (Capital C)
const Contact = require("./models/Contact");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

// test route
app.get("/", (req, res) => {
  res.send("Backend is alive");
});

// contact route
app.post("/api/contact", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    // create document
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(200).json({
      success: true,
      message: "Message saved successfully",
    });

  } catch (error) {

    console.error("Contact save error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });

  }

});


// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});