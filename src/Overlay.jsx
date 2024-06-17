export function Overlay() {
	return (
		<>
			<div
				style={{
					position: "absolute",
					top: 40,
					right: 160,
					fontSize: "15px",
					textAlign: "right",
				}}
			>
				A DEV
				<br />
				COLLECTIVE
			</div>
			<div
				style={{
					position: "absolute",
					top: 40,
					right: 40,
					fontSize: "15px",
					textAlign: "right",
					fontVariantNumeric: "tabular-nums",
				}}
			>
				—
				<br />
				08/01/23
			</div>

			<div
				style={{
					position: "absolute",
					bottom: 120,
					left: 120,
					fontSize: "18px",
				}}
			>
				Runtime caustics and soft shadows,
				<br />
				for more realism on the web.
				<br />
				<br />
				<div className="inline-block mt-10 relative">
					<a
						style={{
							fontSize: "15px",
							fontWeight: 600,
							letterSpacing: 2,
						}}
						href="https://github.com/pmndrs/drei#caustics"
					>
						DOCUMENTATION
					</a>
					<div
						style={{
							marginTop: 6,
							height: 2.5,
							width: "100%",
							background: "#3e3e3d",
						}}
					/>
				</div>
				<br />
			</div>
		</>
	);
}
