/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 shin-ramyun.gltf
Author: clon6767 (https://sketchfab.com/clon6767)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shin-ramyun-5427b7333c244dafb7c339f6b2e695d0
Title: shin ramyun 신라면
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ShinRamyun(props: any) {
  const { nodes, materials }: any = useGLTF('/shin-ramyun.gltf')
  return (
    <group {...props} dispose={null} scale={0.01} position={[1.5,-1,0]} args={[0, 1]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.initialShadingGroup_1001} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.initialShadingGroup_1001} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.initialShadingGroup_1001} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.initialShadingGroup_1001} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.initialShadingGroup_1001} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.initialShadingGroup_1001} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/shin-ramyun.gltf')