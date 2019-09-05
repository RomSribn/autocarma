export interface ICenteredTabsProps extends ILayoutProps {
  fetchAccidents: () => void;
  signOut: () => Promise<void>;
  logout: () => void;
  loginCheck: (user: object) => void;
  fetchUsers: (uid: string) => void;
  user: {
    uid: string;
  };
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
}
