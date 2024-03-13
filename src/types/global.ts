export type ProfileType = {
  firstName: string;
  lastName: string;
  age: number;
  longHair: boolean;
  gender: boolean;
  favoriteColors: string[];
  addresses: Adresstype[];
};
export type Adresstype = {
  city: string;
  country: string;
  postCode: number;
  street: string;
};

export type DataType = {
  profile: ProfileType[];
};

export type AddressType1 = {
  city: string;
  country: string;
  postCode: number;
  street: string;
};

export type ProfileType1 = {
  firstName: string;
  lastName: string;
  age: number;
  longHair: boolean;
  gender: boolean;
  favoriteColors: string[];
  addresses: AddressType1[];
};
