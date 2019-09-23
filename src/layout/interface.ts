export interface ICenteredTabsProps extends ILayoutProps {
  fetchAccidents: () => void;
  signOut: () => Promise<void>;
  logout: () => void;
  loginCheck: (user: object) => Promise<any>;
  fetchUsers: (uid: string) => void;
  user: {
    uid: string;
  };
  isLoading: boolean;
}

export interface IMainProps {
  children: React.ReactNode;
}

export interface ILayoutProps {
  children: React.ReactNode;
  fetchAccidents: () => void;
  logout: () => void;
  loginCheck: (user: object) => void;
  fetchUsers: (uid: string) => void;
  user: {
    uid: string;
  };
  isLoading: boolean;
}
