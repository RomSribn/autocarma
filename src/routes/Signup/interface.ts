export interface ISignUp {
  signup: (values: object) => void;
  error: string;
  toggleLoader: (flag: boolean) => void;
}
