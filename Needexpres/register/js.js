function lettersonly(input){
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
}
//Check if input is empty// if empty show alert message if not procced to login page
var numb = document.getElementsByName("name");
function validate()
{
    if(numb.value == ""){
        alert("Name field connot be empty");
        return false;
    }
    return true;
}