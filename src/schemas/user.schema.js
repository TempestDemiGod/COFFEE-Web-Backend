import {z} from 'zod'


export const signUpUser = z.object({
    username: z.string({
        required_error: 'Username is requeried'
    }).max(12,{
        message: 'username - max 12 letters'
    }),
    email: z.string({
        required_error: 'email is requerid'
    }).email({
        message: 'invalid email'
    }),
    password: z.string({
        required_error: 'password is requeried'
    }).max(12,{
        message: 'password max 12 letters'
    })
}) 

export const signInUser = z.object({
    email: z.string({
        required_error: 'email is requerid'
    }).email({
        message: 'invalid email'
    }),
    password: z.string({
        required_error: 'password is requeried'
    }).max(12,{
        message: 'password max 12 letters'
    })
}) 