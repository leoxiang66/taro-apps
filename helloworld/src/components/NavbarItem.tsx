import { Clickable } from "leo-react/dist";
import React from "react";
// 引入 FontAwesome 组件和图标库
import { FontAwesome } from "taro-icons";

// NavbarItem 组件实现
const NavbarItem = ({ name, iconName, iconFamily, onClick }) => {
  return (
    <Clickable onClick={() => onClick()}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome family={iconFamily} name={iconName} size={22} />
        <span style={{ fontSize: 11 }}>{name}</span>
      </div>
    </Clickable>
  );
};

export default NavbarItem;
