import { IconButton, useColorMode } from "@chakra-ui/react";
import * as React from "react";
import { Asleep, Awake } from "@carbon/icons-react";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
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
