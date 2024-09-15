interface Student {
    firstname: string;
    lastName: string;
    age: number;
    location: string;
  }

  let std1: Student = {
    firstname: "Yomna",
    lastName:  "Mohsen",
    age: 30,
    location: "cairo",
  };

  let std2: Student = {
    firstname: "Yara",
    lastName:  "Mohsen",
    age: 20,
    location: "cairo",
  };

  let studentlist: Array<Student> = [std1, std2]

  const table = document.createElement('table')
  
  studentlist.forEach((std) => {
    const row = table.insertRow();
    const namecell = row.insertCell(0);
    const locationcell = row.insertCell(1);
    namecell.innerText = std.firstname;
    locationcell.textContent = std.location;

  });
  document.body.appendChild(table);