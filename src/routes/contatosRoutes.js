const express = require("express");
const router = express.Router();
const controller = require("../controller/contatosContoller");


router.get("/", controller.getAll);
router.post("/criar", controller.addContato);
router.get("/nome/:nome", controller.getContatoPorNome);
router.get("/id/:id", controller.getContatoById);
router.put("/:id", controller.atualizaContato);
router.put("/atualizar", controller.updateContato); // feito com query
router.patch("/atualizaTelefone/:id", controller.contatoTelefonicoAtualiza);
router.delete("/deleta/:id", controller.deleteContato);

module.exports = router;