let username= "Keza";

const birth_year=2004;
const current_year=2025;
 const userage=current_year-birth_year;
 
 const message=`your username is ${username}, you are age is ${userage} years old.`;
 console.log(message);

 const calculatebirth_year = (userage) => current_year-userage
    console.log(`you were born in ${calculatebirth_year(21)}`);
