export const loadReviews = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/review");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const login = async (formValue) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue,),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      return { error: errorData.message || "Login Error" };
    }
  } catch (error) {
    return { error: "Error, try again later." };
  }
};

export const me = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/auth/me", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        if (!response.ok) {
          throw new Error(response.status)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('ERR me\n', error)
        throw new Error(error.status)
    }
}

export const register = async (regFormValue) => {
  const formData = new FormData();
  formData.append("name", regFormValue.name);
  formData.append("surname", regFormValue.surname);
  formData.append("email", regFormValue.email);
  formData.append("password", regFormValue.password);
  console.log(formData);
  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
