'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

const TodoListPage = "/todo-list";

function PageComponent({ params }) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(null);
  const [stateTitle, setStateTitle] = useState("");
  const [stateDesc, setStateDesc] = useState("");

  useEffect(() => {
    const fetchTodo = async (id) => {
      if (!id) return;

      const url = `${process.env.NEXT_PUBLIC_BASE_URL}/todo/${id}`
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
      const todo = await res.json();
      setStateTitle(todo.items.title);
      setStateDesc(todo.items.description);
    };

    const id = Number(params.id);
    setIsEdit(!!id);
    fetchTodo(id);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!stateTitle) return;

    try {
      const url = isEdit ? `${process.env.NEXT_PUBLIC_BASE_URL}/todo/${params.id}` : `${process.env.NEXT_PUBLIC_BASE_URL}/todo/create`;
      const method = isEdit ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({
          title: stateTitle,
          description: stateDesc,
        })
      });

      router.push(TodoListPage)
    } catch (error) {
      console.log("submit error:", error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col mb-4">
          <label className="mb-1">Title:</label>
          <input className="text-gray-700 p-2" type="text" value={stateTitle} onChange={(e) => setStateTitle(e.target.value)} placeholder="請輸入主題" />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1">Description:</label>
          <textarea className="text-gray-700 h-48 p-2" value={stateDesc} onChange={(e) => setStateDesc(e.target.value)} placeholder="請輸入內容" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="bg-teal-500 mr-3 p-3 px-5 rounded-lg">
            {isEdit ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PageComponent;