import React, { Component } from "react";

class Audio extends Component {
	render() {
		// Datos que debe cargar el audio

		const item = [
			{
				id: 1,
				audio: "https://apartamentos.jmanvel.com/terror.ogg",
				formato: "audio/ogg"
			}
		];

		return item.map(item => {
			// Es necesario colocar una 'key' a partir de la versión de React JS 16
			// colocamos el objeto 'id: 1' en <div key={ item.id }

			return (
				<div key={item.id}>
					<audio autoPlay>
						<source src={item.audio} type={item.formato} />
					</audio>
				</div>
			);
		});
	}
}

export default Audio;
