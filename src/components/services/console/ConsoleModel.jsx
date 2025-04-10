/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 face1.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props) {
  const { nodes, materials } = useGLTF('/consoleModel.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.11, 0, 0.032]} rotation={[0, 0.45, 0]} scale={0.001}>
        <group position={[66.407, 81.658, 5.099]} rotation={[0, -0.2, 0]}>
          <mesh geometry={nodes.node_id6.geometry} material={materials['83']} position={[0, 114.603, 257.538]} rotation={[-Math.PI / 2, 0, 0]} scale={122.704} />
          <mesh geometry={nodes.node_id9.geometry} material={materials['85']} position={[0, 114.603, 257.538]} rotation={[-Math.PI / 2, 0, 0]} scale={122.704} />
          <mesh geometry={nodes.node_id12.geometry} material={materials['87']} position={[0, 114.603, 257.538]} rotation={[-Math.PI / 2, 0, 0]} scale={122.704} />
          <mesh geometry={nodes.node_id15.geometry} material={materials['89']} position={[0, 114.603, 257.538]} rotation={[-Math.PI / 2, 0, 0]} scale={122.704} />
          <mesh geometry={nodes.node_id18.geometry} material={materials['91']} position={[0, 114.603, 257.538]} rotation={[-Math.PI / 2, 0, 0]} scale={122.704} />
          <mesh geometry={nodes.node_id21.geometry} material={materials['93']} position={[0, 114.603, 257.538]} rotation={[-Math.PI / 2, 0, 0]} scale={122.704} />
          <mesh geometry={nodes.node_id24.geometry} material={materials['95']} position={[0, 114.603, 257.538]} rotation={[-Math.PI / 2, 0, 0]} scale={122.704} />
        </group>
        <mesh geometry={nodes.mesh_id140.geometry} material={materials['97']} position={[-85.078, 148.099, 225.402]} rotation={[0.024, -0.201, 1.806]} scale={[0.548, 1.323, 0.557]} />
        <mesh geometry={nodes.mesh_id154.geometry} material={materials['99']} position={[121.021, 148.729, 263.582]} rotation={[0.024, -0.201, -1.796]} scale={[-0.548, 1.323, 0.557]} />
      </group>
    </group>
  )
}

useGLTF.preload('/consoleModel.glb')
