import { Floating, Row, Sizedbox } from "leo-react/dist";
import NavbarItem from "./NavbarItem";
import Taro from '@tarojs/taro';



function BottomNavbar() {
  return (
    <Floating bottom="0%">
      <div
        style={{
          width: `${Taro.getSystemInfoSync().windowWidth}px`,
          height: "50px",
          backgroundColor: "tranparent",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)", // 添加阴影效果
        }}
      >
              
            <Sizedbox height={10}></Sizedbox>
            <Row mainAxisAlignment="space-around">
              <NavbarItem name="主页" iconName="home" iconFamily="solid" />
              <NavbarItem name="关于" iconName="address-card" iconFamily="solid" />
              <NavbarItem name="联系" iconName="weixin" iconFamily="brand" />
            </Row>

      </div>
    </Floating>
  );
}

export default BottomNavbar;
