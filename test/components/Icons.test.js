import React from "react";
import { expect, describe, it, jest} from '@jest/globals';
import renderer from "react-test-renderer";
import IconAsterisk from "../../src/components/icons/AsteriskIcon";
import IconClearAll from "../../src/components/icons/ClearAllIcon"
import IconDelete from "../../src/components/icons/DeleteIcon"
import IconDivide from "../../src/components/icons/DivideIcon"
import IconEquals from "../../src/components/icons/EqualsIcon"
import IconMinus from "../../src/components/icons/MinusIcon"
import IconPercent from "../../src/components/icons/PercentIcon"
import IconPeriod from "../../src/components/icons/PeriodIcon"
import IconPlus from "../../src/components/icons/PlusIcon"
import IconPlusMinus from "../../src/components/icons/PlusMinusIcon"
import Number0Icon from "../../src/components/icons/Number0Icon"
import Number1Icon from "../../src/components/icons/Number1Icon"
import Number2Icon from "../../src/components/icons/Number2Icon"
import Number3Icon from "../../src/components/icons/Number3Icon"
import Number4Icon from "../../src/components/icons/Number4Icon"
import Number5Icon from "../../src/components/icons/Number5Icon"
import Number6Icon from "../../src/components/icons/Number6Icon"
import Number7Icon from "../../src/components/icons/Number7Icon"
import Number8Icon from "../../src/components/icons/Number8Icon"
import Number9Icon from "../../src/components/icons/Number9Icon"

describe("Icons components", () =>{

        it.each([
        <IconAsterisk />,<IconClearAll />,<IconDelete />,<IconDivide />,<IconEquals />,
        <IconMinus />,<IconPercent />,<IconPeriod />,<IconPlus />,<IconPlusMinus />,
        <Number0Icon />,<Number1Icon />,<Number2Icon />,<Number3Icon />,<Number4Icon />,
        <Number5Icon />,<Number6Icon />,<Number7Icon />,<Number8Icon />,<Number9Icon />,
        ])("has passed all the icons correctly", (componentIcon) => {

            let component = renderer.create(componentIcon);

            expect(component).toMatchSnapshot()
    });
    
})