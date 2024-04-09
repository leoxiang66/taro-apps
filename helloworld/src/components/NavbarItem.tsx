import React from "react";
// 引入 FontAwesome 组件和图标库
import { FontAwesome } from "taro-icons";

// NavbarItem 组件的 Props 类型定义，如果你使用 TypeScript
interface NavbarItemProps {
  name: string;
    iconName: string; // 使用 FontAwesome 的图标定义类型
    iconFamily: string;
}

// NavbarItem 组件实现
const NavbarItem: React.FC<NavbarItemProps> = ({ name, iconName, iconFamily }) => {
  return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
              justifyContent: "center",
              
          }}
        >
          <FontAwesome family= {iconFamily} name={iconName} size={22} />
          <span style={{fontSize:11}}>{name}</span>
        </div>

  );
};

export default NavbarItem;
