import type { FC } from 'react'

import classes from './dots.module.css'

export const Dots: FC = () => {
  return (
    <svg className={classes.dots}>
      <title>...</title>
      <pattern
        id='pattern'
        x='0.034759358288862785'
        y='3.335370511841166'
        width='16'
        height='16'
        patternUnits='userSpaceOnUse'
        patternTransform='translate(-0.45072574484339184,-0.45072574484339184)'>
        <circle
          cx='0.45072574484339184'
          cy='0.45072574484339184'
          r='0.45072574484339184'
          fill='#555555'
        />
      </pattern>
      <rect x='0' y='0' width='100%' height='100%' fill='url(#pattern)' />
    </svg>
  )
}
