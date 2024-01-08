import React from 'react'

const BlogTag = ({ children }) => {
  return (
    <span  className="inline-flex z-10 items-center font-md rounded-md text-sm px-3 py-1 bg-green-50 dark:bg-primary dark:bg-opacity-10 text-green-500 dark:text-primary ring-1 ring-inset ring-green-500 dark:ring-primary ring-opacity-25 dark:ring-opacity-25">#{children}</span>
  )
}

export default BlogTag