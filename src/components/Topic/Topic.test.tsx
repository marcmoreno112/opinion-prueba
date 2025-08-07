import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Topic from "./Topic";

describe("Given an Topic component", () => {
  test("should render the text passed as prop", () => {
    const testText = "Testing title";

    render(<Topic text={testText} />);

    const textElement = screen.getByText(testText);
    expect(textElement).toBeInTheDocument();
  });
});
