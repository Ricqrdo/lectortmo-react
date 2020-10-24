import React from "react";

import "./Item.css";
import Button from '@material-ui/core/Button';
import {useLocation} from "react-router-dom";

export default function Item({ Icon, title, list, color, setList, activeList}) {
  let location = useLocation();

  const StyleActive = {
    background: 'rgba(0, 0, 0, 0.5)'
  }

  const textStyle ={
    display: 'inline-block',
    width: '100%',
    fontSize: "10px",
    color: '#bfbfbf'
  }

  const handleClick = ()=>{
    if(location.pathname.includes('/user')){
      setList(list)
    }
  }

  return (
    <Button 
      aria-label={title} 
      size='medium'
      variant="contained" 
      onClick={handleClick}
      style={activeList === list ? StyleActive : null}
      >
      <Icon style={{color: color, fontSize: 'xx-large'}} />
      <span style={textStyle}>{title}</span>
    </Button>
  );
}
