import { NextPage } from "next";
import { Alert, List, Text } from "@mantine/core";
import { IconDeviceMobile, IconMail } from "@tabler/icons-react";

import { SubTitle } from "../../components";
import { useRestrictedArea } from "../../hooks";

const Page: NextPage = () => {
  useRestrictedArea("career");

  return (
    <>
      <SubTitle>
        You can contact me in different ways, but what I most prefer is a
        telephone call.
      </SubTitle>
      <List withPadding center spacing="lg" fz="lg">
        <List.Item icon={<IconDeviceMobile size={54}></IconDeviceMobile>}>
          0160 90 469 717
        </List.Item>
        <List.Item icon={<IconMail size={54}></IconMail>}>
          <a href="mailto:stefan.buechold@gmail.com">
            stefan.buechold@gmail.com
          </a>
        </List.Item>
      </List>
      <Alert mt="lg" color="cyan">
        <Text fz="lg">
          I do not actively use any social media platforms, like facebook,
          instagram or tiktok...
        </Text>
      </Alert>
    </>
  );
};

export default Page;
