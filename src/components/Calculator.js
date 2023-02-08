import React from "react";
import Button from "./Button";
import ButtonsGroup from "./Buttons-group";
export default function Calculator(props) {
	return (
		<div class="columns">
			<div class="column is-one-fifth is-offset-5">
				<div id={props.id} class="box">
					<div class="container mb-2">

						<input type="text" placeholder="0" id="calculator-screen"
							class="input is-white has-text-right is-size-3 px-0 py-6 mb-4 is-shadowless has-text-weight-semibold"
							size="8" />
						<ButtonsGroup
							groupsId="buttonsFirstLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-danger" data="C">
								<i class='icon fa-solid fa-c'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="+/-">
								<i class='icon fa-solid fa-plus-minus'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="D">
								<i class='icon fa-solid fa-delete-left'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="%">
								<i class='icon fa-solid fa-percent'></i>
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsSecondLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="1">
								<i class='icon fa-solid fa-1'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="2">
								<i class='icon fa-solid fa-2'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="3">
								<i class='icon fa-solid fa-3'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="/">
								<i class='icon fa-solid fa-divide'></i>
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsThirdLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="4">
								<i class='icon fa-solid fa-4'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="5">
								<i class='icon fa-solid fa-5'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="6">
								<i class='icon fa-solid fa-6'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="*">
								<i class='icon fa-solid fa-asterisk'></i>
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsFourthLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="7">
								<i class='icon fa-solid fa-7'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="8">
								<i class='icon fa-solid fa-8'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="9">
								<i class='icon fa-solid fa-9'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="+">
								<i class='icon fa-solid fa-plus'></i>
							</Button>
						</ButtonsGroup>

						<ButtonsGroup
							groupsId="buttonsFifthLine" htmlClass="columns is-justify-content-center">

							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data="0">
								<i class='icon fa-solid fa-0'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth " data=".">
								<i class='icon fa-solid fa-period'>.</i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-background-warning has-text-white" data="=">
								<i class='icon fa-solid fa-equals'></i>
							</Button>
							<Button htmlClass="is-large is-light m-2 is-fullwidth is-one-fifth has-text-warning" data="-">
								<i class='icon fa-solid fa-minus'></i>
							</Button>
						</ButtonsGroup>
					</div>
				</div>
			</div>
		</div>
	)
}
