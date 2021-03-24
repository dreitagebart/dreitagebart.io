import React, { useState } from "react"

import {
  Character,
  Steam,
  Tea,
  Chair,
  LeftShoe,
  RightShoe,
  Legs,
  Body,
  Cappy,
  Eyes,
  Glasses,
  Head,
  LeftArm,
  RightArm,
  Notebook,
  Torso
} from "./Styled"

interface Props {}

export const Me: React.FC<Props> = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <Character
      id="me"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Steam />
      <Tea />
      <Chair />
      <LeftShoe />
      <RightShoe paused={hovered} />
      <Legs />
      <Torso paused={false}>
        <Body />
        <LeftArm paused={hovered} />
        <RightArm paused={hovered} />
        <Head paused={false}>
          <Cappy />
          <Glasses />
          <Eyes />
        </Head>
      </Torso>
      <Notebook paused={hovered} />
    </Character>
  )
}
