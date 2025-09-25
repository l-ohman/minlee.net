import { useLocation } from "react-router-dom";
import "./header.css";

const headerLinks = [
  "Home",
  "Bio",
  "Research",
  "Publications",
  "Press",
  "News",
];

export default function Header() {
  const currentRoute = useLocation().pathname;
  console.log(currentRoute);
  return (
    <>
      <div id="header">
        <div>
          {headerLinks.map((link) => {
            let url = link;
            if (link === "Home") url = "/";
            else url = `/${link.toLowerCase()}`;
            console.log(currentRoute, url)
            return (
              <a
                key={link}
                href={url}
                className={currentRoute === url ? "current-url" : ""}
              >
                {link}
              </a>
            );
          })}
        </div>
      </div>
      <div aria-hidden id="header-placeholder" />
    </>
  );
}
