const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaPessoaPorId);
router.post('/pessoas', PessoaController.cadastraPessoa);
router.put('/pessoas/:id', PessoaController.atualizaPessoa);
router.delete('/pessoas/:id', PessoaController.deletePessoa);

module.exports = router;    