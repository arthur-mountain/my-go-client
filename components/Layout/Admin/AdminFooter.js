import Link from "next/link";
import IconButton from "@/components/Buttons/IconButton";

const socialIcons = ['facebook', 'instagram', 'twitter', 'github', 'dribbbel'];

const LayoutFooter = () => {
  return (
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
  )
}

export default LayoutFooter