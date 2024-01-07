import React from 'react'

const BlogTag = ({ children }) => {
  return (
    <span  className="inline-flex z-10 items-center font-md rounded-md text-sm px-3 py-1 bg-green-50 dark:bg-green-400 dark:bg-opacity-10 text-green-500 dark:text-green-400 ring-1 ring-inset ring-green-500 dark:ring-green-400 ring-opacity-25 dark:ring-opacity-25">#{children}</span>
  )
}

export default BlogTag