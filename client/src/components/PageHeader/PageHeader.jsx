import HeaderButton from "./HeaderButton";

export default function PageHeader({ header }) {
  return (
    <div className="page-header p-4">
      <h1>{header}</h1>
      {/* <HeaderButton text="All Teams" hidden="false" /> */}
      {/* <HeaderButton text="All Games" hidden="true" /> */}
    </div>
  );
}
