"use client";

import { useEffect, useState } from "react";

export default function RisingFlameEmojis() {
	const [flames, setFlames] = useState<JSX.Element[]>([]);

	useEffect(() => {
		const createFlames = () => {
			const newFlames = [];
			const flameCount = Math.floor(window.innerWidth / 15); // Adjust for more/fewer flames

			for (let i = 0; i < flameCount; i++) {
				const left = `${Math.random() * 100}%`;
				const animationDuration = 4 + Math.random() * 3; // Between 4 and 7 seconds
				const size = 24 + Math.random() * 24; // Size between 1rem and 2rem
				const delay = Math.random() * 5; // Random delay up to 5 seconds

				newFlames.push(
					<div
						key={i}
						className="absolute inline-block"
						style={{
							left,
							bottom: "-2rem",
							fontSize: `${size}px`,
							animation: `rise ${animationDuration}s ease-in infinite`,
							animationDelay: `${delay}s`,
						}}>
						🔥
					</div>,
				);
			}
			setFlames(newFlames);
		};

		createFlames();
		window.addEventListener("resize", createFlames);
		return () => window.removeEventListener("resize", createFlames);
	}, []);

	return (
		<div className="fixed inset-0 overflow-hidden bg-black">
			{flames}
			<style jsx>{`
				@keyframes rise {
					0% {
						transform: translateY(0) scale(1);
						opacity: 0;
					}
					10% {
						opacity: 1;
					}
					90% {
						opacity: 1;
					}
					100% {
						transform: translateY(-110vh) scale(0.5);
						opacity: 0;
					}
				}
			`}</style>
		</div>
	);
}
