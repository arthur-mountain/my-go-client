import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const WhiteList = ["/", "/create-user", "/forget-password"];

const useClientAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [stateErrMsg, setStateErrMsg] = useState('');
  const isShowChildren = !stateErrMsg || WhiteList.indexOf(pathname) > -1;

  const handleLogout = () => {
    // TODO: api to logout?
    window.localStorage.removeItem("token");
    router.replace("/");
  };

  useEffect(() => {
    const isWhiteList = WhiteList.indexOf(pathname) > -1;
    const token = JSON.parse(window.localStorage.getItem("token"));

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