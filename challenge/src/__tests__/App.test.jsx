import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

jest.useFakeTimers();

describe( "<App />", () => {
	it( "renders correctly", () => {
		expect( () => render( <App /> ) ).not.toThrow();
	} );
} );
