import React from "react";
import Button from "./Button";
import ButtonsGroup from "./ButtonsGroup";
import AsteriskIcon from "./icons/AsteriskIcon";
import ClearAllIcon from "./icons/ClearAllIcon";
import DeleteIcon from "./icons/DeleteIcon";
import DivideIcon from "./icons/DivideIcon";
import EqualsIcon from "./icons/EqualsIcon";
import MinusIcon from "./icons/MinusIcon";
import PercentIcon from "./icons/PercentIcon";
import PeriodIcon from "./icons/PointIcon";
import PlusIcon from "./icons/PlusIcon";
import PlusMinusIcon from "./icons/PlusMinusIcon";
import Number0Icon from "./icons/Number0Icon";
import Number1Icon from "./icons/Number1Icon";
import Number2Icon from "./icons/Number2Icon";
import Number3Icon from "./icons/Number3Icon";
import Number4Icon from "./icons/Number4Icon";
import Number5Icon from "./icons/Number5Icon";
import Number6Icon from "./icons/Number6Icon";
import Number7Icon from "./icons/Number7Icon";
import Number8Icon from "./icons/Number8Icon";
import Number9Icon from "./icons/Number9Icon";

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

							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-text-danger" data="C">
								<ClearAllIcon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="S">
								<PlusMinusIcon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="D">
								<DeleteIcon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="%">
								<PercentIcon />
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsSecondLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="1">
								<Number1Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="2">
								<Number2Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="3">
								<Number3Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="/">
								<DivideIcon />
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsThirdLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="4">
								<Number4Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="5">
								<Number5Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="6">
								<Number6Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="*">
								<AsteriskIcon />
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsFourthLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="7">
								<Number7Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="8">
								<Number8Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="9">
								<Number9Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="+">
								<PlusIcon />
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsFifthLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data="0">
								<Number0Icon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth " data=".">
								<PeriodIcon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-background-warning has-text-white" data="=">
								<EqualsIcon />
							</Button>
							<Button htmlClass="is-medium is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="-">
								<MinusIcon />
							</Button>
						</ButtonsGroup>
					</div>
				</div>
			</div>
		</div>
	);
}
