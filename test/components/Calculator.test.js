import React from "react";
import { expect, describe, it } from '@jest/globals';
import renderer from "react-test-renderer";
import Calculator from "../../src/components/Calculator";

describe("calculator component", () =>{
    
    it("is rendering properly", () => {
        const component = renderer.create(<Calculator id="foo"/>);

        let tree = component.toJSON()
        
        expect(tree).toMatchSnapshot();
    });

});
