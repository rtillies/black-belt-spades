import React from "react";
import PanelButton from "./PanelButton";

export default function AdminPanel({header}) {
  const single = header.slice(0,header.length - 1)
  // console.log(single);
  const actions = ['Add', 'Update', 'Delete']
  // const colors = ['primary', 'success', 'danger', 'info', 'secondary', 'dark', ]

  return (
    <>
      <div className="admin-panel border-bottom border-secondary-subtle mx-4">
        <h3>{header}</h3>
        {actions.map((action, i) => {
          return <PanelButton key={i} color={i} text={`${action}`} group={`${single}`} />
        })}
      </div>
    </>
  );
}
