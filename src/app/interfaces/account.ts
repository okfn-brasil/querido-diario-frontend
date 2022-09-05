export interface RegistrationModel {
  name: string;
  email: string;
  password: string;
  area: string;
  state: string;
  city: string;
}

export interface RegistrationResponse {
  city: string;
  email: string;
  full_name: string;
  gender: string;
  id: string;
  jwt: {
    access: string;
    refresh: string;
  }
  plan_subscription: {
    created_at?: string;
    id?: 2
    plan: {
      id: string;
      title: string;
      pagseguro_plan_id: string;
    }
    status?: {
      id: number;
      data: string;
      created_at: string;
    }
  }
  sector: string;
  state: string;
}

export interface UserModel {
  access?: string | null;
  refresh?: string | null;
  full_name?: string | null;
  id?: string | null;
  plan_pro?: boolean | string | null;
  email?: string | null;
  gender?: string | null;
  sector?: string | null;
  address?: Address;
  city?: string;
  state?: string;
  credit_card?: Card;
  date_joined?: string;
  alert_email?: string;
  plan_subscription?: Plan;
  phone?: Phone;
}

interface Phone {
  area_code: string;
  number: string;
}

interface Address {
  city: string;
  complement: string;
  country: string;
  district: string;
  number: string;
  postal_code: string;
  state: string;
  street: string;
}

interface Card {
  cpf: string;
  created_at: string;
  exp_month: string;
  exp_year: string;
  holder_birth_date: string;
  holder_name: string;
  last_four_digits: string;
  token: string;
}

interface Plan {
  created_at?: string;
  id?: number;
  plan:{
    id: string;
    pagseguro_plan_id: string;
    title: string;
  }
  status?: {
    id: number;
    data: string;
    created_at: string;
  }
}