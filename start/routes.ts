/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
//import PessoasController from '#controllers/PessoaController'

router.on('/').render('pages/home')
router.on('/autor').render('pages/autor')
router.on('/cadastroatleta').render('pages/cadastroatleta')
router.on('/cadastromodalidade').render('pages/cadastromodalidade')
router.on('/cadastroorganizacao').render('pages/cadastroorganizacao')
router.on('/consultaatleta').render('pages/consultaatleta')
router.on('/consultaorganizacao').render('pages/consultaorganizacao')
router.on('/consultamodalidade').render('pages/consultamodalidade')
router.on('/criarevento').render('pages/criarevento')
router.on('/inscricao').render('pages/inscricao')

// router.on('/autor').render('pages/autor')
/*
router.resource('pessoas', PessoasController)

router.get('/cadastroatleta', async ({ view }) => {
    return view.render('pages/cadastroatleta')
  })
  
  router.post('/cadastroatleta/salvar', 'PessoaController.salvar')
  
  */
