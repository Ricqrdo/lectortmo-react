import React from "react";

import FileItem from "../../components/file-item/FileItem";

import "./TrendingContainer.css";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";

const bg = "url('https://otakuteca.com/images/books/cover/5d79a4c7e7f1f.jpg')";

export default function TrendingMangasContainer() {
  return (
    <div className="trendingContainer">
      <h2>Trending</h2>
      <FileItem
        title="Shingeky no kyojin"
        IconStar={StarIcon}
        type="Manga"
        rating="10.00"
        IconType={FavoriteIcon}
        demography="Shounen"
        bg={bg}
      />
    </div>
  );
}
