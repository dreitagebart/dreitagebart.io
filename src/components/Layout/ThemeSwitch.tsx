import { Switch, useMantineTheme } from "@mantine/core";
import { useMantineColorScheme, Group } from "@mantine/core";
import { FC } from "react";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

interface Props {}

export const ThemeSwitch: FC<Props> = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        size="lg"
        onLabel={<IconSun color={theme.white} size="1.25rem" />}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" />}
      />
    </Group>
  );
};
