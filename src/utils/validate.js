const checkValidData = (email,password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!isEmailValid) return "Email Id not valid"
    if(!isPasswordValid) return "Password Is not valid"
    
    return null;
}
export default checkValidData ;