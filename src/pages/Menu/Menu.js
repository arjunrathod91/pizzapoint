import React, { useContext, useEffect } from "react";
import "../Menu/Menu.css";
import allItems from "../../data/menu";
import { Context } from "../../context/Context";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Card from "../../components/Card/Card";

function Menu() {
  const { category, setCategory } = useContext(Context);

  const press = () => {
    console.log(allItems);
  };

  const categoryItems = allItems.filter((item) => item.category === category);

  useEffect(() => {}, []);

  

  return (
    <div className="menus">
      {/* <div className='heading'>
            <p onClick={press}>Menu</p>
        </div> */}
      <div>
        <h3>{category}</h3>
        <div className="tank">
          {categoryItems.map((item,index) => (
            <Card item={item} index={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
