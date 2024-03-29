'use client';
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

type Props = {
  todo: Todo.Schema;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
}

const TodoItem = ({ todo, handleCheck, handleDelete }: Props) => {
  const { id, title, description, is_completed } = todo;
  const router = useRouter();
  const actions = [
    {
      name: "check",
      onClick: async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleCheck(id);
      },
      Component: <AiOutlineCheck color="white" fontSize="1rem" />
    },
    {
      name: "delete",
      onClick: async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleDelete(id);
      },
      Component: <FaTrash color="lightblue" fontSize="1rem" />
    },
  ];

  const handleEdit = () => {
    router.push(`/todo-list/${id}`);
  }

  if (is_completed) {
    return <li className="flex items-center justify-between text-left border border-solid border-cyan-500 mb-3 p-3 rounded-lg">
      <div className="line-through">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </li>
  }

  return (
    <li className="flex items-center justify-between text-left border border-solid border-cyan-500 mb-3 p-3 rounded-lg" style={{ cursor: "pointer" }} onClick={handleEdit}>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div>
        {actions.map(action => (
          <button
            key={`__${action.name}__${id}`}
            type="button"
            className="bg-teal-500 mr-3 p-3 px-5 rounded"
            onClick={action.onClick}
          >
            {action.Component}
          </button>
        ))}
      </div>
    </li>
  );
}

export default TodoItem;