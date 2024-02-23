import {z} from 'zod'


export const addProduct = z.object({
    name: z.string({
        required_error: 'name product is required'
    }).min(3, {
        message: 'name product - min 6 letters'
    }).max(12, {
        message: 'name product - max 12 letters'
    }),
    price: z.string({
        required_error: 'price is required'
    }),
    porcDesc: z.string({
        required_error: 'desc is required'
    }).optional()
})