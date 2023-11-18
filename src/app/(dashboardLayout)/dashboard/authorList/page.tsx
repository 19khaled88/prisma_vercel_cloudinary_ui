import React from 'react'

const page = () => {
    const authors = fetch(`${process.env.API_LINK}/author/allAuthor`).then(res => res.json()).then(data => { return data })
    console.log(authors)
  return (
    <div>page</div>
  )
}

export default page