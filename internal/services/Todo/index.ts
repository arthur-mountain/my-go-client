export const GETv1TodoList = async (queryString = "") => {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "/todos" + queryString;
  const token = window.localStorage.getItem("token") as string;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    }
  });

  return (await res.json());
};

export const GETv1TodoById = async (id: number) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/todos/${id}`
  const token = window.localStorage.getItem("token") as string;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    }
  });

  return (await res.json());
};

export const POSTv1TodoCreate = async (data: Todo.CreatePayload) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/todos/create`;
  const token = window.localStorage.getItem("token") as string;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
    body: JSON.stringify(data),
  });

  return (await res.json());
};

export const PUTv1TodoUpdate = async (id: number, data: Todo.UpdatePayload) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/todos/${id}`;
  const token = window.localStorage.getItem("token") as string;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
    body: JSON.stringify(data),
  });

  return (await res.json());
};

export const PUTv1TodoCompleted = async (id: number) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/todos/${id}/completed`;
  const token = window.localStorage.getItem("token") as string;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    }
  });

  return (await res.json());
};

export const DELETEv1TodoById = async (id: number) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/todos/${id}`;
  const token = window.localStorage.getItem("token") as string;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    }
  });

  return (await res.json());
};