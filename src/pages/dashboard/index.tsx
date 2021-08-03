import { Divider } from "@material-ui/core"
import React from "react"
import { Layout, SimpleTabs, DiveDisplay } from "../../components"
import { useStyles } from "./dashboardCss"

export function Dashboard() {
	const css = useStyles()
	return (
		<Layout>
			<div className={css.container}>
				<SimpleTabs />
				<Divider flexItem light orientation="vertical" className={css.divider} />
				<DiveDisplay diveNumber={1} diveSite="Thailand" depth={18} timeUnder={45} date="Dec 1" />
			</div>
		</Layout>
	)
}
