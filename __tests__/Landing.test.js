import { render, screen, fireEvent } from "@testing-library/react";
import Landing from "../src/Pages/Landing";

test("Displays form and submits value", () => {
  render(<Landing />);

  const surname = screen.getAllByDisplayValue("surname");
  fireEvent.change(surname, { target: { value: "test input" } });
  expect(surname.values).toBe("test input")
});
