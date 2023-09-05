function Validator(options){

var formElement  =  document.querySelector(options.form);
console.log(options.rules)

    function validate(inputElement,rule){
        let errorElement = inputElement.parentElement.querySelector('.form-message');
        var errorMessage = rule.test(inputElement.value);
        console.log(errorMessage);
         if(errorElement){
             errorElement.innerText = errorElement;
             inputElement.parentElement.classList.add('invalid');
         }
         else{
             errorElement.innerText ='';
             inputElement.parentElement.classList.remove('invalid')
         }
    }


    if(formElement){
        options.rules.forEach(function(rule){

            console.log(rule);
            let inputElement = formElement.querySelector(rule.selector);
           
            if(inputElement){
            inputElement.onblur = function(){

              validate(inputElement,rule);

            }
            }

        })

    }

}

// nguyên tắc rule 
// Khi có lỗi trả ra lỗi 
// khi không có lỗi trả ra undifined


Validator.isRequired = function(selector){
return {
    selector:selector,
    test: function(value){
        return value.trim() ? undefined :'Vui lòng nhập trường này'; 
    }
};
}
Validator.isEmail = function(selector){
return {
    selector:selector,
    test: function(){
        
    }
};

}