import React from "react";
import Button from "./Button";
import ButtonsGroup from "./Buttons-group";
import IconAsterisk from "./icons/asterisk-icon";
import IconClearAll from "./icons/clear-all-icon";
import IconDelete from "./icons/delete-icon";
import IconDivide from "./icons/divide-icon";
import IconEquals from "./icons/equals-icon";
import IconMinus from "./icons/minus-icon";
import IconNumbers from "./icons/numbers-icon";
import IconPercent from "./icons/percent-icon";
import IconPeriod from "./icons/period-icon";
import IconPlus from "./icons/plus-icon";
import IconPlusMinus from "./icons/plus-minus-icon";

export default function Calculator(props) {
	return (
		<div className="columns">
			<div className="column is-one-fifth is-offset-5">
				<div id={props.id} className="box">
					<div className="container mb-2">

						<input type="text" placeholder="0" id="calculator-screen"
							className="input is-white has-text-right is-size-3 px-0 py-6 mb-4 is-shadowless has-text-weight-semibold"
							size="8" />
						<ButtonsGroup
							groupsId="buttonsFirstLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-danger" data="C">
								<IconClearAll />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="+/-">
								<IconPlusMinus />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="D">
								<IconDelete />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="%">
								<IconPercent />
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsSecondLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="1">
								<IconNumbers number="1" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="2">
								<IconNumbers number="2" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="3">
								<IconNumbers number="3" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="/">
								<IconDivide />
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsThirdLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="4">
								<IconNumbers number="4" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="5">
								<IconNumbers number="5" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="6">
								<IconNumbers number="6" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="*">
								<IconAsterisk />
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsFourthLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="7">
								<IconNumbers number="7" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="8">
								<IconNumbers number="8" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="9">
								<IconNumbers number="9" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="+">
								<IconPlus />
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsFifthLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="0">
								<IconNumbers number="0" />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data=".">
								<IconPeriod />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-background-warning has-text-white" data="=">
								<IconEquals />
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="-">
								<IconMinus />
							</Button>
						</ButtonsGroup>
					</div>
				</div>
			</div>
		</div>
	);
}
