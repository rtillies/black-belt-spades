import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import AdminPanel from "../../components/Admin/AdminPanel";

export default function Dashboard() {
  return (
    <>
    <PageHeader header="Admin Dashboard" buttonList={'none'}/>
      <AdminPanel header="Games" />
      <AdminPanel header="Teams" />
      <AdminPanel header="Divisions" />
      <AdminPanel header="Conferences" />
    </>
  );
}
