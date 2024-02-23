

import jwt from "jsonwebtoken";

export const authRequired = async(req, res, next) => {
    try {
        const {token} = req.cookies
        
        if(!token){
            return res.status(401).json({message: 'token not exist'})
        }

        jwt.verify(token, 'TEMPESTcoffee' , (err, user)=>{
            if(err) return res.status(401).json({message: 'token invalid'})

            req.user = user 

            next()
        })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}