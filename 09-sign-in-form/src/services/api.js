export async function signIn({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "lucas" && password === "caton") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
