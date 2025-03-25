export interface IGetCategoriesData {
  _id: string;
  name: string;
  slug: string;
  description: string;
  order: number;
  icon: string | null;
  show_in_menu: boolean;
}
export interface IGetCategories {
  message: string;
  data: IGetCategoriesData[];
}
