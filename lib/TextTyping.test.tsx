import { screen, render, waitFor } from "@testing-library/react";
import TextTyping from "./";
import { expect, it } from 'vitest';


it("should render component", async () => {
  const text = "rice";
  createComponent({ text, speed: 1 });
  await waitFor(() => screen.getByText(text));
  expect(screen.getByText(text)).toBeDefined();
});

it("should render component with not show blink", async () => {
  const text = "rice";
  createComponent({ showBlink: false, text, speed: 1 });
  await waitFor(() => screen.getByText(text));
  expect(screen.getByText(text)).toBeDefined();
});

it("Should render component with default speed", async () => {
  const text = "rice";
  createComponent({ text });
  await new Promise((resolve) => setTimeout(resolve, 4000));
  expect(screen.getByText(text)).toBeDefined();
});

function createComponent(props = {}) {
  const defaultProps = {
    text: "Example",
    ...props,
  };

  return render(<TextTyping {...defaultProps} />);
}
