import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Card} from "../../components";
import { dummyUser } from "../../fixtures/dummyUser";
import '@testing-library/jest-dom';

describe(" Testing Card component", () => {

    test("Renderizar la información de la card", () => {
        const handleClick = jest.fn();
        render(<Card user={dummyUser} onClick={handleClick} />);
    
        // Verifica que se muestre el nombre, email y ciudad del usuario
        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("john@example.com")).toBeInTheDocument();
        expect(screen.getByText("New York")).toBeInTheDocument();
      });

    test("Ejecuta la función onClick al hacer click en la card", async () => {
        const handleClick = jest.fn();
        render(<Card user={dummyUser} onClick={handleClick} />);
    
        // Simula un click sobre el contenedor de la card
        const cardElement = screen.getByText("John Doe").closest("div");
        if (cardElement) {
          await userEvent.click(cardElement);
        }
    
        expect(handleClick).toHaveBeenCalledTimes(1);
      });


});