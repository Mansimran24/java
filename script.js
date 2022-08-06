$(function () {
    let unameValid = true;
    let pwdValid = true;
    let cpwdValid = true;
    let acceptTermsValid = true;
    let dateValid = true;


    $('form').on('submit', function (e) {
        e.preventDefault();
        var elements = this.elements;            
        var valid = {
        
        };                         
        var isFormValid;                        
    
        for (var i = 0, l = elements.length; i < l; i++) {
         
          const isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
          if (!isValid) {                    
            showErrorMessage(elements[i]);   
          } else {                           
            removeErrorMessage(elements[i]); 
          }                                  
          valid[elements[i].id] = isValid;   
        } 
    if(!validateuname()){
        showErrorMessage(document.getElementById('uname'));
      valid.sname = false;                 
    } else {                           
      removeErrorMessage(document.getElementById('uname'));
    }
    if(!validatepwd()){
        showErrorMessage(document.getElementById('pwd'));
      valid.pwd = false;                 
    } else {                           
      removeErrorMessage(document.getElementById('pwd'));
    }
    if(!validatecpwd()){
        showErrorMessage(document.getElementById('cpwd'));
      valid.pwd = false;                 
    } else {                           
      removeErrorMessage(document.getElementById('cpwd'));
    }
    if(!validatecheck()){
        showErrorMessage(document.getElementById('accept-terms'));
      valid.check = false;                 
    } else {                           
      removeErrorMessage(document.getElementById('accept-terms'));
    }
    if(!validatedate()){
        showErrorMessage(document.getElementById('date'));
      valid.check = false;                 
    } else {                           
      removeErrorMessage(document.getElementById('date'));
    }
    isFormValid = true;           
    for (var field in valid) {         
      if (!valid[field]) {             
        isFormValid = false;            
        break;                          
      }                                 
    }


    
    if (!isFormValid) {                 
      e.preventDefault();              
    }

        if (unameValid && pwdValid && cpwdValid && acceptTermsValid && dateValid) {
            e.preventDefault();
            $('#data tbody').append(`<tr><td>${$('#uname').val().length}</td><td>${$('#pwd').val().length}</td><td>${$('#cpwd').val().length}</td><td>${$('#accept-terms').val()}</td><td>${$('#date').val()}</td></tr>`)
             
        }
    });



function validateRequired(el) {
    if (isRequired(el)) {                           
      var valid = !isEmpty(el);                     
      if (!valid) {                                 
        setErrorMessage(el, 'Field is required');  
      }
      return valid;                               
    }
    return true;                                   
  }


  function isRequired(el) {
    return ((typeof el.required === 'boolean') && el.required) ||
      (typeof el.required === 'string');
  }

  
  function isEmpty(el) {
    return !el.value || el.value === el.placeholder;
  }


  function validateTypes(el) {
    if (!el.value) return true;                     
    var type = $(el).data('type') || el.getAttribute('type');
    if (typeof validateType[type] === 'function') { 
      return validateType[type](el);                
    } else {                                        
      return true;                                  
    }
  }
  function validateuname() {
    var uname = document.getElementById('uname');
    const username = uname.value.length >=5;
    var valid = username;
    if (!valid) {
      setErrorMessage(uname, 'Please add atleast 5 word Username');
    }
    return valid;
  }
   function validatepwd() {
    var pwd = document.getElementById('pwd');
    var valid = pwd.value.length >=12;
    if (!valid) {
      setErrorMessage(pwd, 'Please enter atleast 12 character which must have # symbol');
    }
    return valid;
  }
  function validatecpwd() {
    var pwd = document.getElementById('pwd');
    var cpwd = document.getElementById('cpwd');
    var valid = cpwd.value == pwd.value;
    if (!valid) {
      setErrorMessage(cpwd, 'Password not matched');
    }
    return valid;
  }
  function validatecheck() {
    var check = document.getElementById('accept-terms');
    var valid = check.checked;
    if (!valid) {
      setErrorMessage(check, 'Kindly accept all the terms & services');
    }
    return valid;
  }
  function validatedate() {
    var date = document.getElementById('date');
    var valid = date.value.trim();
    if (!valid) {
      setErrorMessage(date, 'Must enter a valid date');
    }
    return valid;
  }

  function setErrorMessage(el, message) {
    $(el).data('errorMessage', message);                 
  }

  function getErrorMessage(el) {
    return $(el).data('errorMessage') || el.title;      
  }

  function showErrorMessage(el) {
    var $el = $(el);                                     
    var errorContainer = $el.siblings('.error.message');

    if (!errorContainer.length) {                        
      
      errorContainer = $('<span class="error message"></span>').insertAfter($el);
    }
    errorContainer.text(getErrorMessage(el)).show();            
  }

  function removeErrorMessage(el) {
    var errorContainer = $(el).siblings('.error.message'); 
    errorContainer.hide();                               
  }


  var validateType = {
   
   
    
  };

}()); 
