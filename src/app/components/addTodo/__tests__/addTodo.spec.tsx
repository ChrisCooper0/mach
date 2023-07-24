import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddTodo from "../addTodo";

describe("Page", () => {
  const run = () => render(<AddTodo />);
  test("renders input and submit button", () => {
    run();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("calls api with new todo onClick of submit button", async () => {
    // mock fetch
  });

  test("adds todo onClick of submit button", async () => {
    const user = userEvent.setup();

    run();

    await user.type(screen.getByRole("textbox"), "new todo");

    expect(screen.getByTestId("new todo")).toHaveValue("new todo");
  });
});
