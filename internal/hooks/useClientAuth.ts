import { useEffect, useState, useReducer, useContext, createContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { STATUS, WHITE_LIST } from "@/constants/common"

export type AuthStore = {
  status: STATUS;
  error: Common.ErrorType;
}

export type AuthActions = {}

export enum AuthActionType {
  CREATE_USER,
}

type ReducerAction = { type: AuthActionType; payload?: any; };
const reducer = (store: AuthStore, action: ReducerAction) => {
  switch (action.type) {
    case AuthActionType.CREATE_USER: {
      return { ...store }
    }
    default:
      return store
  }
}

const initialStore: AuthStore = {
  status: STATUS.LOADING as STATUS,
  error: { message: "" }
}
const AuthContext = createContext(null);
const useAuthCtx = () => useContext(AuthContext);
const useClientAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [stateErrMsg, setStateErrMsg] = useState('');
  const [store, dispatch] = useReducer(reducer, initialStore)
  const isShowChildren = !store.error.message || WHITE_LIST.indexOf(pathname) > -1;

  const handleLogout = () => {
    // TODO: api to logout?
    window.localStorage.removeItem("token");
    router.replace("/");
  };

  useEffect(() => {
    const isWhiteList = WHITE_LIST.indexOf(pathname) > -1;
    const token = JSON.parse(window.localStorage.getItem("token") as string);

    // Login page has token
    if (pathname === '/' && token) {
      setStateErrMsg("");
      router.replace("/home");
      return;
    }

    // White list page without token
    if (isWhiteList) return;

    if (!isWhiteList && !token) {
      setStateErrMsg("empty token");
      setTimeout(() => {
        setStateErrMsg("");
        router.replace("/");
      }, 1000);
    };
  }, [pathname]);

  return {
    store: {
      stateErrMsg,
      isShowChildren
    },
    action: {
      handleLogout
    },
  }
};

export default useClientAuth;