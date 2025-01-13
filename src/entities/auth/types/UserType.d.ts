export interface UserType {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  telegram_username: string;
  role?: string;
}

export interface SignUpResponseType {
  access: string;
  user: UserType;
}


