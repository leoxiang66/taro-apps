import BottomNavbar from "@/components/BottomNavbar";
import { windowWidth, windowHeight } from "@/components/sysinfo";
import { Container } from "leo-react/dist";

function AboutPage({ setPage }) {
  return (
    <div>
      <Container
        width={`${windowWidth}px`}
        backgroundColor="#EAEFF5"
        height={`${windowHeight}px`}
        borderRadius="20px 20px 0 0"
      >
        <p>这是一个以学习交流为目的的小程序, 请勿用于商业途径.</p>
        <p>程序语言: React.js</p>
        <p>框架: Taro</p>
      </Container>
      <BottomNavbar setPage={setPage}></BottomNavbar>
    </div>
  );
}

export default AboutPage;
