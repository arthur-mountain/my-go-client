'use client';
import { useId } from "react";
// import { useRouter } from "next/navigation";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

function PageComponent() {
  return (
    <div >
      <div className="bg-gray-700 grid gap-6 mb-6 md:grid-cols-4 p-5 rounded">
        <div className='flex flex-col'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">活動名稱</label>
          <input type="text" id="name" className="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="請輸入活動名稱" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">活動狀態</label>
          <Select
            instanceId={useId()}
            isMulti
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={[
              { label: "已啟用", value: "1" },
              { label: "已停用", value: "0" },
            ]}
            className="grow bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            styles={{
              control: (s) => ({
                ...s,
                border: 'none',
                height: '100%',
                borderRadius: '0.5rem',
                ':hover': {
                  ...s[':hover'],
                  border: 'none',
                  boxShadow: 'none',
                }
              })
            }}
          />
        </div>
        <div className='flex flex-col'>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">活動區間</label>
          <div className='flex items-center justify-center dark:bg-white rounded-lg p-2.5'>
            <input type="datetime-local" className="rounded-lg bg-gray-50 text-gray-900 text-sm dark:placeholder-gray-400 dark:text-gray-900" />
            <div className='mx-2 text-gray-900'>～</div>
            <input type="datetime-local" className="rounded-lg bg-gray-50 text-gray-900 text-sm dark:placeholder-gray-400 dark:text-gray-900" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">
                Sliver
              </td>
              <td className="py-4 px-6">
                Laptop
              </td>
              <td className="py-4 px-6">
                $2999
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">
                White
              </td>
              <td className="py-4 px-6">
                Laptop PC
              </td>
              <td className="py-4 px-6">
                $1999
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">
                Black
              </td>
              <td className="py-4 px-6">
                Accessories
              </td>
              <td className="py-4 px-6">
                $99
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Google Pixel Phone
              </th>
              <td className="py-4 px-6">
                Gray
              </td>
              <td className="py-4 px-6">
                Phone
              </td>
              <td className="py-4 px-6">
                $799
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple Watch 5
              </th>
              <td className="py-4 px-6">
                Red
              </td>
              <td className="py-4 px-6">
                Wearables
              </td>
              <td className="py-4 px-6">
                $999
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PageComponent;