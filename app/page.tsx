import React from "react";
import { BasicFormBuilder } from "./builders/basic-form-builder";

export default function HomePage() {
  return (
    <main className="h-screen p-6">
      <h1 className="text-2xl mb-4">Builder Demo</h1>
    <BasicFormBuilder />
    </main>
  );
}
