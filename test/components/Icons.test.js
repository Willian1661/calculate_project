import React from "react";
import { expect, describe, it, jest} from '@jest/globals';
import renderer from "react-test-renderer";
import IconAsterisk from "../../src/components/icons/asterisk-icon";
import IconClearAll from "../../src/components/icons/clear-all-icon"
import IconDelete from "../../src/components/icons/delete-icon"
import IconDivide from "../../src/components/icons/divide-icon"
import IconEquals from "../../src/components/icons/equals-icon"
import IconMinus from "../../src/components/icons/minus-icon"
import IconNumbers from "../../src/components/icons/numbers-icon"
import IconPercent from "../../src/components/icons/percent-icon"
import IconPeriod from "../../src/components/icons/period-icon"
import IconPlus from "../../src/components/icons/plus-icon"
import IconPlusMinus from "../../src/components/icons/plus-minus-icon"

describe("Icons components", () =>{

        it.each([
        <IconAsterisk />,<IconClearAll />,<IconDelete />,<IconDivide />,
        <IconEquals />,<IconMinus />,<IconPercent />,<IconPeriod />,
        <IconPlus />,<IconPlusMinus />,
        ])("has passed all the icons correctly", (componentIcon) => {

            let component = renderer.create(componentIcon);

        expect(component.toJSON()).toMatchSnapshot()
    });
    
    it("is passing all IconNumbers component properly", () =>{

        let componentNumbers = renderer.create(<IconNumbers number={"foo"} />);

        expect(componentNumbers.toJSON()).toMatchSnapshot()
    })
    
})