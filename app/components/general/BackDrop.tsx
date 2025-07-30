"use client";
import TwitterLogo from "../social-svgs/TwitterLogo";
import LinkedInLogo from "../social-svgs/LinkedInLogo";
import GitHubLogo from "../social-svgs/GitHubLogo";
import Link from "next/link";

export default function BackDrop({
  hasTitle = false,
  title = "",
  description,
  isHeroBox = false,
}: {
  hasTitle?: boolean;
  title?: string;
  description: string;
  isHeroBox?: boolean;
}) {
  return (
    <div className="mx-6 p-[5px] rounded-xl bg-gradient-to-b from-[#AE1B55] via-[#001A2E] to-[#FFCE74]">
      <div className="p-6 rounded-xl bg-dark-blue relative text-center">
        {hasTitle && <h1>{title}</h1>}
        <p>{description}</p>
        {isHeroBox && (
          <>
            <ul className="flex justify-center m-2 mb-4 list-none">
              <li className="mx-2 list-none">
                <LinkedInLogo></LinkedInLogo>
              </li>
              <li className="mx-2 list-none">
                <GitHubLogo></GitHubLogo>
              </li>
              <li className="mx-2 list-none">
                <TwitterLogo></TwitterLogo>
              </li>
            </ul>
            <Link className="absolute right-2 bottom-2" href="/about-me">
              {`More About Me >`}{" "}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
