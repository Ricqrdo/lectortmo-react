import React, { useContext } from "react";

import SectionButton from "../../components/section-button/SectionBotton";
import { LoadedSectionContext } from "../../hooks/loadedSectionContext";
import FilesMainContainer from "./FilesMainContainer";

import "./SectionsHandler.css";

export default function SectionsHandler() {
  const { activeSections } = useContext(LoadedSectionContext);
  const [activeSection, setActiveSection] = activeSections;

  const bottonActive = (title) => {
    setActiveSection(
      activeSection.map((section) =>
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
    <div className="sectionsHandler">
      <div className="sectionsHandler__header">
        {activeSection.map((section, _x) =>
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
      <div className="sectionsHandler__files">
        {activeSection[0].active === true && <FilesMainContainer search='trending'/>}
        {activeSection[1].active === true && <FilesMainContainer search='seinen'/>}
        {activeSection[2].active === true && <FilesMainContainer search='shounen'/>}
      </div>
    </div>
  );
}
