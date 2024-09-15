interface Teacher {
    readonly firstname: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  }

  interface Director extends Teacher{
    numberOfReports: number;
  }

  function printTeacher(firstname: string, lastName: string){
    return firstname[0]

  }