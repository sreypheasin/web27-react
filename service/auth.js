export function login(email, password) {
  const body = JSON.stringify({
    email: email,
    password: password
  });
  console.log(body);
  fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  }).then((res) => res.json());
  // .then((res) => console.log(res));
}
