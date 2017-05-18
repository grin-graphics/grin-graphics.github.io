/**
 * Created by 845865130 on 5/09/2016.
 */

// find the form
// disable HTML5 validation


var theForm = document.querySelector('#booking');
radioButtonsList = theForm.elements['activity-option'];
var elements = theForm.elements;


function isEmail(input) {
    return input.match(/^([a-z0-9_.\-+]+)@([\da-z.\-]+)\.([a-z\.]{2,})$/);}



theForm.addEventListener('submit', function (evt) {
    var isError = false;

    var elements = this.elements;
    for (var i = 0; i < elements.length; i += 1) {
        if (! isFieldValid(elements[i])) {
            isError = true;
        }
    }

    if (isError) {
        evt.preventDefault();
    }

});

//loop through radio buttons and add event listener to each ('change')
//for (var j =0; j < radioButtonsList.length; j++) {
//    radioButtonsList[j].addEventListener('click', function(evt) {
//        if (evt.target.value === "pickup") {
//            addressForm.classList.add('closed');
//        } else {
//            addressForm.classList.remove('closed');
//        }
//    });
//}

//in the listener, toggle the closed css class on the deliveryWrapper
//#closed
//var toggleButton=function

function isFieldValid(field) {
    if (! needsToBeValidated(field)) {
        return true;
    }
    // remove the invalid class of the field
    field.classList.remove('invalid');
    // find the error span, clear it
    var errorSpan = document.querySelector('#' + field.id + '-error');
    errorSpan.classList.remove('danger');
    errorSpan.innerHTML = "";
    if (field.type === "email" && !isEmail(field.value)) {
        errorMessage = "This should be a valid email address.";
    }
    if (field.required && field.value.trim() === "") {

        // give the field an error class
        field.classList.add('invalid');

        // give the error span a class and the error message.
        errorSpan.classList.add('danger');
        errorSpan.innerHTML = "This field is required.";


        return false;
    }
    return true;
}


function handleBlur(evt) {
    isFieldValid(evt.target);
}

for (var i = 0; i < elements.length; i += 1) {
    elements[i].addEventListener ("blur", handleBlur);
}


function needsToBeValidated(field) {
    return (field.offsetWidth > 0 ||
        field.offsetHeight > 0) && ['submit', 'reset', 'button', 'hidden', 'fieldset', 'radio'].indexOf(field.type) === -1; }





//FORM VALIDATION END//

