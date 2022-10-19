import React from 'react'

const TextBackground = ({children, title, style}) => {
  return (
    <div style={style}>
      <head>
            <link rel="stylesheet" href="/CSS/app.css" />
      </head>

      <div className="text-background">
        <div className='title'>{title}</div>
        <div style={{padding:10}}>
          {children}
        </div>
      </div>
    </div>
  )
}

module.exports = TextBackground