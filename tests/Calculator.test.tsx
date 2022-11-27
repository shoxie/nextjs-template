import { fireEvent, render, screen, act } from "@testing-library/react";
import Calculator from "../src/modules/Calculator";

describe("Calculator", () => {
  it("renders calculator UI", () => {
    render(<Calculator />);

    expect(screen.getByTestId("number-a")).toBeInTheDocument();
    expect(screen.getByTestId("number-b")).toBeInTheDocument();
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });
  it("can add numbers", () => {
    render(<Calculator />);
    const inputa = screen.getByTestId("number-a");
    const inputb = screen.getByTestId("number-b");
    const button = screen.getByTestId("add");

    act(() => {
      fireEvent.change(inputa, { target: { value: 10 } });
      fireEvent.change(inputb, { target: { value: 20 } });
      button.click();
    });
    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("30");
  });

  it("can subtract numbers", async () => {
    render(<Calculator />);
    const inputa = screen.getByTestId("number-a");
    const inputb = screen.getByTestId("number-b");
    const button = screen.getByTestId("subtract");

    act(() => {
      fireEvent.change(inputa, { target: { value: 20 } });
      fireEvent.change(inputb, { target: { value: 10 } });
      button.click();
    });

    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("10");
  });

  it("can multiply numbers", async () => {
    render(<Calculator />);
    const inputa = screen.getByTestId("number-a");
    const inputb = screen.getByTestId("number-b");
    const button = screen.getByTestId("multiply");

    act(() => {
      fireEvent.change(inputa, { target: { value: 10 } });
      fireEvent.change(inputb, { target: { value: 20 } });
      button.click();
    });

    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("200");
  });

  it("can divide numbers", async () => {
    render(<Calculator />);
    const inputa = screen.getByTestId("number-a");
    const inputb = screen.getByTestId("number-b");
    const button = screen.getByTestId("divide");

    act(() => {
      fireEvent.change(inputa, { target: { value: 20 } });
      fireEvent.change(inputb, { target: { value: 10 } });
      button.click();
    });
    const result = screen.getByTestId("result");
    expect(result).toHaveTextContent("2");
  });
});
