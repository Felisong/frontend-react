"use client";

export default function NavList({
  navigationSelect,
}: {
  navigationSelect: { name: string; url: string }[];
}) {
  return (
    <>
      {navigationSelect.map((listItem) => (
        <li className="mx-8 text-xl" key={listItem.name}>
          <a href={listItem.url}>{listItem.name}</a>
        </li>
      ))}
    </>
  );
}
