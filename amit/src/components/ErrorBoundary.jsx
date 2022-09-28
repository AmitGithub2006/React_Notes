// Dummy.jsx & UIBackup.jsx
import React, { Component } from "react";
import { Dummy } from "./Dummy";
import { UIBackup } from "./UIBackup";

export class ErrorBoundary extends Component {
  render() {
    return (
      <>
        <div>ErrorBoundary</div>
        <UIBackup>
          <Dummy country="india" />
        </UIBackup>
        <UIBackup>
          <Dummy country="russia" />
        </UIBackup>
        <UIBackup>
          <Dummy country="usa" />
        </UIBackup>
        {/* If we wrap the whole content inside UIBackup then if any of the element throws an error, it will break the whole UI.
        <UIBackup>
        <div>ErrorBoundary</div>
          <Dummy country="india" />
          <Dummy country="russia" />
          <Dummy country="usa" />
        <UIBackup />
        */}
      </>
    );
  }
}
