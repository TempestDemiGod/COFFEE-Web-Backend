import { Router } from 'express'
import { addDescProducts, addMainProducts, addProducts, deleteDescProduct, deleteMainProduct, deleteProduct, getDescAProducts, getDescCProducts, getDescIProducts, getMainProducts, getProducts, getSpecialProducts } from '../controllers/product.controller.js'
import { validateSchema } from '../midllewares/validatorSchema.midllewares.js'
import { addProduct } from '../schemas/product.schema.js'
import fileUpload from "express-fileupload";

const router = Router()

router.get('/product', getProducts )
router.get('/productSpecial', getSpecialProducts )
router.post('/product',fileUpload() , validateSchema(addProduct) , addProducts)
router.delete('/product/:id', deleteProduct )

//  main Products -----

router.get('/product/main', getMainProducts )
router.post('/product/main',fileUpload() , validateSchema(addProduct) , addMainProducts)
router.delete('/product/main/:id', deleteMainProduct )

//  desc products -----

router.get('/product/desc/A', getDescAProducts )
router.get('/product/desc/C', getDescCProducts )
router.get('/product/desc/I', getDescIProducts )
router.post('/product/desc',fileUpload() , validateSchema(addProduct) , addDescProducts)
router.delete('/product/desc/:id', deleteDescProduct )

export default router