/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import PessoasController from '#controllers/PessoaController'

router.on('/').render('pages/home')
router.on('/cadastromodalidade').render('pages/cadastromodalidade')
router.on('/cadastroorganizacao').render('pages/cadastroorganizacao')
// router.on('/autor').render('pages/autor')

router.resource('pessoas', PessoasController)

router.get('/cadastroatleta', async ({ view }) => {
    return view.render('pages/cadastroatleta')
  })
  
  router.post('/cadastroatleta/salvar', 'PessoaController.salvar')
  
  
