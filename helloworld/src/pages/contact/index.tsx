import BottomNavbar from "@/components/BottomNavbar";
import { windowWidth, windowHeight } from "@/components/sysinfo";
import { Container } from "leo-react/dist";

function ContactPage({ setPage }) {
  return (
    <div>
      <Container
        width={`${windowWidth}px`}
        backgroundColor="#EAEFF5"
        height={`${windowHeight}px`}
        borderRadius="20px 20px 0 0"
      >
        请联系我: Leoxiaz
      </Container>
      <BottomNavbar setPage={setPage}></BottomNavbar>
    </div>
  );
}

export default ContactPage;
