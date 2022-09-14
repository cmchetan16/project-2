const mongoose = require("mongoose");

//--------------------------------email-------------------------------
const isValidEmail = (email) => {
    const regx = /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/
    return regx.test(email)
};

//------------------------------mongoDbId-------------------------------
const isValidObjectId = (mongoDbObjId) => {
    return mongoose.Types.ObjectId.isValid(mongoDbObjId)
};

//-------------------name--------------
const isValidName = (name) => {
    const regx = /^[A-Za-z]{2,}$/
    return regx.test(name)
};

// ----------------text------------------
const isValidText = (text) => {
    const regx = /^[A-Za-z0-9_ ]{2,}$/
    return regx.test(text)
};

//----------------Link------------------
const isValidLink = (link) => {
    const regx = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/+#-]*[\w@?^=%&amp;\/+#-])?/
    return regx.test(link)
};

//----------------mobile------------------
const isValidMobile = (text) => {
    const regx = (/^[0-9]{10}$/)
    return regx.test(text)
};

module.exports = { isValidEmail, isValidObjectId, isValidName, isValidText, isValidLink, isValidMobile }




// const mongoose = require('mongoose')

// const validName = function (names) {   //full name
//     if ((typeof names == "String" && names.trim().length!=0 || names.match(/^[a-zA-Z ]+$/)))
//      return true
//     return false
// }
// const logo = function (link) {   //logo
//     if (typeof link == "string" && link.match((/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)))
//         return true
//     return false
// }

// const mail = function (link) {
//     if (typeof link == "string" && link.match(/^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/))
//         return true
//     return false
// }

// const mble = function (link) {
//     if (link.match(/^[0-9]{10}$/))
//         return true
//     return false
// }

// module.exports = { validName, logo, mail, mble }