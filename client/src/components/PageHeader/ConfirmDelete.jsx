import React from 'react'
import HeaderButton from './HeaderButton'

export default function ConfirmDelete({header, text}) {
  return (
    <div className="confirm-delete p-4">
      <h3>{header}</h3>
      <HeaderButton text={`Delete ${text}`} color={2} />
      <HeaderButton text={`Cancel Delete`} color={1} />
    </div>
  )
}
