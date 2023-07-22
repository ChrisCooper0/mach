import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../page";

describe("Page", () => {
  const run = () => render(<Home />);
  test("renders todos", () => {
    run();

    expect(screen.getByText("todo 1")).toBeInTheDocument();
  });

  test("removes todo onClick of delete icon", async () => {
    const user = userEvent.setup();

    run();

    expect(screen.getByText("todo 1")).toBeInTheDocument();

    await user.click(screen.getAllByTestId("trash")[0]);

    expect(screen.queryByTestId("todo 1")).not.toBeInTheDocument();
  });
});
