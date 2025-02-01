import React from 'react'

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <span className={`inline-block px-3 py-1 rounded-full text-sm ${className}`}>{children}</span> 
}

export default Badge