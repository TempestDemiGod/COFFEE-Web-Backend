import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../utils/jwt.js'

export function getUser(req , res){
    console.log('route get user is finnish successfully')
}

export async function signUpRequest(req, res){
    const {username, email, password} = req.body

    try {

        const userFound = await User.findOne({email})
        
        if(userFound) return res.status(400).json(['Email is already in use'])

        const passwordHash = await bcrypt.hash(password,10)
        
        const newUser = new User({
            username,
            email,
            password : passwordHash
        })

        const userSave = await newUser.save()
        
        const token = await createAccessToken({id: userSave._id})
        
        res.status(201).json({
                status: 'The user created successfully',
                data: {
                    userSave,
                    token
            }
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


export async function signInRequest(req , res){
    try {
        const {email , password} = req.body
        const userFound = await User.findOne({email})

        if(!userFound) return res.status(404).json(['El email no esta registrado'])
        const match = await bcrypt.compare(password, userFound.password);
        if(!match) return res.status(400).send(['password incorrecta'])
        const token = await createAccessToken({id: userFound._id})
        res.status(200).json({
            userFound,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
}


export const logOutRequest = async(req, res)=> {
    res.cookie('token', '', {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}