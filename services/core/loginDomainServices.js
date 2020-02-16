const express = require('express');
var containsOnlyStrings = /^[A-Za-z_ ]+$/;
var containsOnlyNumbers = /^[0-9]/;
var containsAt = /@/;

var domainMethods = {

    esLoginValido: (name) => {
        return (containsOnlyStrings.test(name))
    },

    esNombreValido: (lastname) => {
        return (containsOnlyStrings.test(lastname))
    },

    isEmailValid: (email) => {
        return (containsAt.test(email))
    },

    isUserValid: (user) => {
        return new Promise((resolve, reject) => {

            if (domainMethods.isNameValid(user.userName) &&
                domainMethods.isLastnameValid(user.userLastname) &&
                domainMethods.isEmailValid(user.userEmail)
            )
            {
                resolve("Valid");
            } else {
                reject("Invalid");
            }
        })
    },


}

module.exports = domainMethods;