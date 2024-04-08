import React from 'react'

export default function Pagination({ pokePerPage, count, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(count / pokePerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              href="!#"
              onClick={() => {
                paginate(number)
              }}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
