import BottomNavbar from "@/components/BottomNavbar";
import DateRecorder from "@/pages/dateRecorder/DateRecorder.jsx";
import { Column } from "leo-react/dist";

function DateRecorderPage({setPage}) {
    return <div>
      <Column crossAxisAlignment="center">
        <h1> 月经记录器</h1>
        <DateRecorder></DateRecorder>
      </Column>
      <BottomNavbar
          setPage={setPage}
        />
    </div>;
}
  
export default DateRecorderPage;