export const GETv1TodoList = async (queryString = "") => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/todo" + queryString;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
    }
  });

  return (await res.json());
};

export const PUTv1TodoCompleted = async (id) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/todo/${id}/completed`;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
    }
  });

  return (await res.json());
};