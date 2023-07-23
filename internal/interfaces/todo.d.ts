declare namespace Todo {
  type Schema = any; // TODO: add type for todo

  type CreatePayload = {
    title: string;
    description: string;
  }

  type UpdatePayload = {
    title: string;
    description: string;
  }
}