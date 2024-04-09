import { Floating, Row, Sizedbox } from "leo-react/dist";
import NavbarItem from "./NavbarItem";
import "./sysinfo";
import { windowWidth } from "./sysinfo";

function BottomNavbar({ setPage }) {
  return (
    <Floating bottom="0%">
      <div
        style={{
          width: `${windowWidth}px`,
          height: "50px",
          backgroundColor: "tranparent",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.8)", // 添加阴影效果
        }}
      >
        <Sizedbox height={10}></Sizedbox>
        <Row mainAxisAlignment="space-around">
          <NavbarItem
            name="主页"
            iconName="home"
            iconFamily="solid"
            onClick={() => setPage("index")}
          />
          <NavbarItem
            name="关于"
            iconName="address-card"
            iconFamily="solid"
            onClick={() => setPage("about")}
          />
          <NavbarItem
            name="提交BUG"
            iconName="bug"
            iconFamily="solid"
            onClick={() => setPage("contact")}
          />
        </Row>
      </div>
    </Floating>
  );
}

export default BottomNavbar;
