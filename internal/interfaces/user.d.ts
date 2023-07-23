declare namespace User {
  type LoginPayload = {
    email: string;
    password: string;
  }

  type CreatePayload = {
    name: string;
    password: string;
    confirm_password: string;
  }

  type ForgotPasswordPayload = {
    name: string;
  }
}