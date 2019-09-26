export interface ILoginProps {
  login: (values: object) => void;
  logout: (flag: boolean) => void;
  error: string;
  toggleLoader: (flag: boolean) => void;
}
