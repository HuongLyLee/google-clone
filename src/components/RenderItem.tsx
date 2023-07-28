import React from 'react'
type props = {
      value : string
}
export default function RenderItem({value}: props) {
  return (
    <li>{value}</li>
  )
}
