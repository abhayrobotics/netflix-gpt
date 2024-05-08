export const ValidateForm =(email,password)=>{

    // const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
    const isEmailValid = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    // if(!isNameValid) return "Name is not valid"
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
   
    return null

}

