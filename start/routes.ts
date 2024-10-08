/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import OrganizacaoController from '#controllers/organizacao_controller'
import CompetidorController from '#controllers/competidor_controller'
import ModalidadeController from '#controllers/modalidade_controller'
import EventoController from '#controllers/evento_controller'
import InscricaoController from '#controllers/inscricao_controller'

router.on('/').render('pages/home')
// router.on('/autor').render('pages/autor')

router.resource('competidor', CompetidorController)
router.resource('organizacao', OrganizacaoController)
router.resource('modalidade', ModalidadeController)
router.resource('evento', EventoController)
router.resource('inscricao', InscricaoController)
