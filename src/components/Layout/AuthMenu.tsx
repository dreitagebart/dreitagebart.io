import { Text, UnstyledButton } from "@mantine/core";
import { Avatar, Menu } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import {
  IconActivityHeartbeat,
  IconAlbum,
  IconArrowAutofitRight,
  IconChartTreemap,
  IconLogout,
  IconStack2,
} from "@tabler/icons-react";

interface Props {}

export const AuthMenu: FC<Props> = () => {
  const { data: session, status } = useSession();

  return status === "authenticated" ? (
    <Menu
      trigger="click"
      transitionProps={{ transition: "scale-y" }}
      position="bottom-end"
      width={240}
      withinPortal
    >
      <Menu.Target>
        <Avatar sx={{ cursor: "pointer" }} size="lg">
          <Text fz={14}>{session.user.username}</Text>
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>
          logged in as <b>{session.user?.name}</b>
        </Menu.Label>
        <Menu.Item icon={<IconChartTreemap></IconChartTreemap>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/biography`}
          >
            <Text>Biography</Text>
          </UnstyledButton>
        </Menu.Item>
        <Menu.Item icon={<IconAlbum></IconAlbum>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/resume`}
          >
            <Text>Resume</Text>
          </UnstyledButton>
        </Menu.Item>
        <Menu.Item icon={<IconActivityHeartbeat></IconActivityHeartbeat>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/experience`}
          >
            <Text>Experience</Text>
          </UnstyledButton>
        </Menu.Item>
        <Menu.Item icon={<IconStack2></IconStack2>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/skills`}
          >
            <Text>Skills</Text>
          </UnstyledButton>
        </Menu.Item>
        {/* <Menu.Item icon={<IconArrowAutofitRight></IconArrowAutofitRight>}>
          <UnstyledButton
            component={Link}
            href={`/${session.user?.username}/process`}
          >
            <Text>Process</Text>
          </UnstyledButton>
        </Menu.Item> */}
        <Menu.Divider></Menu.Divider>
        <Menu.Item icon={<IconLogout></IconLogout>} onClick={() => signOut()}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ) : null;
};
