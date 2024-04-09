import React, { useState } from "react";
import CalculatorPage from "../calculator";
import { Column, Container, Row, Sizedbox } from "leo-react/dist";
import BottomNavbar from "@/components/BottomNavbar";
import { windowHeight, windowWidth } from "@/components/sysinfo";
import Card from "@/components/Card";
import AboutPage from "../about";
import ContactPage from "../contact";

function Index() {
  const [currentPage, setCurrentPage] = useState("index");

  // 用于代替 setPage 方法
  const setPage = (newPage) => {
    setCurrentPage(newPage);
  };

  const buildIndexPage = () => {
    const vspace20 = <Sizedbox height={20} />;
    const hspace20 = <Sizedbox width={20} />;

    return (
      <div>
        <Container
          width={`${windowWidth}px`}
          backgroundColor="#EAEFF5"
          height={`${windowHeight}px`}
          borderRadius="20px 20px 0 0"
        >
          <Column crossAxisAlignment="center">
            {vspace20}
            <h1>欢迎来到迷你工具箱 2024</h1>
            {vspace20}
            <Row mainAxisAlignment="space-around">
              <Card title={"计算器"} onClick={() => setPage("cal")} />
              {hspace20}
              <Card title={"敬请期待"} onClick={() => {}} />
            </Row>
            {vspace20}
            <Row mainAxisAlignment="space-around">{hspace20}</Row>
          </Column>
        </Container>
        <BottomNavbar setPage={setPage} />
      </div>
    );
  };

  switch (currentPage) {
    case "index":
      return buildIndexPage();
    case "cal":
      return <CalculatorPage setPage={setPage} />;
    case "about":
      return <AboutPage setPage={setPage}></AboutPage>;
    case "contact":
      return <ContactPage setPage={setPage}></ContactPage>;
    default:
      return buildIndexPage();
  }
}

export default Index;
