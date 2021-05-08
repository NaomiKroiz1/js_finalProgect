//validations

const isValidEmailAddress = (email) =>{
    return email.match(/^(\w)+@(\w)+\.(\w){2,}$/) !==null;
}

const isValidPhone = (phone) => {
    return phone.match(/^0\d{1,2}-?\d{7}/);
}
const isValidCreditCard = (cc) => {
    return cc.match(/^\d{16,16}/);
}
const isValidID = (id) => {
    return id.match(/^0\d{1,2}-?\d{7}/);
}
const isValidText = (st, minLength) => {
    if (st?.length < minLength) {
        return false;
    }
    for( i =0; i< st.length; i++) {
        if (st.match(/[a-zA-Zא-ת ]{1,1}/) === null) {
            return false;
        }
    }
    return true;
}
const isValidTextOnlyEnglish = (st, minLength) => {
    if (st?.length < minLength) {
        return false;
    }
    for( i =0; i< st.length; i++) {
        if (st.match(/[a-zA-Z ]{1,1}/) === null)
            return false;
    }
    return true;
}
    
const isValidNumbers = (st, minLength) => {
    if (st?.length < minLength) {
        return false;
    }
    let flag = true;
    for( i = 0; i < st.length; i++){
        if(st[i].match(/[0-9]{1,1}/) === null)
        return false;
    }
    return true;
}

//key-press events

const NumbersKeypress = (event,value, max) => {
    if (event.key.match(/[0-9]/) === null || value.length >= max){
        event.preventDefault();
    }
}
const EnglishLettersKeypress = (event,value, max) => {

    if (event.key.match(/[A-Za-z]/) === null || value.length >= max){
        event.preventDefault();
    }
}
const lettersKeypress = (event,value, max) => {
    if (event.key.match(/[a-zA-Zא-ת ]/) === null || value.length >= max){
        event.preventDefault();
    }
}
const emailKeypress = (event,value, max) => {
    if (event.key.match(/[0-9A-Za-z@.]/) === null || value.length >= max){
        event.preventDefault();
    }
}



