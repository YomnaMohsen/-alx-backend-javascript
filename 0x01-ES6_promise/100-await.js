import {uploadPhoto, createUser} from './utils';
export default async function asyncUploadUser(){
    const obj = {};
    try{
       const  photo = await uploadPhoto();
       const user = await createUser();
        obj.photo = photo;
        obj.user = user;
    }
    catch(error){
        obj.photo = null,
        obj.user = null

    }
    return obj;
}
