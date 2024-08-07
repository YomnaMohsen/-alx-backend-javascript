export default function getResponseFromAPI(){
    let p = new Promise(function (resolve, reject) {
        const success = true;
        if (success){
            resolve(success);
        }
        else{
            reject('failed');
        }
    })
    return p; 
} 
