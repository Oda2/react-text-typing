import { render, screen, waitFor } from "@testing-library/react";
import { TextTyping } from "./TextTyping";
import { expect, it, describe, vi } from "vitest";

describe("TextTyping", () => {
  it("renders with text", () => {
    const { container } = render(<TextTyping text="Hello" speed={1000} />);
    expect(container.querySelector(".text-typing")).toBeInTheDocument();
  });

  it("types text character by character", async () => {
    render(<TextTyping text="Hi" speed={50} />);
    await waitFor(() => expect(screen.getByText("H")).toBeInTheDocument(), {
      timeout: 1000,
    });
    await waitFor(() => expect(screen.getByText("Hi")).toBeInTheDocument(), {
      timeout: 1000,
    });
  });

  it("resets when text prop changes", async () => {
    const { rerender } = render(<TextTyping text="First" speed={50} />);
    await waitFor(() => expect(screen.getByText("F")).toBeInTheDocument(), {
      timeout: 1000,
    });

    rerender(<TextTyping text="Second" speed={50} />);
    await waitFor(() => expect(screen.getByText("S")).toBeInTheDocument(), {
      timeout: 1000,
    });
  });

  it("respects custom speed", async () => {
    render(<TextTyping text="Test" speed={100} />);
    await waitFor(() => expect(screen.getByText("T")).toBeInTheDocument(), {
      timeout: 500,
    });
  });

  it("respects showBlink prop", () => {
    const { container: withBlink } = render(
      <TextTyping text="Test" showBlink speed={1000} />,
    );
    expect(withBlink.querySelector(".text-typing")).not.toHaveClass("no-blink");

    const { container: withoutBlink } = render(
      <TextTyping text="Test" showBlink={false} speed={1000} />,
    );
    expect(withoutBlink.querySelector(".text-typing")).toHaveClass("no-blink");
  });

  it("respects colorText prop", () => {
    const { container } = render(
      <TextTyping text="Test" colorText="#ff0000" speed={1000} />,
    );
    const element = container.querySelector(".text-typing");
    expect(element).toHaveStyle({ "--color-text": "#ff0000" });
  });

  it("respects colorTyping prop", () => {
    const { container } = render(
      <TextTyping text="Test" colorTyping="#00ff00" speed={1000} />,
    );
    const element = container.querySelector(".text-typing");
    expect(element).toHaveStyle({ "--color-typing": "#00ff00" });
  });

  it("respects fontSize prop", () => {
    const { container } = render(
      <TextTyping text="Test" fontSize="2em" speed={1000} />,
    );
    const element = container.querySelector(".text-typing");
    expect(element).toHaveStyle({ fontSize: "2em" });
  });

  it("respects timeTyping prop", () => {
    const { container } = render(
      <TextTyping text="Test" timeTyping={5} speed={1000} />,
    );
    const element = container.querySelector(".text-typing");
    expect(element).toHaveStyle({ "--time-typing": "5s" });
  });

  it("calls onComplete when typing is finished", async () => {
    const onComplete = vi.fn();
    render(<TextTyping text="AB" speed={30} onComplete={onComplete} />);
    await waitFor(() => expect(onComplete).toHaveBeenCalled(), {
      timeout: 1000,
    });
  });

  it("accepts custom component", () => {
    const CustomComponent = ({ children, ...props }: any) => (
      <div data-testid="custom" {...props}>
        {children}
      </div>
    );
    render(<TextTyping text="Test" component={CustomComponent} speed={1000} />);
    expect(screen.getByTestId("custom")).toBeInTheDocument();
  });

  it("accepts className prop", () => {
    const { container } = render(
      <TextTyping text="Test" className="my-class" speed={1000} />,
    );
    const element = container.querySelector(".text-typing");
    expect(element).toHaveClass("text-typing my-class");
  });

  it("accepts other HTML props", () => {
    render(<TextTyping text="Test" data-testid="typing" speed={1000} />);
    expect(screen.getByTestId("typing")).toBeInTheDocument();
  });

  it("has correct default values", () => {
    const { container } = render(<TextTyping text="Test" speed={1000} />);
    const element = container.querySelector(".text-typing");
    expect(element).toHaveStyle({ "--color-text": "#fff" });
    expect(element).toHaveStyle({ "--color-typing": "#0075D7" });
  });
});
