import React, { useEffect, useRef, useState } from 'react';

const PaintCanvas = () => {
	const canvasRef = useRef(null);

	const draw = (ctx) => {
		ctx.fillStyle = '#cecece';
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height, 'black');
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');

		draw(context);
	}, [draw]);

	return (
		<canvas
			ref={canvasRef}
			height={window.innerHeight}
			width={window.innerWidth}
		></canvas>
	);
};

export default PaintCanvas;
