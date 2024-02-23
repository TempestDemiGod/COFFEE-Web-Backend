import { Router } from 'express'
import { getUser, logOutRequest, signInRequest, signUpRequest } from '../controllers/auth.controller.js'
import { signInUser, signUpUser } from '../schemas/user.schema.js'
import { validateSchema } from '../midllewares/validatorSchema.midllewares.js'
import { authRequired } from '../midllewares/validatorToken.midlleware.js'
import { addCart, addFavorite, avatarRequest, deleteCartRequest, deleteFavoriteRequest, getUserRequest } from '../controllers/user.controllers.js'
import fileUpload from "express-fileupload";


const router = Router()

// router.get('/user', getUser)
router.post('/user/signUp', validateSchema(signUpUser), signUpRequest )
router.post('/user/signIn', validateSchema(signInUser), signInRequest )
router.get('/user/logout', logOutRequest)

router.post('/user/favorite',authRequired , addFavorite )
router.delete('/user/favorite/:id',authRequired , deleteFavoriteRequest )

router.post('/user/cart',authRequired , addCart )
router.delete('/user/cart/:id',authRequired , deleteCartRequest )

router.get('/user',authRequired , getUserRequest )

router.put('/user/avatar',authRequired, fileUpload() , avatarRequest)


export default router