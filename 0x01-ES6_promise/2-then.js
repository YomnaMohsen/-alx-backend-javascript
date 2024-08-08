export default function handleResponseFromAPI(promise){
    return promise
    .then(()=>{
        const data = {status: 200, body:"success"};
    }
)
    .catch(()=> new Error())
    .finally(()=>console.log("Got a response from the API"));
}
