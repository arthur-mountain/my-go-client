export const POSTv1Login = async (params: User.LoginPayload) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/system/login`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  });
  const data = await res.json();

  return data
};

export const POSTv1CreateUser = async (params: User.CreatePayload) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/system/create`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  });
  const data = await res.json();

  return data
};

export const POSTv1ForgetPassword = async (params: User.ForgotPasswordPayload) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/system/forgot-password`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  });
  const data = await res.json();

  return data
}