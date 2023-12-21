import { ToastOptions, toast } from "react-toastify";

export const showToasty = (message: string, type: "success" | "error") => {
  const initialValues: ToastOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === "success") {
    return toast.success(message, initialValues);
  }

  return toast.error(message, initialValues);
};
