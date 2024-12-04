const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const userLogin = async (email: string, password: string) => {
  const response = await fetch(`${apiUrl}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  console.log(apiUrl);
  return data;
};

export const userRegister = async (
  name: string,
  email: string,
  password: string,
  phone: number,
  address: string
) => {
  const response = await fetch(`${apiUrl}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, phone, address }),
  });
  const data = await response.json();
  return data;
};
