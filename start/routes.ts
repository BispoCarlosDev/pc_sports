/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import CompetidorController from '#controllers/competidor_controller'

router.on('/').render('pages/home')
// router.on('/autor').render('pages/autor')

router.resource('competidor', CompetidorController)