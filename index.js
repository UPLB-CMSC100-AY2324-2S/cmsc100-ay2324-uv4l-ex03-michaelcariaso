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


    
}



//reverse password function
function reversePassword(password){

}


//store password function
function storePassword(name, password1, password2){


}




