import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles';

const colorData = [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff",
      },
      id: 3,
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4",
      },
      id: 4,
    },
]

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  render(<Bubbles colors={colorData} />);

  const color = screen.findByText(/aliceblue/i);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading