//Michael Uriel D. Cariaso
//CMSC 100 UV-4L Exercise 3
//2022-12931


//for checking if the two passwords are the same
function validatePassword(password1, password2){
    //for checking if the two password are the same
    match = false;

    //boolean for checking if the password as at least 8 characters
    minimum = false;
    
    //boolean for checking if the password has at least 1 number, 1 uppercase character, and 1 lowercase character
    passed = false;
    
    //check if the two strings are the same
    if(String(password1) == String(password2)){
        match = true; //same string
    }

    //check length
    length = password1.length

    //for checking if there are at least 8 characters in the string
    if(length >= 8){
        minimum = true; //at least 8 characters
    }

    //list of numbers for checking
    const digits = [0,1,2,3,4,5,6,7,8,9];

    //count of numbers (10)
    const num_count = 10;


    //other boolean
    contains_num = false;
    has_uppercase = false;
    has_lowercase = false;

    //outer loop for checking all of the characters in the string
    for(let i = 0; i < length; i++){
        //inner loop for checking using the list of digits
        for(let j = 0; j < num_count; j++){
            //checking if one of the chars is equal to any of the string
            if(password1[i] == digits[j]){
                contains_num = true
                break;
            }
        }
    }

     //loop for checking if there is at least 1 uppercase 
     for(let i = 0; i < length; i++){
        //checking if there is 1 uppercase
        if(password1[i] == uppercase[i]){
            has_uppercase = true;
        }
    }

    //loop for checking if there is at least 1 lowercase
    for(let i = 0; i < length; i++){
        //checking if there is 1 uppercase
        if(password1[i] == lowercase[i]){
            has_lowercase = true;
        }
    }

    //checking if all three requirements for characters are passed
    if(contains_num == true && has_uppercase == true && has_lowercase == true){
        passed = true;
    }

    //returning true if the password is valid, else return false
    if(match == true && minimum == true && passed == true){
        return true;
    }else{
        return false;
    }

}



//reverse password function
function reversePassword(password){
    //length of password
    length = password.length;
    //variable for reversed string
    reversed = "";

    //loop for reversing the password by concatenating
    for(let i = (length-1); i >= 0; i--){
        //concat the characters together
        reversed = reversed + password[i];
    }

    //return reversed password
    return reversed;
}


//store password function
function storePassword(name, password1, password2){
    //object that will contain name and newpassword
    namePass = {
        value: {
            name:"", 
            newpassword:"",
        },

        view: function(){
            console.log(this.value)
        }
       
    }
}




