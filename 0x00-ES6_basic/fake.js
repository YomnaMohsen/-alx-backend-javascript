const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for(let day of days){
  const upperDay = day.charAt(0).toUpperCase() + day;
  console.log(upperDay);
}