import BottomNavbar from "@/components/BottomNavbar";
import Calculator from "@/components/Calculator";
import { Column } from "leo-react/dist";

function CalculatorPage({setPage}) {
    return <div>
      <Column crossAxisAlignment="center">
        <h1> 迷你计算器</h1>
        <Calculator></Calculator>
      </Column>
      <BottomNavbar
          setPage={setPage}
        />
    </div>;
}
  
export default CalculatorPage;