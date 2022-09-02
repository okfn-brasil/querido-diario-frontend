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