'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;

}
export const SidebarMenu = ( { path, icon, title, subTitle }: Props ) => {

  const CurrentPath = usePathname();
  return (
    <Link
      href={path}
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3  hover:bg-white/5 transition ease-linear duration-150 ${ CurrentPath === path ? "bg-blue-800" : "" }`}
    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">  
          <span className="text-white/50 ml-2">{title}</span>
        </span>
        <span className="text-sm text-white/50 hidden md:block ml-2">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
