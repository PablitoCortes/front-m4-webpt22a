const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (
  userId: number,
  products: number[],
  token: string
) => {
  const res = await fetch(`${apiUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
    body: JSON.stringify({
      userId,
      products,
    }),
  });
  const data = await res.json();
  return data;
};
