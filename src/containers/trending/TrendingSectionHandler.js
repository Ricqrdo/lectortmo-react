import React, { useContext } from "react";

import SectionButton from "../../components/section-button/SectionBotton";
import { LoadedSectionContext } from "../../hooks/loadedSectionContext";
import TrendingContainer from "./TrendingContainer";
import TrendingSeinenContainer from "./TrendingSeinenContainer";
import TrendingShonenContainer from "./TrendingShonenContainer";

import "./TrendingSectionHandler.css";

export default function TrendingSectionHandler() {
  const { activeTrendings } = useContext(LoadedSectionContext);
  const [activeTrending, setActiveTrending] = activeTrendings;

  const bottonActive = (title) => {
    setActiveTrending(
      activeTrending.map((section) =>
        section.title === title
          ? { ...section, active: true }
          : { ...section, active: false }
      )
    );
  };

  const activeStyles = {
    backgroundStyle: { background: "#2957ba" },
    textStyle: { color: "#f1f1f1" },
    iconStyle: { color: "#f1f1f1" },
  };

  return (
    <div className="trendingSectionHandler">
      <div className="trendingSectionHandler__header">
        {activeTrending.map((section, _x) =>
          section.active === true ? (
            <SectionButton
              key={_x}
              Icon={section.Icon}
              title={section.title}
              bottonActive={bottonActive}
              {...activeStyles}
              active={section.active}
            />
          ) : (
            <SectionButton
              key={_x}
              Icon={section.Icon}
              title={section.title}
              bottonActive={bottonActive}
              active={section.active}
            />
          )
        )}
      </div>
      <div className="trendingSectionHandler__files">
        {activeTrending[0].active === true && <TrendingContainer />}
        {activeTrending[1].active === true && <TrendingSeinenContainer />}
        {activeTrending[2].active === true && <TrendingShonenContainer />}
      </div>
    </div>
  );
}
