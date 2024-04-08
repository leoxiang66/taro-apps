import { View } from "@tarojs/components";
import { Component } from "react";
import MessageComponent from "@/components/MessageComponent";
import { Column, Placeholder } from "leo-react";
import Calculator from "@/components/Calculator";

class Index extends Component {
  state = {
    msg: "Hello World!",
  };

  onReady() {
    console.log("onReady");
  }

  render() {
    return (
      <div>
        <h1> 迷你计算器</h1>
        <Calculator></Calculator>
      </div>
    );
  }
}

export default Index;
