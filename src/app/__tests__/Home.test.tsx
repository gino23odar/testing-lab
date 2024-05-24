//named Home for the Home file in the main page.tsx
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it('should have an h2 tag with the text "Docs ->"', () => {
    render (<Home />) 

    const elem = screen.getByText('Docs');

    expect(elem).toBeInTheDocument();
});