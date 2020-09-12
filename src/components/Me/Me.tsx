import React, { useState } from "react"

import { Character } from "./Character"
import { Steam } from "./Steam"
import { Tea } from "./Tea"
import { Chair } from "./Chair"
import { LeftShoe } from "./LeftShoe"
import { RightShoe } from "./RightShoe"
import { Legs } from "./Legs"
import { Torso } from "./Torso"
import { Body } from "./Body"
import { LeftArm } from "./LeftArm"
import { RightArm } from "./RightArm"
import { Head } from "./Head"
import { Cappy } from "./Cappy"
import { Glasses } from "./Glasses"
import { Eyes } from "./Eyes"
import { Notebook } from "./Notebook"

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
