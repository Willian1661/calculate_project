import React from "react";
import { expect, describe, it, jest} from '@jest/globals';
import renderer from "react-test-renderer";
import IconAsterisk from "../../src/components/icons/AsteriskIcon";
import IconClearAll from "../../src/components/icons/ClearAllIcon"
import IconDelete from "../../src/components/icons/DeleteIcon"
import IconDivide from "../../src/components/icons/DivideIcon"
import IconEquals from "../../src/components/icons/EqualsIcon"
import IconMinus from "../../src/components/icons/MinusIcon"
import IconNumbers from "../../src/components/icons/NumbersIcon"
import IconPercent from "../../src/components/icons/PercentIcon"
import IconPeriod from "../../src/components/icons/PeriodIcon"
import IconPlus from "../../src/components/icons/PlusIcon"
import IconPlusMinus from "../../src/components/icons/PlusMinusIcon"

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