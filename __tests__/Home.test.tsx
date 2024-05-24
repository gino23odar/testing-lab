//named Home for the Home file in the main page.tsx
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";


describe('Home', () => {
    it('should have an h2 tag with the text "Docs ->"', () => {
        render(<Home />) 

        const elem = screen.getByText('Docs');

        expect(elem).toBeInTheDocument();
    })

    it('should have the word "in-depth"', () => {
        render(<Home />) 

        const elem = screen.getByText(/in-depth/i);

        expect(elem).toBeInTheDocument();
    })

    it('should have a heading element', () => {
        render(<Home />) 

        const elem = screen.getByRole('heading', { name: /templates/i });

        expect(elem).toBeInTheDocument();
    })
})