import { Center, OrbitControls, useGLTF, useTexture } from "@react-three/drei";

export default function Experience() {
	const { nodes } = useGLTF("/brobro.glb");

	const bakedTexture = useTexture("/brobro.jpg");
	bakedTexture.flipY = false;

	return (
		<>
			<OrbitControls makeDefault />

			<Center>
				<group dispose={null}>
					<mesh geometry={nodes.Terrain.geometry}>
						<meshBasicMaterial map={bakedTexture} />
					</mesh>
				</group>
			</Center>
		</>
	);
}
