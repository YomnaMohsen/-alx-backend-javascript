const readDatabase = require('../utils');

class StudentsController{
    static getAllStudents(request, response){
        readDatabase(process.argv[2])
        .then((data)=>{
            response.status(200);
            response.write("This is the list of our students\n");
            Object.keys(data).forEach(element => {
            response.write(`Number of students in ${element}: ${data[element].length}. List: ${data[element].join(', ')}\n`);       
            });
            response.end();  
        })
        .catch((err) =>{
            response.status(500).send(err.message);
            response.end();
       });

    }

    static getAllStudentsByMajor(request, response){
        const field = request.params.major;
        readDatabase(process.argv[2])
        .then((data)=>{
            if(data[field]){
                response.status(200).send(`List: ${data[field].join(', ')}`);
            }
            else{
                response.status(500).send(`Major parameter must be CS or SWE`);
            }    
                
            })
            .catch((err) =>{
                response.status(500).send(err.message);
                response.end();
            });

    }
}


module.exports = StudentsController;