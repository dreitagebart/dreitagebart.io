import { FC } from 'react'

interface Props {
  color: string
}

export const Wave: FC<Props> = ({ color }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 220 1440 100'>
      <path
        fill={color}
        fillOpacity='1'
        d='M0,224L120,224C240,224,480,224,720,240C960,256,1200,288,1320,304L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'
      ></path>
    </svg>
  )
}
