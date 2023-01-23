'use client';
import { useState } from "react";
// import { POSTv1ForgetPassword } from "../../services/Home/home.js";
// import { useRouter } from "next/navigation";

function PageComponent() {
  const [username, setUserName] = useState("");

  const handleSubmit = () => {
    // TODO: forget password api
  }

  return (
    <div className="flex flex-col items-center content-center">
      <div className="text-white text-center">
        <div className="text-7xl mb-12">
          Forget Password
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="test@abc.com" required value={username}
          onChange={e => setUserName(e.target.value)} />
      </div>

      <button type="button" onClick={handleSubmit} className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-500">
        送出
      </button>
    </div>
  )
}

export default PageComponent;