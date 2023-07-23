import { useEffect, useMemo, useReducer, useContext, createContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AUTH_STATUS, WHITE_LIST } from "@/constants/common";

export type AuthStore = {
  status: AUTH_STATUS;
  error: Common.ErrorType;
}
export type AuthActions = {
  handleLogout: () => Promise<void>;
  handleSetError: (error: Common.ErrorType) => Promise<void>;
  handleResetError: () => Promise<void>;
}
export enum AuthActionType {
  SET_ERROR,
  RESET_ERROR,
}

type AuthReducerAction = { type: AuthActionType; payload?: any; };
const reducer = (store: AuthStore, action: AuthReducerAction) => {
  switch (action.type) {
    case AuthActionType.SET_ERROR: {
      return { ...store, error: action.payload.error }
    }
    case AuthActionType.RESET_ERROR: {
      return { ...store, error: { message: "" } }
    }
    default:
      return store
  }
}

const initialStore: AuthStore = {
  status: AUTH_STATUS.LOGOUT as AUTH_STATUS,
  error: { message: "" },
}

type AuthContextValue = { store: AuthStore, actions: AuthActions };
export const AuthContext = createContext<AuthContextValue>(null!);
export const useAuthCtx = () => useContext(AuthContext);
const useClientAuth = (): AuthContextValue => {
  const router = useRouter();
  const pathname = usePathname();
  const [store, dispatch] = useReducer(reducer, initialStore);
  const actions = useMemo<AuthActions>(() => ({
    handleLogout: async () => {
      // TODO: api to logout?
      window.localStorage.removeItem("token");
    },
    handleSetError: async (error: Common.ErrorType) => {
      dispatch({ type: AuthActionType.SET_ERROR, payload: { error } })
    },
    handleResetError: async () => {
      dispatch({ type: AuthActionType.RESET_ERROR })
    },
  }), [])

  useEffect(() => {
    const isWhiteList = WHITE_LIST.indexOf(pathname) > -1;
    const token = JSON.parse(window.localStorage.getItem("token") as string);
    // Login page has token
    if (pathname === '/' && token) {
      actions.handleSetError({ message: "" });
      router.replace("/home");
      return;
    }

    // Should login first
    if (!isWhiteList && !token) {
      actions.handleSetError({ message: "empty token" });
      const timer = setTimeout(() => {
        clearTimeout(timer);
        actions.handleSetError({ message: "" });
        router.replace("/");
      }, 1000);
      return;
    };
  }, [pathname])

  return { store, actions };
};

export default useClientAuth;