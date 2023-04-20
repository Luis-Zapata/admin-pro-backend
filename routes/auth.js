/*
    Path: '/api/login
*/
const { Router } = require("express");
const { body } = require("express-validator");
const { login } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");

const router = new Router();

router.post(
  "/",
  [
    body("email", "El email es obligatorio").isEmail(),
    body("password", "El password es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  login
);

module.exports = router;
