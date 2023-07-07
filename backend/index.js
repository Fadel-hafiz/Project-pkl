import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import CustomerRoute from "./routes/CustomerRoute.js";
import LokasiRoute from "./routes/LokasiRoute.js";
import ScheduleRoute from "./routes/ScheduleRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type, AUthorization');
    next();
  });

const sessionStore = SequelizeStore(session.Store);


const store = new sessionStore({
    db: db
});

// (async() => {
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(CustomerRoute);
app.use(LokasiRoute);
app.use(ScheduleRoute);
app.use(AuthRoute);

app.use(express.static("public"));

// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server Up and running');
});