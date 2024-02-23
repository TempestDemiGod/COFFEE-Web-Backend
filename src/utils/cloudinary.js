import {v2 as cloudinary} from 'cloudinary';
import { API_KEY, API_SECRET, CLOUD_NAME } from './config.js';
          
cloudinary.config({ 
  cloud_name: CLOUD_NAME, 
  api_key: API_KEY, 
  api_secret: API_SECRET
});

export async function uploadImage(bufferImage){

    const result = await new Promise((resolve , reject) => {
        cloudinary.uploader.upload_stream({
            folder: 'coffeWeb'
        }, (err, result) => {
            if(err){
                reject(err)
            }
            resolve(result)
        }).end(bufferImage)
    } )
    // return await cloudinary.uploader.upload_stream(fileImage ,{
    //     folder: 'coffeWeb'
    // })
    return result
}

export async function deleteImage(publicId){
    return await cloudinary.uploader.destroy(publicId)
}