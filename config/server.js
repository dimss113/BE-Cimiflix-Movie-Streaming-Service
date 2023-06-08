const userRouter = require("../app/routes/userRoute");
const categoryRouter = require("../app/routes/categoryRoute");
const ageRateRouter = require("../app/routes/ageRateRoute");
const castRouter = require("../app/routes/castRoute");
const movieStatusRouter = require("../app/routes/movieStatusRoute");
const movieRouter = require("../app/routes/movieRoute");
const movieCastRouter = require("../app/routes/movieCastRoute");
const likeRouter = require("../app/routes/likeRoute");
const userRatingRouter = require("../app/routes/userRatingRoute");
const commentRouter = require("../app/routes/commentRoute");
const bookmarkRouter = require("../app/routes/bookmarkRoute");
const subscriptionRouter = require("../app/routes/subscriptionRoute");
const paymentMethodRouter = require("../app/routes/paymentMethodRoute");
const paymentRouter = require("../app/routes/paymentRoute");
const router = require("../app/routes/index.js");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;

// dotenv.config({ path: "./.env" });
dotenv.config();
const app = express();

// middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/agerate", ageRateRouter);
app.use("/cast", castRouter);
app.use("/moviestatus", movieStatusRouter);
app.use("/movie", movieRouter);
app.use("/moviecast", movieCastRouter);
app.use("/like", likeRouter);
app.use("/userrating", userRatingRouter);
app.use("/comment", commentRouter);
app.use("/bookmark", bookmarkRouter);
app.use("/subscription", subscriptionRouter);
app.use("/paymentmethod", paymentMethodRouter);
app.use("/payment", paymentRouter);



app.listen(port, () => console.log("Server running on port 5000"));

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
