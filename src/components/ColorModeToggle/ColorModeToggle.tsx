import { ColorMode, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { Asleep, Awake } from "@carbon/icons-react";
export interface ColorModeState {
  colorMode: ColorMode,
  toggleColorMode: () => void
}
const ColorModeToggle = ({ colorMode, toggleColorMode }: ColorModeState) => {
  return colorMode === "light" ? (
    <IconButton
      variant="outline"
      aria-label="Mode Dark"
      icon={<Asleep />}
      onClick={toggleColorMode}
    />
  ) : (
    <IconButton
      variant="outline"
      aria-label="Mode Light"
      icon={<Awake />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeToggle;
