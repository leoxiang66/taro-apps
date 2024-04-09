import { View } from "@tarojs/components";
import { Component } from "react";
import MessageComponent from "@/components/MessageComponent";
import { Column } from "leo-react/dist";
import Calculator from "@/components/Calculator";
import React, { useState, useEffect } from 'react';
import BottomNavbar from "@/components/BottomNavbar";

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
        <Column crossAxisAlignment="center">
          <h1> 迷你计算器</h1>
          <Calculator></Calculator>
        </Column>
        <BottomNavbar></BottomNavbar>
      </div>
    );
  }
}

export default Index;







