import React from "react";
import { expect, describe, it } from '@jest/globals';
import renderer from "react-test-renderer";
import Button from "../../src/components/Button";
import ButtonsGroup from "../../src/components/ButtonsGroup";

describe("pattern div component", () => {

    it("is passing dynamic buttons", () => {
        const component = renderer.create(
            <ButtonsGroup
                groupsId={"foo"}
                htmlClass={"faa"}
            >
                <Button
                    htmlClass={"faa"}
                    data={"bar"}>{"foo"}
                </Button>
            </ButtonsGroup>
        );

        expect(component).toMatchSnapshot();
    });

});