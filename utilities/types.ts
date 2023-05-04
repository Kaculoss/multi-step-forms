export type WebStateType = {
  slide_from_next: boolean;
  personal_info: boolean;
  select_plan: boolean;
  add_ons: boolean;
  summary: boolean;
  thank_you: boolean;
  buttons: boolean;
  personal_name: ValidateData;
  personal_email: ValidateData;
  personal_number: ValidateData;
  isPersonalDataErr: boolean;
  isYearly: boolean;
  selected_plan: Plan;
  isSelectedPlanErr: boolean;
  selected_addons: AddOn[];
  isAddOnsErr: boolean;
};

export type BigStep = {
  num: number;
  step: string;
  isStep: boolean;
};

export type SmallStep = {
  num: number;
  isStep: boolean;
};

export type ValidateData = {
  item: string;
  isErr: boolean;
  ErrMsg: string;
};

export type PricePlan = {
  mo: number;
  yr: number;
};

export type Plan = {
  name: string;
  prices: PricePlan;
};

export type AddOn = {
  id: number;
  name: string;
  prices: PricePlan;
};
