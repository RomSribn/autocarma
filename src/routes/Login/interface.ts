export interface ILoginProps {
  login: (values: object) => void;
  error: string;
  toggleLoader: (flag: boolean) => void;
}
