import { NextPage } from "next";
import { List } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";

import { PageBreak } from "../../components";
import { useRestrictedArea } from "../../hooks";

const Page: NextPage = () => {
  useRestrictedArea("career");

  return (
    <>
      <List
        icon={<IconArrowNarrowRight></IconArrowNarrowRight>}
        withPadding
        spacing="lg"
        fz="lg"
        center
      >
        <List.Item>Introduction</List.Item>
        <List.Item>Biography</List.Item>
        <List.Item>Resume</List.Item>
        <List.Item>Experience</List.Item>
        <List.Item>Skills</List.Item>
        <List.Item>Contact</List.Item>
      </List>
      <PageBreak></PageBreak>
    </>
  );
};

export default Page;
