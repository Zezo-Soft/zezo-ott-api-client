export interface IUserExportQueryPayload {
  /**
   * @default now
   * @example "2023-01-01"
   * */
  from?: string;
  /**
   * @default now
   * @example "2023-01-01"
   */
  to?: string;
  /**
   * @default "csv"
   * @example "csv"
   */
  format?: "csv";
  /**
   * @example "name,email"
   */
  select?: string;
}
