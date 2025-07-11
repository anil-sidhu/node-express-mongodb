const user ={userName:"anil",age:20,email:"anil@test.com",city:"noida"}
// const email=user.email;
//  const age=user.age;
//   const name=user.name;
const {email,userName,age,city="delhi"}=user
console.log(city);
