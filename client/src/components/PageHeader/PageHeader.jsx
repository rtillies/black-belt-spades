import HeaderButton from "./HeaderButton";
import spadesStore from "../../stores/spadesStore";
import { useState } from "react";

export default function PageHeader({ header, buttonList }) {
  const store = spadesStore();
  const [buttons, setButtons] = useState(store.pages[buttonList])
  // const [buttons, setButtons] = useState()

  // console.log(header.toLowerCase());
  // setButtons(store.pages[header.toLowerCase()])
  // const buttons = store.pages[header.toLowerCase()]
  
  return (
    <div className="page-header p-4">
      <h1>{header}</h1>
      {console.log('button list', buttons)}
      {buttons.map((b, i) => {
        return <HeaderButton text={b} />
      })}
    </div>
  );
}
