import { useEffect, useState } from "react";

export default function useColor(type, demography, tags = []) {
  const [typeColor, setTypeColor] = useState("");
  const [demographyColor, setDemographyColor] = useState("");
  const [ecchi, setEcchi] = useState(false)

  useEffect(() => {
    switch (type) {
      case "Manga":
        setTypeColor("#7986cb");
        break;
      case "Manhwa":
        setTypeColor("#81c784");
        break;
      default:
        setTypeColor("#e57373");
    }
    switch (demography) {
      case "Seinen":
        setDemographyColor("rgba(255,0,0,.75)");
        break;
      case "Shounen":
        setDemographyColor("rgba(255,165,0,.75)");
        break;
      default:
        setDemographyColor("rgba(0,0,0,.6)");
    }
    for (let tag of tags) {
      if(tag === 'Erótico') setEcchi(true)
    }
  }, [type, demography, tags]);

  return { typeColor, demographyColor, ecchi };
}
