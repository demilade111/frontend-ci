import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, expect, it } from "vitest";

describe("App component", () => {
  it("renders button", () => {
    render(<App />);
    expect(screen.getByText(/Get Backend Message/i)).toBeInTheDocument();
  });

  it("updates message after button click", async () => {
    render(<App />);
    fireEvent.click(screen.getByText(/Get Backend Message/i));

    const message = await screen.findByText(/Hello from frontend!/i);
    expect(message).toBeInTheDocument();
  });
});
