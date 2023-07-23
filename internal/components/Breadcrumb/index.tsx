import { Fragment } from 'react'
import Link from "next/link";
import Icon from "@/components/Icon";

type Props = {
  breadcrumbs: string[];
  separator?: string;
}

const Breadcrumb = ({ breadcrumbs = [], separator = '/' }: Props) => {
  if (!breadcrumbs.length) return null

  return (
    <ul className="flex items-center px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
      {breadcrumbs.map((breadcrumbName, breadcrumbIdx) => (
        <Fragment key={breadcrumbName}>
          {breadcrumbIdx > 0 && <span className="mx-2">{separator}</span>}
          <li>
            <Link href="/" className="flex items-center text-white">
              <Icon iconName={breadcrumbName} iconClassName="mr-1" iconScale="1.4" />
              {breadcrumbName.toLocaleUpperCase()}
            </Link>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

export default Breadcrumb