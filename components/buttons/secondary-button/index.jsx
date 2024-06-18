import React from 'react'

export default function SecondaryButton({ text, type = 'button', onClick }) {
  return (
    <button className="px-5 py-3 rounded bg-fuchsia-800 hover:bg-fuchsia-700  text-white" type={type} onClick={onClick}>{text}</button>
  )
}
