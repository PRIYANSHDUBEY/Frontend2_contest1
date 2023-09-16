const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
     let output= data.filter((item)=>item.profession==='developer');
 console.log(output);
  }
  
  // 2. Add Data
  function addData() {
    let addData = {}
    addData.name =prompt('what is you name?'); 
    addData.age =prompt('what is you age?');
    addData.profession = prompt('what is your profession?');

    data.push(addData);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let output = data.filter((item)=>item.profession !='admin');
    console.log(output);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let Data2 = [
        { name: 'mohit', age: 22 , profession: 'Financial lead' },
        { name: 'rohan', age: 28 , profession: 'Doctor' },
    ];
    let output = [...data , ...Data2];
    console.log(output);
  }
  
  // 5. Average Age
  function averageAge() {
    let age = 0;
    data.forEach((item)=> age=age+item.age)
    let averageAge = age /data.length;
    console.log(`average age is ${averageAge}`);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let output = data.filter((item)=>item.age>=25);
    console.log(output);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueProf = [];
    data.forEach((item) => {
        if(!uniqueProf.includes(item.profession)){
            uniqueProf.push(item.profession)
        }
    })
    console.log(`unique profession are => ${uniqueProf.join(',')}`);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    console.log('sort the data by age');
    data.sort((a,b) => a.age-b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    console.log('Upadating johns profession');
    data.forEach((item)=> {
        if(item.name=='john'){
            item.profession='manager'
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let uniqueProf = [];
    data.forEach((item) => {
        if(!uniqueProf.includes(item.profession)){
            uniqueProf.push(item.profession)
        }
    })
    console.log(uniqueProf.length);
    }
