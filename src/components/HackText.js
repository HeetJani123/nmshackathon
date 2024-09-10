import React from 'react'

function HackText() {
  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '50vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '13vw'
        }}>
        Text1
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '140vh',
          left: '50vw',
          transform: 'translateX(-65%)',
          color: 'white',
          fontSize: '13vw'
        }}>
        Text2
      </h1>
      <h1
        style={{
          position: 'absolute',
          top: '250vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '13vw'
        }}>
        Text3
      </h1>
    </>
  )
}

export { HackText }
