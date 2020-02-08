import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  getByText
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

describe("App", () => {
  describe("validation", () => {
    it("shows validation error when age is not a number", async () => {
      const { container, debug } = render(<App />);

      // Why async https://react-hook-form.com/faqs#TestingReactHookForm
      await act(async () => {
        const ageInput = getByTestId(container, "age");
        fireEvent.input(ageInput, { target: { value: "test" } });

        const submitButton = getByText(container, "Submit");
        fireEvent.click(submitButton);
      });

      // debug();
      expect(container).toHaveTextContent(
        'age must be a `number` type, but the final value was: `NaN` (cast from the value `"test"`).'
      );
    });
  });
});
