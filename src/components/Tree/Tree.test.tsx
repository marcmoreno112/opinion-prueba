import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Tree from "./Tree";

describe("Given a Tree component", () => {
  describe("When rendered", () => {
    const expectedText = "Test text";

    const expectedTopics = ["first topic", "second topic", "third topic"];

    const buttonText = "Start";

    const explanations = ["Explanation 1", "Explanation 2", "Explanation 3"];

    const testFunction = () => {};

    test("Then it should show the text passed as prop", () => {
      render(
        <Tree
          title={expectedText}
          topics={expectedTopics}
          buttonText={buttonText}
          handleClick={testFunction}
          explanations={explanations}
        />,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should render the list of topics", () => {
      render(
        <Tree
          title={expectedText}
          topics={expectedTopics}
          buttonText={buttonText}
          handleClick={testFunction}
          explanations={explanations}
        />,
      );

      expectedTopics.forEach((topic) => {
        const topicElement = screen.getByText(topic);
        expect(topicElement).toBeInTheDocument();
      });
    });

    test("Then it should show a button", () => {
      render(
        <Tree
          title={expectedText}
          topics={expectedTopics}
          buttonText={buttonText}
          handleClick={testFunction}
          explanations={explanations}
        />,
      );

      const button = screen.getByText(buttonText);

      expect(button).toBeInTheDocument();
    });

    test("Then it should call handleClick when the button is clicked", () => {
      const handleClick = vi.fn();

      render(
        <Tree
          title={expectedText}
          topics={expectedTopics}
          buttonText={buttonText}
          handleClick={handleClick}
          explanations={explanations}
        />,
      );

      const button = screen.getByRole("button", { name: buttonText });
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalled();
    });
  });
});
