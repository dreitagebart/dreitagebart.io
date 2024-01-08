import { FC, useState } from 'react'
import { Body } from './Body'
// import { Cap } from './Cap'
import { Chair } from './Chair'
import { Character } from './Character'
// import { Eyes } from './Eyes'
// import { Glasses } from './Glasses'
import { Head } from './Head'
import { LeftArm } from './LeftArm'
import { LeftShoe } from './LeftShoe'
import { Legs } from './Legs'
import { Notebook } from './Notebook'
import { RightArm } from './RightArm'
import { RightShoe } from './RightShoe'
import { Steam } from './Steam'
import { Tea } from './Tea'
import { Torso } from './Torso'

interface Props {}

export const Me: FC<Props> = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <Character
      id='me'
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Steam></Steam>
      <Tea></Tea>
      <Chair></Chair>
      <LeftShoe></LeftShoe>
      <RightShoe paused={hovered}></RightShoe>
      <Legs></Legs>
      <Torso paused={false}>
        <Body></Body>
        <LeftArm paused={hovered}></LeftArm>
        <RightArm paused={hovered}></RightArm>
        <Head paused={false}>
          {/* <Cap></Cap> */}
          {/* <Glasses></Glasses> */}
          {/* <Eyes></Eyes> */}
        </Head>
      </Torso>
      <Notebook paused={hovered}></Notebook>
    </Character>
  )
}
