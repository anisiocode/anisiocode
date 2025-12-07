export interface LayoutFC {
  (props: { children: React.ReactNode }): React.JSX.Element;
}

export type WithClassName<T = {}> = T & {
  className?: string;
};

export type Obj = Record<string, any>;
export type AppMode = "portfolio" | "codeplace";

export interface AuthContextType {
  user: null;
  setUser: (user: null) => void;
  isLoggedIn: boolean;
  loginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

export interface AppContextType {
  mode: AppMode;
  setMode: React.Dispatch<React.SetStateAction<AppMode>>;
  // setMode: (mode: AppMode) => void;
  toggleMode: () => void;
}
