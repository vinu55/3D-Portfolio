import React, { useEffect, useRef } from "react";
import { useGraph, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function MugModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/mugModel.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions } = useAnimations(animations, group);

  // ✅ Solution 1: Move the model down on load
  useEffect(() => {
    if (nodes._rootJoint) {
      nodes._rootJoint.position.y = -2; // Moves the model downwards permanently
    }
  }, [nodes]);

  // ✅ Solution 2: Override position every frame (Prevents resetting)
  useFrame(() => {
    if (group.current) {
      group.current.position.y = -2; // Keeps model down, even after animation
    }
  });

  // ✅ Solution 3: Play animation but prevent looping resets
  useEffect(() => {
    if (actions.AnimationName) {
      actions.AnimationName.play();
      actions.AnimationName.clampWhenFinished = true; // Stops looping reset
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
          <group name="4757fffebe2a4d47b38143266af5f1a9fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Floor">
                  <mesh name="Floor_lambert2_0" geometry={nodes.Floor_lambert2_0.geometry} material={materials.lambert2} />
                </group>
                <group name="group">
                  <group name="Object_7">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Spartan_Ear_Mat} skeleton={nodes.Object_10.skeleton} />
                    <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Spartan_Helmet_Mat} skeleton={nodes.Object_12.skeleton} />
                    <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.Spartan_Ear_Mat} skeleton={nodes.Object_13.skeleton} />
                    <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Spartan_Chest_Mat} skeleton={nodes.Object_14.skeleton} />
                    <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Spartan_Arms_Mat} skeleton={nodes.Object_15.skeleton} />
                    <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Spartan_Legs_Mat} skeleton={nodes.Object_16.skeleton} />
                    <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.Spartan_Shoulders_Mat} skeleton={nodes.Object_17.skeleton} />
                    <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.lambert1} skeleton={nodes.Object_18.skeleton} />
                    <skinnedMesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Spartan_Undersuit_Mat} skeleton={nodes.Object_20.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/mugModel.glb");
