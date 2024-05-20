import React from "react";
import { View, Text } from "@tarojs/components";
import { Button } from "@nutui/nutui-react-taro";
import BottomNavbar from "../../components/BottomNavbar";
import {
  Floating,
  Sizedbox,
  SingleScrollable,
  FullScreen,
  Placeholder,
} from "leo-react/dist";

import "./index.scss";

function LandingPage() {
  return (
    <FullScreen>
      <Sizedbox width="100%" height="90%">
        <SingleScrollable>
          <Placeholder height="500px" width="100%"/>
        </SingleScrollable>
      </Sizedbox>

      <Floating bottom="0">
        <Sizedbox width="100vw">
          <BottomNavbar />
        </Sizedbox>
      </Floating>
    </FullScreen>
  );
}

export default LandingPage;
