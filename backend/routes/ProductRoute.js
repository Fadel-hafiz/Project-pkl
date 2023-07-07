import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";
import { verifyUser } from "../middleware/AuthUser.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    var fileExt = file.originalname.split(".").pop();
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random());
    cb(null, "DCUPLOAD" + "" + uniqueSuffix + "." + fileExt);
  },
});
const upload = multer({ storage });
const update = multer({ storage });
const deleted = multer({ storage });

router.get("/products", verifyUser, getProducts);
router.get("/products/:id", verifyUser, getProductById);
router.post("/products", [verifyUser, upload.any()], createProduct);
router.patch("/products/:id", [verifyUser, update.any()], updateProduct);
router.delete("/products/:id", [verifyUser, deleted.any()], deleteProduct);

export default router;