const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userController = require("./src/controllers/userController");
const smsController = require("./src/controllers/smsController");
const paymentController = require("./src/controllers/paymentController");
const donationController = require("./src/controllers/donationController");
const applicationController = require("./src/controllers/applicationController");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://user:abcd123@cluster0.wlsh9wk.mongodb.net/Aidexpress",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// User Registration Route
app.post("https://aidexpress-updatedui-13.onrender.com/api/users", userController.registerUser);
app.get("https://aidexpress-updatedui-13.onrender.com/api/users/:id", userController.getUser);
app.put("https://aidexpress-updatedui-13.onrender.com/api/users/:id", userController.updateUserEligibility);
app.delete("https://aidexpress-updatedui-13.onrender.com/api/users/:id", userController.removeUser);

app.post("https://aidexpress-updatedui-13.onrender.com/api/send-sms", smsController.sendNotification);

app.post("https://aidexpress-updatedui-13.onrender.com/api/payments/make-payment", paymentController.processPaymentReq);
app.post("https://aidexpress-updatedui-13.onrender.com/api/payments", paymentController.create);
app.get("https://aidexpress-updatedui-13.onrender.com/api/payments", paymentController.getAll);
app.get("https://aidexpress-updatedui-13.onrender.com/api/payments/:id", paymentController.getById);
app.put("https://aidexpress-updatedui-13.onrender.com/api/payments/:id", paymentController.update);
app.delete("https://aidexpress-updatedui-13.onrender.com/api/payments/:id", paymentController.remove);

app.post("https://aidexpress-updatedui-13.onrender.com/api/donations", donationController.createDonation);
app.get("https://aidexpress-updatedui-13.onrender.com/api/donations", donationController.getAll);
app.get("https://aidexpress-updatedui-13.onrender.com/api/donations/:id", donationController.getById);
app.put("https://aidexpress-updatedui-13.onrender.com/api/donations/:id", donationController.update);
app.delete("https://aidexpress-updatedui-13.onrender.com/api/donations/:id", donationController.remove);

app.post("https://aidexpress-updatedui-13.onrender.com/api/applications/:applicationId/track",applicationController.trackApplication);
app.post("https://aidexpress-updatedui-13.onrender.com/api/applications", applicationController.createApplication);
app.delete("https://aidexpress-updatedui-13.onrender.com/api/applications/:applicationId",applicationController.removeApplication);
app.get("https://aidexpress-updatedui-13.onrender.com/api/applications", applicationController.listAllApplications);
app.get("https://aidexpress-updatedui-13.onrender.com/api//applications/:_id", applicationController.getApplicationById);

app.listen(5000, () => console.log("Server running on port 5000"));
