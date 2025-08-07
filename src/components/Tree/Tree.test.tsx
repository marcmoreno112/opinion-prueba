import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Tree from "./Tree";

describe("Given a Tree component", () => {
  describe("When rendered", () => {
    const expectedText = "Test text";

    const expectedArgumentos = ["1st argument", "2nd argument", "3rd argument"];

    const buttonText = "Empezar";

    const testFunction = () => {};

    test("Then it should show the text passed as prop", () => {
      render(
        <Tree
          title={expectedText}
          argumentos={expectedArgumentos}
          buttonText={buttonText}
          handleClick={testFunction}
        />,
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    test("Then it should render the list of argumentos", () => {
      render(
        <Tree
          title={expectedText}
          argumentos={expectedArgumentos}
          buttonText={buttonText}
          handleClick={testFunction}
        />,
      );

      expectedArgumentos.forEach((argument) => {
        const argumentElement = screen.getByText(argument);
        expect(argumentElement).toBeInTheDocument();
      });
    });

    test("Then it should show a button", () => {
      render(
        <Tree
          title={expectedText}
          argumentos={expectedArgumentos}
          buttonText={buttonText}
          handleClick={testFunction}
        />,
      );

      const button = screen.getByText(buttonText);

      expect(button).toBeInTheDocument();
    });

    test("Then it should call handleClick when the button is clicked", () => {
      const handleClick = vi.fn(); // Crea un mock para la función handleClick

      render(
        <Tree
          title={expectedText}
          argumentos={expectedArgumentos}
          buttonText={buttonText}
          handleClick={handleClick}
        />,
      );

      const button = screen.getByRole("button", { name: buttonText });
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalled();
    });
  });
});
