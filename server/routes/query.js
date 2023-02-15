import express from "express";

const router = express.Router();

// controllers

import { contact } from "../controllers/query";

router.post("/contact", contact);
module.exports = router;
