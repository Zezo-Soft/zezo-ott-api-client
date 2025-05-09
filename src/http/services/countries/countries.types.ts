export interface ICountry {
  _id: string;
  name: string;
  country_code: string;
  phone_code: string;
}

export interface ICountryMeta {
  pagination: {
    page: number;
    limit: number;
    pageCount: number;
    fetched: number;
    total: number;
    hasNext: boolean;
  };
  report?: {
    total: number;
    public: number;
    private: number;
    inTrash: number;
  };
}

export interface ICountries {
  message: string;
  data: ICountry[];
  meta: ICountryMeta;
}
