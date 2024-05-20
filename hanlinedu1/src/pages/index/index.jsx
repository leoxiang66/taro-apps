import React from "react";
import BottomNavbar from "../../components/BottomNavbar";
import {
  Floating,
  Sizedbox,
  SingleScrollable,
  FullScreen,
  Placeholder,
  Padding,
} from "leo-react/dist";

import "./index.scss";

function LandingPage() {
  return (
    <FullScreen>
      <Sizedbox width="100%" height="88%">
        <SingleScrollable>
          <Padding all="2%">
            <Placeholder height="500px" width="100%" />
          </Padding>
        </SingleScrollable>
      </Sizedbox>

      <Floating bottom="0">
        <Sizedbox width="100vw" height="10%">
          <BottomNavbar />
        </Sizedbox>
      </Floating>
    </FullScreen>
  );
}

export default LandingPage;
