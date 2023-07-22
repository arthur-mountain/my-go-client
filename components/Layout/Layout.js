/* eslint-disable @next/next/no-head-element */
'use client';
import { Fragment } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegments } from "next/navigation";
import useClientAuth from "@/hooks/useClientAuth";
import Icon from "@/components/Icon";
import Button from "@/components/Buttons/Button";
import IconButton from "@/components/Buttons/IconButton";

const pages = [
  { title: "TodoList", href: "/todo-list" },
  { title: "Activity", href: "/activity" },
];
const socialIcons = ['facebook', 'instagram', 'twitter', 'github', 'dribbbel'];

function RootLayout({ children }) {
  const breadcrumbs = useSelectedLayoutSegments()
  const {
    state: { isShowChildren, stateErrMsg },
    action: { handleLogout }
  } = useClientAuth();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <div>
            <Link href="/" className="flex items-center">
              <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">🤎</span>
            </Link>
          </div>
          <div className="flex items-center">
            <span className="text-white">TEST</span>
            <Image
              src="https://images.unsplash.com/photo-1542189736-67ca49d5342b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="avatar"
              width={50}
              height={50}
              style={{ margin: '0 0.5rem' }}
            />
            <Button
              type="button"
              className="text-white"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>
      <section className="flex">
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

        <section className="grow bg-black">
          <ul className="flex items-center px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            {["home", ...breadcrumbs].map((breadcrumbName, breadcrumbIdx) => (
              <Fragment key={breadcrumbName}>
                {breadcrumbIdx > 0 && <span className="mx-2">/</span>}
                <li>
                  <Link href="/" className="flex items-center text-white">
                    <Icon iconName={breadcrumbName} iconClassName="mr-1" iconScale="1.4" />
                    {breadcrumbName.toLocaleUpperCase()}
                  </Link>
                </li>
              </Fragment>
            ))}
          </ul>
          <main className="p-6 pb-96 text-white">
            <div className="text-red-900 text-center text-7xl mb-12">
              {stateErrMsg}
            </div>
            {isShowChildren && children}
          </main>
          <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
            <div className="md:flex md:justify-between">
              <div className="mb-6 flex items-center content-center md:mb-0">
                <Link href="/" className="flex items-center">
                  <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">🤎</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                      <Link href="/" className="hover:underline">Next13</Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/" className="hover:underline">Golang</Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">Tailwind CSS</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                      <Link href="#" className="hover:underline ">Github</Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">Discord</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                      <Link href="#" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline">Terms &amp; Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">🤎</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                {socialIcons.map((iconName) => (
                  <Link key={iconName} href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <IconButton iconName={iconName} />
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </section>
      </section>
    </>
  );
}

export default RootLayout;