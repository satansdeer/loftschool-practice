import React from "react";
import { render } from "@testing-library/react";
import { ExampleContext, ExampleProvider } from "./ExampleContext";
import { act } from "react-dom/test-utils";

describe("ExampleContext", () => {
  describe("increment", () => {
    it("increments count by 1", () => {
      let increment;

      const { container } = render(
        <ExampleProvider>
          <ExampleContext.Consumer>
            {(value) => {
              increment = value.increment;
              return <>{value.count}</>;
            }}
          </ExampleContext.Consumer>
        </ExampleProvider>
      );

      expect(container.innerHTML).toMatch("0")

      act(() => {
        increment()
      })

      expect(container.innerHTML).toMatch(/^1$/)
    });
  });

  describe("decrement", () => {
    it("decrements count by 1", () => {
      let decrement;

      const { container } = render(
        <ExampleProvider>
          <ExampleContext.Consumer>
            {(value) => {
              decrement = value.decrement;
              return <>{value.count}</>;
            }}
          </ExampleContext.Consumer>
        </ExampleProvider>
      );

      expect(container.innerHTML).toMatch("0")

      act(() => {
        decrement()
      })

      expect(container.innerHTML).toMatch(/^-1$/)
    });
  });
});
