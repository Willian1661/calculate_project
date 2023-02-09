import React from "react";
import {expect, describe, it} from '@jest/globals';
import renderer from "react-test-renderer";
import Button from "../../src/components/Button";

describe("Pattern button component", () => {

	it("is rendering the Button component properly", () =>{
		const component = renderer.create( <Button htmlClass={"faa"} data={"bar"}>{"foo"}</Button>);
        
        expect(component).toMatchSnapshot();
	});
	
});