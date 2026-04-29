export type Gift = {
    id: number;
    name: string;
    description: string;
    category: "ROMANTIC" | "SPECIAL_DATE" | "BIRTHDAY";
    price: number;
    imageUrl?: string;
    is_active: boolean;
};

export type Review = {
    id: number,
    text: string,
    client: string,
    imageUrl?: string,
}

export type Profile = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  role: "USER" | "ADMIN";
};
