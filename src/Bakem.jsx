import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Bakemgo(props) {
	const { nodes, materials } = useGLTF("/gogo.glb");

	const bakedTexture = useTexture("/gogo.jpg");
	bakedTexture.flipY = false;
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.HouseMain001.geometry}
				material={nodes.HouseMain001.material}
				position={[-0.446, 4.705, 0.067]}
			>
				<meshBasicMaterial map={bakedTexture} />
			</mesh>
		</group>
	);
}

useGLTF.preload("/pejhek.glb");
