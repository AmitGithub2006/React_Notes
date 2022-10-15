// ComponentB and ComponentC
import React from "react";
import { ComponentB } from "./ComponentB";

export function ComponentA() {
  return (
    <div>
      ComponentA
      <ComponentB />
    </div>
  );
}
