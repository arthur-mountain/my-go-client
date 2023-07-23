import type { Route } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";

const pages: { title: string; href: Route; }[] = [
  { title: "TodoList", href: "/todo-list" },
  { title: "Activity", href: "/activity" },
];

const LayoutSidebar = () => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="py-4 px-3">
          {pages.map(({ title, href }) => (
            <li key={title}>
              <Link href={href} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <Icon iconName="circle" />
                <span className="ml-3">{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default LayoutSidebar