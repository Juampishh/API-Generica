export interface User {
  id?: number;
  type: "admin" | "client";
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  created_at: Date;
}
