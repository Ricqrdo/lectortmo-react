import React from "react";

import "./Item.css";
import Button from '@material-ui/core/Button';
import {useLocation} from "react-router-dom";

export function Item({ Icon, title, list, color, setList, activeList}) {
  let location = useLocation();

  const StyleActive = {
    background: 'rgba(0, 0, 0, 0.5)'
  }

  const handleClick = ()=>{
    if(location.pathname.includes('/user')){
      setList(list)
    }
  }

  return (
    <Button 
      aria-label={title} 
      variant="contained" 
      onClick={handleClick}
      style={activeList === list ? StyleActive : null}
      >
      <Icon style={{color: color}} />
      <span >{title}</span>
    </Button>
  );
}

export function UploadItem({title, list, color, setUpload, activeUpload}) {
  let location = useLocation();

  const StyleActive = {
    background: 'rgba(0, 0, 0, 0.5)'
  }

  const handleClick = ()=>{
    if(location.pathname.includes('/user')){
      setUpload(list)
    }
  }

  return (
    <Button 
      aria-label={title} 
      size='medium'
      variant="contained" 
      onClick={handleClick}
      style={activeUpload === list ? StyleActive : null}
      >
      <span style={{color: color}}>{title}</span>
    </Button>
  );
}
