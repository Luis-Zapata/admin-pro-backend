/*
    Ruta: /api/usuarios
*/

const { Router } = require("express");
const { body } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  getUsuarios,
  crearUsuario,
  actualizarUsuario,
  borrarUsuario,
} = require("../controllers/usuarios");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.get("/", validarJWT, getUsuarios);

router.post(
  "/",
  [
    body("nombre", "El nombre es obligatorio").not().isEmpty(),
    body("password", "El password es obligatorio").not().isEmpty(),
    body("email", "El email es obligatorio").isEmail(),
    validarCampos,
  ],
  crearUsuario
);

router.put(
  "/:id",
  [
    validarJWT,
    body("nombre", "El nombre es obligatorio").not().isEmpty(),
    body("email", "El email es obligatorio").isEmail(),
    body("role", "El role es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  actualizarUsuario
);

router.delete("/:id", validarJWT, borrarUsuario);

module.exports = router;
