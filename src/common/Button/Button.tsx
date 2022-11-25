import React from "react";

import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export enum ButtonTypes {
  "primary",
  "secondary",
  "warning",
  "error",
}

export enum ButtonStatuses {
  "idle",
  "loading",
}

export type ButtonProps = {
  type: keyof typeof ButtonTypes;
  label: string;
  status?: keyof typeof ButtonStatuses;
  onClick: () => void;
};

export default function ButtonUI(props: ButtonProps) {
  function getBgColor() {
    switch (props.type) {
      case "primary":
        return "blue.500";
      case "secondary":
        return "blue";
      case "warning":
        return "orange";
      case "error":
        return "red";
      default:
        return "blue";
    }
  }
  function getCursor() {
    if (props.status === "loading") return "not-allowed";
    switch (props.type) {
      case "warning":
        return "not-allowed";
      case "error":
        return "not-allowed";
      default:
        return "pointer";
    }
  }
  return (
    <Button
      type="button"
      bgColor={getBgColor()}
      color="white"
      cursor={getCursor()}
      onClick={() => props.onClick()}
    >
      {props.status === "loading" ? <Spinner /> : <>{props.label}</>}
    </Button>
  );
}
