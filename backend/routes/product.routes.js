import express from 'express'
import { createProduct , getProductById , getProducts , deleteProduct } from "../controllers/product.controllers.js";
import upload from '../middleware/upload.js';
const router = express.Router();

router.post("/", upload.single("productImage"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);

export default router;
