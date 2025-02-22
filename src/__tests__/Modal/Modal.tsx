import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Modal} from "../../components";
import { dummyUser } from "../../fixtures/dummyUser";
import '@testing-library/jest-dom';


describe("Testing Modal Component", () => {
    
      test("Renderiza el modal con la información del usuario", () => {
        const handleClose = jest.fn();
        render(<Modal user={dummyUser} onClose={handleClose} />);
        

        expect(screen.getByText("John Doe")).toBeInTheDocument();
        expect(screen.getByText("john@example.com")).toBeInTheDocument();
        expect(screen.getByText("123-456-7890")).toBeInTheDocument();
        expect(screen.getByText("New York")).toBeInTheDocument();
        expect(screen.getByText(/Main Street - Apt\. 1/i)).toBeInTheDocument();
        expect(screen.getByText("example.com")).toBeInTheDocument();
        expect(screen.getByText("Example Inc.")).toBeInTheDocument();
      });
    
      test("Ejecuta la función onClose al hacer click en el botón de cierre", async () => {
        const handleClose = jest.fn();
        render(<Modal user={dummyUser} onClose={handleClose} />);
        
        const closeButton = screen.getByText("X");
        await userEvent.click(closeButton);
        
        // Se comprueba que la función handleClose se llamó una vez
        expect(handleClose).toHaveBeenCalledTimes(1);
      });
    });


