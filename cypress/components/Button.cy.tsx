/// <reference types="cypress" />
import React from "react";
import Button from "@/common/Button/Button";

describe("<Button>", () => {
  it("mounts", () => {
    cy.mount(
      <Button type="primary" onClick={() => alert("hello")} label="button" />
    );
    cy.get("button").should("have.text", "button");
  });
});

export {};
