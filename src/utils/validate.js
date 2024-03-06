export const checkvalidateData = (email,password)=>{
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPaswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailValid) return "Email is Invalid";
  if(!isPaswordValid) return "Password is Invalid"
  return "Successfully Registered";
}