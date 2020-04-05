import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

const PAGES = {
  foo: <>FOO</>,
  bar: <>BAR</>
}

describe("App", () => {
  it("renders correctly", () => {
    const {container } = render(<App pages={PAGES} initialPage="foo"/>)
    expect(container).toMatchSnapshot()
  })

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const {debug, getByText, getByTestId } = render(<App pages={PAGES} initialPage="foo"/>)
      const barButton = getByText("bar");
      // debug()
      fireEvent.click(barButton)
      // debug()
      expect(getByTestId("container")).toHaveTextContent("BAR")
    })
  })
})