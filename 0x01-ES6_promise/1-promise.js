export default function getFullResponseFromAPI(success){
    let p = new Promise(function (resolve, reject) {
        if (success){
            resolve({status: 200,body: 'Success'});
    }
        else{
            reject(new Error("The fake API is not working currently"));
    }
})
}