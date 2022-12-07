import { toast } from "react-toastify";

export const toastOptions = {
  osition: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const handleValidationLogin = (input) => {
  const { email, password } = input;

  if (email === "") {
    toast.error("Email and Password is required.", toastOptions);
    return false;
  } else if (password === "") {
    toast.error("Email and Password is required.", toastOptions);
    return false;
  }

  return true;
};

export const handleValidationSingup = (input) => {
    const { name, lastname, email, password, confirmPassword } = input;

    if (name.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (lastname.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
    } else if (password !== confirmPassword) {
      toast.error("Password an confirm password should be same.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };