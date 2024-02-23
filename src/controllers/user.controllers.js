import User from '../models/user.model.js'
import Product from '../models/product.model.js'
import { deleteImage, uploadImage } from '../utils/cloudinary.js'


export async function addFavorite(req , res){
    try {
        const {id} = req.body
        console.log(id)
        const idUser = req.user.id
        
        const user = await User.findById({_id: idUser})
        
        let favorite = user.favorite
        const index = favorite.indexOf(id)
        if(index != -1) return res.status(404).json({message: 'Product already exist in the list'})

        const product = await Product.findById({_id: id})
        user.favorite.push(product)
        await user.save()
        res.status(201).json({
            message: 'add product in the list successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function addCart(req , res){
    try {
        const {id} = req.body
        const idUser = req.user.id
        
        const user = await User.findById({_id: idUser})

        let cart = user.cart
        const index = cart.indexOf(id)
        if(index != -1) return res.status(404).json({message: 'Product already exist in the list'})

        const product = await Product.findById({_id: id})
        user.cart.push(product)
        await user.save()
        res.status(201).json({
            message: 'add product in the list successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function getUserRequest(req , res){
    try {
        const idUser = req.user.id
        
        const user = await User.findById({_id: idUser}).populate('favorite').populate('cart')
        res.status(200).json({
            message: 'User data',
            user
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


export async function deleteFavoriteRequest(req , res){
    try {
        const {id} = req.user    
        const product = req.params.id
        const user = await User.findById({_id : id})
        let favorite = user.favorite
        const index = favorite.indexOf(product)
        if(index == -1) return res.status(404).json({message: 'Product not exist in the list'})

        favorite.splice(index, 1)
        await user.save() 

        res.status(200).json({
            message: 'delete product of the favorite list',
            user
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export async function deleteCartRequest(req , res){
    try {
        const {id} = req.user    
        const product = req.params.id
        const user = await User.findById({_id : id})
        let cart = user.cart
        const index = cart.indexOf(product)
        if(index == -1) return res.status(404).json({message: 'Product not exist in the list'})

        cart.splice(index, 1)
        await user.save() 

        res.status(200).json({
            message: 'delete product of the favorite list',
            user
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function avatarRequest(req , res){
    try {
        const avatar = req.files?.avatar
        const user = await User.findById(req.user.id)
        if(user.avatar.public_id){
            await deleteImage(user.avatar.public_id) 
        }
        const avatarUpdate = await uploadImage(avatar.data)
        user.avatar.public_id = avatarUpdate.public_id
        user.avatar.secure_url = avatarUpdate.secure_url
        user.save()
        res.status(200).json({message: 'avatar successfully updated'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}