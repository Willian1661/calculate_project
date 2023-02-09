import React from "react";

export default function Button({htmlClass,data,children}) {
	return (
		<button className={`button ${htmlClass}`} data-value={data}>
			{children}
		</button>
	);
}
