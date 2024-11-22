import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import AdminJS from "adminjs";
import * as AdminJSMongoose from "@adminjs/mongoose";
import { buildAuthenticatedRouter } from "@adminjs/express";

dotenv.config({ path: path.join(process.cwd(), "config.env") });

import app from "./app.js";
import options from "./admin/options.js";
import provider from "./admin/auth-provider.js";

const DB = process.env.DATABASE.replace(
  "<db_password>",
  process.env.DB_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Database connection successfull!!!");
});

AdminJS.registerAdapter(AdminJSMongoose);

const admin = new AdminJS(options);

if (process.env.NODE_ENV === "production") {
  admin.initialize();
} else {
  admin.watch();
}

const router = buildAuthenticatedRouter(
  admin,
  {
    cookiePassword: process.env.COOKIE_SECRET,
    cookieName: "adminjs",
    provider,
  },
  null,
  {
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: true,
    resave: true,
  }
);

app.use(admin.options.rootPath, router);

const port = process.env.PORT || 8989;

app.listen(port, () => {
  console.log(
    `AdminJS available at http://localhost:${port}${admin.options.rootPath}`
  );
});
