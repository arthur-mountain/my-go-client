'use client';
import { useState } from "react";
// import { POSTv1CreateUser } from "../../services/Home/home.js";
// import { useRouter } from "next/navigation";

function PageComponent() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // TODO: create user api
  }

  return (
    <div className="flex flex-col items-center content-center">
      <div className="text-white text-center">
        <div className="text-7xl mb-12">
          Create User
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="test@abc.com" required value={username}
          onChange={e => setUserName(e.target.value)} />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required value={password}
          onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="mb-6">
        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)} />
      </div>
      <button type="button" onClick={handleSubmit} className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-500">
        創建
      </button>
    </div>
  )
}

export default PageComponent;