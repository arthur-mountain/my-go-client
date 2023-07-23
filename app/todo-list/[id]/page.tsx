'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { GETv1TodoById, POSTv1TodoCreate, PUTv1TodoUpdate } from "@/services/Todo";

const TodoListPage = "/todo-list";

type Props = {
  params: any;
}

function PageComponent({ params }: Props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [stateTitle, setStateTitle] = useState<string>("");
  const [stateDesc, setStateDesc] = useState<string>("");

  useEffect(() => {
    const id = Number(params.id);
    if (id) {
      GETv1TodoById(id);
    }
    setIsEdit(!!id);
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!stateTitle) return;

    try {
      const data = { title: stateTitle, description: stateDesc }

      if (isEdit) {
        params.id && await PUTv1TodoUpdate(params.id, data);
      } else {
        await POSTv1TodoCreate(data);
      }

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