import { Typography } from "@material-ui/core"
import React from "react"
import { useStyles } from "./diveDisplayCss"
import { DiveLogInterface } from "../../models/interfaces"

export function DiveDisplay({
	diveNumber,
	diveSite,
	date,
	depth,
	timeUnder,
	tankType,
	gas,
	temperature,
	weights,
	visibility,
	activities,
	waterType,
	notes,
}: DiveLogInterface): JSX.Element {
	const css = useStyles()
	return (
		<div className={css.container}>
			<Typography variant="h4">
				Dive {diveNumber} in {diveSite} on {date}
			</Typography>
			<Typography variant="body1">Depth: {depth}</Typography>
			<Typography variant="body1">Time Under: {timeUnder} minutes</Typography>
			<Typography variant="body1">Gas Used: {gas}</Typography>
			<Typography variant="body1">Temperature: {temperature} C</Typography>
			<Typography variant="body1">Weights: {weights} kg</Typography>
			<Typography variant="body1">Visibility: {visibility} m</Typography>
			<Typography variant="body1">Tank Type: {tankType}</Typography>
			<Typography variant="body1">Activities: {activities}</Typography>
			<Typography variant="body1">Water Type: {waterType}</Typography>
			<Typography variant="body1">Other Notes: {notes}</Typography>
		</div>
	)
}
