import express from "express";

import {obtenerCategorias} from "../controllers/categoarias.controllers.js"

const router  = express.Router();

router.get("/all",obtenerCategorias)

export default router;
