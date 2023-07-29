"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthCtx } from "@/hooks/useClientAuth";
import useClientSwr from "@/hooks/useClientSwr";

function PageComponent() {
  const router = useRouter();
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { actions } = useAuthCtx();
  const data = useClientSwr()
  console.log(`🚀 ~ PageComponent ~ data:`, data);

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    actions.handleLogin({ email: username, password });
  };
  const handleCreate = () => router.push("/create-user");
  const handleForgetPwd = () => router.push("/forget-password");

  return (
    <div>
      <div className="text-white text-center">
        <div className="text-7xl mb-4">FullStack Demo</div>
        <div className="text-5xl mb-12">（Next13, Golang）</div>
      </div>

      <div className="flex flex-col items-center content-center">
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="test@abc.com"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-500"
        >
          登入
        </button>
        <button
          type="button"
          onClick={handleCreate}
          className="mb-4 text-sm font-medium text-white hover:underline"
        >
          尚未擁有測試帳號？
        </button>
        <button
          type="button"
          onClick={handleForgetPwd}
          className="mb-4 text-sm font-medium text-white underline underline-offset-2"
        >
          忘記密碼
        </button>
      </div>
    </div>
  );
}

export default PageComponent;
