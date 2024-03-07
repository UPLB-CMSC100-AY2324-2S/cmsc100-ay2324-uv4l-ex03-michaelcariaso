//Michael Uriel D. Cariaso
//CMSC 100 UV-4L Exercise 3
//2022-12931


//for checking if the two passwords are the same
function validatePassword(password1, password2){
    //for checking if the two password are the same
    //initialize as true
    match = true;

    //boolean for checking if the password as at least 8 characters
    minimum = false;
    
    //boolean for checking if the password has at least 1 number, 1 uppercase character, and 1 lowercase character
    passed = false;

    //ensure that both passwords are strings
    password1 = String(password1);
    password2 = String(password2);

    //convert first password into an array
    array_Password1 = password1.split("");

    //convert second password into an array
    array_Password2 = password2.split("");
    
    //check length
    length = array_Password1.length;
    
    //get the lengths of the two string arrays
    length_1 = array_Password1.length;
    length_2 = array_Password2.length;  

    //check if the lengths of the two string arrays are the same
    if(length_1 != length_2){
        match = false ; //the lengths are not equal
    }else{
        //loop for checking if every character in the string array are the same
        for(let i = 0; i < length; i++){
            if(array_Password1[i] != array_Password2[i]){
                match = false; //different string
                break; //already found different characters 
            }
        }
    }

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
            if(array_Password1[i] == digits[j]){
                contains_num = true
                break;
            }
        }
    }

    lowercase = password1.toLowerCase(); //making the password all lowercase characters
    uppercase = password1.toUpperCase(); //making the password all uppercase characters

    //convert to string arrays again
    lowercase = lowercase.split(""); 
    uppercase = uppercase.split("");
     //loop for checking if there is at least 1 uppercase 
     for(let i = 0; i < length; i++){
        //checking if there is 1 uppercase
        if(array_Password1[i] == uppercase[i]){
            has_uppercase = true;
            break; //already found 1 uppercase
        }
    }

    //loop for checking if there is at least 1 lowercase
    for(let i = 0; i < length; i++){
        //checking if there is 1 uppercase
        if(array_Password1[i] == lowercase[i]){
            has_lowercase = true;
            break; //already found 1 lowercase
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
    reversed = [];
    
    //password array
    password_Array = password.split("");

    //loop for reversing the password by concatenating
    for(let i = (length-1); i >= 0; i--){
        //push the string into the reversed array starting from the last index using push
        reversed.push(password_Array[i]);
    }

    reversedString = "";
    //turn the array of reversed password back to string for the return value
    for(let i = 0; i < length; i++){
        reversedString = reversedString + reversed[i];
    }

    //return reversed password
    return reversedString;
}


//store password function
function storePassword(name, password1, password2){
    //object that will contain name and newpassword
    namePass = {
        value: {
            name:"", 
            newpassword:"",
        },
        //view the object to be returned
        view: function(){
            console.log(this.value)
        }
       
    }

    //put the name as the value of the key name
    namePass.value.name = name;
    //check if password is  valid
    valid = validatePassword(password1, password2);

     //if the password is valid
     if(valid == true){
        namePass.value.newpassword = reversePassword(password1);
    }else{
        namePass.value.newpassword = password1;
    }

    //return object containing the name and password
    return namePass.view();

}

storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
storePassword("John", "Pass123", "Pass12345") // returns {name: "John", newpassword:"Pass123"}




