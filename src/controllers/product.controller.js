import Product from '../models/product.model.js'
import { deleteImage, uploadImage } from '../utils/cloudinary.js'

import mainProduct from '../models/mainProduct.model.js'
import descProduct from '../models/descProduct.model.js'

export async function getProducts(req , res){
    try {
        // console.log('holaaaaaa')
        const products = await Product.find({desc: false})
        res.status(200).json({
            message: 'get all product is finnish successfully',
            products
        })
        console.log('get product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}

export async function getSpecialProducts(req , res){
    try {
        // console.log('holaaaaaa')
        const products = await Product.find({desc: true})
        res.status(200).json({
            message: 'get all product Special is finnish successfully',
            products
        })
        console.log('get product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}

export async function addProducts(req , res){
    try {
        const {name , price, porcDesc } = req.body
        
        const image = req.files?.image

        if(!image) return res.status(400).json({message: 'image is requerid'})

        const saveImage = await uploadImage(image.data)
        // ------------------------------------
        let product
        if(porcDesc){
            product = new Product({
                name,
                price,
                porcDesc,
                desc: true,
                img: {
                    public_id: saveImage.public_id ,
                    secure_url: saveImage.secure_url
                }
            })
        }else{
            product = new Product({
                name,
                price,
                img: {
                    public_id: saveImage.public_id ,
                    secure_url: saveImage.secure_url
                }
            })
        }
        
        

        const newproduct = await product.save()
        res.status(201).json({
            message: 'add new product is finnish successfully',
            data: newproduct
        })
        console.log('add new product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}

export async function deleteProduct(req , res){
    try {
        const {id} = req.params
    
        const productFound = await Product.findByIdAndDelete(id)
        if(productFound.img?.public_id){
            await deleteImage(productFound.img.public_id) 
        }
        res.status(200).json({
            message: 'Delete Product Successfully',
            data: productFound
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

// ----- main page - desc product --- 

// accessories
export async function getDescAProducts(req , res){
    try {
        // console.log('holaaaaaa')
        const products = await descProduct.find({typeProduct: 'accessories'})
        res.status(200).json({
            message: 'A desc get all product is finnish successfully',
            products
        })
        console.log('get product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}
// coffee beans
export async function getDescCProducts(req , res){
    try {
        const products = await descProduct.find({typeProduct: 'coffee'})
        res.status(200).json({
            message: 'C desc get all product is finnish successfully',
            products
        })
        console.log('get product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}
// instant beans
export async function getDescIProducts(req , res){
    try {
        // console.log('holaaaaaa')
        const products = await descProduct.find({typeProduct: 'instant'})
        res.status(200).json({
            message: 'I desc get all product is finnish successfully',
            products
        })
        console.log('get product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}

export async function addDescProducts(req , res){
    try {
        const {name , price, porcDesc, typeProduct } = req.body
        
        const image = req.files?.image

        if(!typeProduct) return res.status(400).json({message: 'typeProduct is requerid'})
        if(!image) return res.status(400).json({message: 'image is requerid'})

        const saveImage = await uploadImage(image.data)
        // ------------------------------------
        let product
        if(porcDesc){
            product = new descProduct({
                name,
                price,
                porcDesc,
                typeProduct,
                desc: true,
                img: {
                    public_id: saveImage.public_id ,
                    secure_url: saveImage.secure_url
                }
            })
        }else{
            product = new descProduct({
                name,
                price,
                typeProduct,
                img: {
                    public_id: saveImage.public_id ,
                    secure_url: saveImage.secure_url
                }
            })
        }
        
        

        const newproduct = await product.save()
        res.status(201).json({
            message: 'add new product is finnish successfully',
            data: newproduct
        })
        console.log('add new product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}

export async function deleteDescProduct(req , res){
    try {
        const {id} = req.params
    
        const productFound = await descProduct.findByIdAndDelete(id)
        if(productFound.img?.public_id){
            await deleteImage(productFound.img.public_id) 
        }
        res.status(200).json({
            message: 'Delete Product Successfully',
            data: productFound
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}

// ----- main page - main product --- 


export async function getMainProducts(req , res){
    try {
        // console.log('holaaaaaa')
        const products = await mainProduct.find()
        res.status(200).json({
            message: 'main get all product is finnish successfully',
            products
        })
        console.log('get product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}

export async function addMainProducts(req , res){
    try {
        const {name , price, porcDesc } = req.body
        
        const image = req.files?.image

        if(!image) return res.status(400).json({message: 'image is requerid'})

        const saveImage = await uploadImage(image.data)
        // ------------------------------------
        let product
        if(porcDesc){
            product = new mainProduct({
                name,
                price,
                porcDesc,
                desc: true,
                img: {
                    public_id: saveImage.public_id ,
                    secure_url: saveImage.secure_url
                }
            })
        }else{
            product = new mainProduct({
                name,
                price,
                img: {
                    public_id: saveImage.public_id ,
                    secure_url: saveImage.secure_url
                }
            })
        }
        
        

        const newproduct = await product.save()
        res.status(201).json({
            message: 'add new product is finnish successfully',
            data: newproduct
        })
        console.log('add new product is finnish successfully')
    } catch (error) {
        console.log({message: error.message})
        res.json({
            message: error.message
        })
    }
}

export async function deleteMainProduct(req , res){
    try {
        const {id} = req.params
    
        const productFound = await mainProduct.findByIdAndDelete(id)
        if(productFound.img?.public_id){
            await deleteImage(productFound.img.public_id) 
        }
        res.status(200).json({
            message: 'Delete Product Successfully',
            data: productFound
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}