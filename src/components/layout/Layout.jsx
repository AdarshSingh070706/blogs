import React from 'react'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Content full height */}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}

export default Layout;
