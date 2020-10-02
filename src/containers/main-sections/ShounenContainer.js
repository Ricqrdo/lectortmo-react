import React from "react";

import MangaItem from "../../components/manga-item/MangaItem";
import LoaderButton from "../../components/loader-button/LoaderButton";

import "./MangasContainer.css";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";

const bg = "url(https://otakuteca.com/images/books/cover/5bc8e164a3ea4.jpg)";

export default function MangasContainer() {
  return (
    <div className="mangasContainer">
      <MangaItem
        title="Boko no hero Academia"
        IconStar={StarIcon}
        type="Manga"
        rating="10.00"
        IconType={FavoriteIcon}
        demography="Shounen"
        bg={bg}
      />
      <div className="mangasContainer__button">
        <LoaderButton />
      </div>
    </div>
  );
}