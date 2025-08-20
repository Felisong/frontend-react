"use client";

import Link from "next/link";

export default function NavList({
  navigationSelect,
  isMobile = false,
  closeMenu,
}: {
  navigationSelect: { name: string; url: string; currentPage: boolean }[];
  isMobile?: boolean;
  closeMenu?: (value: boolean) => void;
}) {
  // dispatch successfuly redirect to close the menu
  const closeDropdown = () => {
    if (closeMenu) closeMenu(false);
  };

  return (
    <>
      {navigationSelect.map((listItem, index) => (
        <li className="mx-8 text-xl list-none" key={listItem.name}>
          <Link
            className={`hover:text-bright-yellow ${
              listItem.currentPage ? "text-supplement-white" : ""
            }`}
            href={listItem.url}
            onClick={() => {
              closeDropdown();
            }}
          >
            {listItem.name}
          </Link>
          {isMobile && index < navigationSelect.length - 1 && (
            <hr className="my-4" />
          )}
        </li>
      ))}
    </>
  );
}
