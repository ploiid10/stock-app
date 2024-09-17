import React from 'react'

const DEFAULT_CLASSNAME = 'w-full h-full rounded-md relative p-8 border-2 bg-gray-900'

const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // todo add dynamic class urls
  return (
    <div className={DEFAULT_CLASSNAME}>
      {children}
    </div>
  )
}

export default Box