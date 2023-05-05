'use client';
import { useEffect, useState, useId } from 'react';
import Link from 'next/link';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { GETv1TodoList, PUTv1TodoCompleted, DELETEv1TodoById } from "../../services/Todo/index.js";
import TodoItem from "./TodoItem/index";

const animatedComponents = makeAnimated();

function PageComponent() {
  const uniqueId = useId();
  const [todos, setTodos] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    perPage: 15,
    totalPage: 0,
  });

  const handleCheck = async (id) => {
    try {
      await PUTv1TodoCompleted(id);
      setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, is_completed: true } : todo));
    } catch (error) {
      alert(`check error: ${error}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await DELETEv1TodoById(id);
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      alert(`Delete error: ${error}`);
    }
  };

  const handleChangePage = async (page) => {
    try {
      const resp = await GETv1TodoList("?current_page=" + page);
      const items = resp.items;

      if (items) {
        setTodos(items.data);
        setPagination({
          currentPage: items.current_page,
          perPage: items.per_page,
          totalCount: items.total_count,
          totalPage: items.total_page,
        });
      };
    } catch (error) {
      alert(`get list error with pagination: ${error}`);
    }
  };

  useEffect(() => {
    try {
      async function fetchData() {
        const resp = await GETv1TodoList();
        const items = resp.items;

        if (items) {
          setTodos(items.data);
          setPagination({
            currentPage: items.current_page,
            perPage: items.per_page,
            totalCount: items.total_count,
            totalPage: items.total_page,
          });
        }
      };

      fetchData();
    } catch (error) {
      console.log(`🚀 ~ useEffect ~ error`, error);
    }
  }, [])

  return (
    <div>
      <div className="bg-gray-700 grid gap-6 mb-6 md:grid-cols-4 p-5 rounded">
        <div className='flex flex-col'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">名稱</label>
          <input type="text" id="name" className="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="請輸入名稱" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">狀態</label>
          <Select
            instanceId={uniqueId}
            isMulti
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={[
              { label: "已完成", value: "1" },
              { label: "未完成", value: "0" },
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
      </div>


      <div className="px-12 text-center">
        <div className="w-fit bg-cyan-300 rounded ml-auto py-3 px-5 mb-6">
          <Link href="/todo-list/create">
            Create
          </Link>
        </div>
        <ul>
          {todos.length > 0 ? (
            todos.map(todo => (
              <TodoItem key={`__todo-item__${todo.id}`} todo={todo} handleCheck={handleCheck} handleDelete={handleDelete} />
            ))
          ) : (
            <li>
              Empty list
            </li>
          )}
        </ul>
        {pagination.totalPage > 0 && (
          <ul className="inline-flex items-center -space-x-px">
            <li className="block ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <button type="button" className="px-3 py-2" disabled={pagination.currentPage === 1} onClick={() => handleChangePage(pagination.currentPage - 1)}>
                <span className="sr-only">Previous</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
              </button>
            </li>
            {Array(pagination.totalPage + 10).fill(0).map((_, page) => (
              <li key={page} className="leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <button type="button" className="px-3 py-2" onClick={() => handleChangePage(page + 1)}>
                  <span>{page + 1}</span>
                </button>
              </li>
            ))}
            <li className="block leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <button type="button" className="px-3 py-2" disabled={pagination.currentPage === pagination.totalPage} onClick={() => handleChangePage(pagination.currentPage + 1)}>
                <span className="sr-only">Next</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default PageComponent;