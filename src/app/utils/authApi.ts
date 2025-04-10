export interface FormDataType {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }
  
  export const handleForm = async (
    event: React.FormEvent<HTMLFormElement>,
    URL: string,
    formData: FormDataType,
    setError: (msg: string) => void,
    setMessage: (msg: string) => void,
    setData: (data: any) => void,
    setFormData: (data: FormDataType) => void,
    isSignUp: boolean
  ): Promise<void> => {
    event.preventDefault();
    setError("");
  
    if (isSignUp) {
      if (!formData.firstName || formData.firstName.trim() === "") {
        setError("First Name cannot be empty");
        return;
      }
      if (!formData.lastName || formData.lastName.trim() === "") {
        setError("Last Name cannot be empty");
        return;
      }
    }
  
    if (!formData.email || formData.email.trim() === "") {
      setError("Email is not allowed to be empty");
      return;
    }
  
    if (!formData.password || formData.password.length < 8) {
      setError("Password is too short");
      return;
    }
  
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      setData(result);
  
      if (result.status === 201) {
        setMessage(result?.message || "Account created successfully");
      } else {
        setError(result?.message || "Something went wrong");
      }
  
      setFormData({ email: "", password: "", firstName: "", lastName: "" });
    } catch (error) {
      console.error(error);
      setError("Error connecting to server");
    }
  };
  