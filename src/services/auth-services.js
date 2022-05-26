import axios from "axios";
import toast from "react-hot-toast";

const loginHandler = async ({
  e,
  email,
  password,
  setUserData,
  navigate,
  from,
}) => {
  e.preventDefault();
  try {
    const { status, data } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    if (status === 200) {
      const userData = { token: data.encodedToken, user: data.foundUser };
      toast.success("Successfully logged in!");
      setUserData(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate(from, { replace: true });
    }
  } catch (error) {
    const { status } = error.response;
    if (status === 401) {
      toast.error("Wrong Credentials. Please try again");
    } else if (status === 404) {
      toast.error("User not found. Create new account");
    }
  }
};

const singupHandler = async ({
  e,
  password,
  confirmPassword,
  formData,
  navigate,
  setUserData,
  from,
}) => {
  e.preventDefault();
  if (password === confirmPassword) {
    try {
      const { data, status } = await axios.post("/api/auth/signup", {
        ...formData,
      });
      if (status === 201) {
        toast.success("Successfully Singed up!");
        const userData = { token: data.encodedToken, user: data.createdUser };
        setUserData(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate(from, { replace: true });
      }
    } catch (e) {
      if (e.response.status === 422) {
        toast.error("Account already exist with this email");
      }
    }
  }
};

export { loginHandler, singupHandler };
