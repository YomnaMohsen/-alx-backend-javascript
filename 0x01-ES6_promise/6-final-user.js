import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName){
    return Promise.allSettled([signUpUser(firstName, lastName),uploadPhoto(fileName)])
    .then((values) => {
         for (const val of values){
            if (val.status === "rejected"){
                val.value = val.reason.toString();
                delete val.reason;
            }
         }
         return values;   
    });
}
