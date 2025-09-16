import "./tabs.css";
import { useMediaQuery } from "usehooks-ts";
import News from "../News";
import Press from "../Press";
import Publications from "../Publications";
import Research from "../Research";
import { Fragment, useState, type ReactNode } from "react";

const tabsMobile = ["Research", "Publications", "Press", "News"];
const tabsDesktop = ["Research", "Publications", "Press"];
const tabsMap: { [key: string]: ReactNode } = {
  "Research": <Research />,
  "Publications": <Publications />,
  "Press": <Press />,
  "News": <News />,
};

export default function TabSelection() {
  const mobileView = useMediaQuery("(max-width: 768px)");
  const tabs = mobileView ? tabsMobile : tabsDesktop;

  const [selectedTab, setSelectedTab] = useState<string>("Research");

  return (
    <div id="main-content">
      {/* News sidebar if on desktop */}
      {!mobileView && (
        <div id="news-sidebar">
          <h2>News</h2>
          <News />
        </div>
      )}

      {/* Tabs and selected content */}
      <div>
        <div id="tab-group">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab ${tab === selectedTab ? "selected" : ""}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div id="tab-content">{tabsMap[selectedTab]}</div>
      </div>
    </div>
  );
}
