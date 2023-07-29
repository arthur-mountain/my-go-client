import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Buttons/Button";

type Props = {
  handleLogout: () => Promise<void>;
}

const LayoutNavbar = ({ handleLogout }: Props) => {
  return (
    <nav className="h-full bg-white border-gray-200 dark:bg-gray-900">
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
  )
}

export default LayoutNavbar