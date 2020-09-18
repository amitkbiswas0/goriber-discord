// can't be a value, have to be a function
export const isAuthenticated = () => window.localStorage.getItem("auth");

export const loginAuth = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "amit.biswas6991@gmail.com" && password === "asasasas") {
        window.localStorage.setItem("auth", true);
        resolve();
      } else reject(new Error("Authentication Error. Try again!"));
    }, 2000);
  });
};

export const logoutAuth = () => window.localStorage.removeItem("auth");

export const signupAuth = (info) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(info);
      // POST request to server
      if (true) resolve("success!");
      else reject(new Error("Couldn't sign up!"));
    }, 2000);
  });
};
