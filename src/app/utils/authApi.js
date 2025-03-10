
export const handleForm = async (event, URL, formData, setError, setMessage, setData, setFormData, isSignUp, firstName, lastName) => {
    event.preventDefault();
    setError("");
    if(isSignUp){
        if (formData.firstName === "" ) {
            setError("First Name cannot be empty");
            return;
        }
        if (formData.lastName === "" ) {
            setError("Last Name cannot be empty");
            return;
        }
    }
    if (formData.email === "") {
        setError("Email is not allowed to be empty");
        return;
    }
  
    if (formData.password === "" || formData?.password.length < 8) {
        setError("Password is too short");
        return;
    }
   
  
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        setData(result);
        result.status === 201 ? setMessage(result?.message) : setError(result?.message);
        setFormData({ email: '', password: '', firstName:'', lastName:''});
    } catch (error) {
        console.log(error);
        setError("Error connecting to server");
    }
};
