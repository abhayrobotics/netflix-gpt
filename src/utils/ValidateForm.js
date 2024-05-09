export const ValidateForm =(name, email,password,signup)=>{

    if(signup){


        const isNameValid =/^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}[.]{0,1}$/.test(name.current.value);
        
        // console.log(name.current.value)
        if(!isNameValid) return "Name is not valid"
    }
    const isEmailValid = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
   
    return null

}

