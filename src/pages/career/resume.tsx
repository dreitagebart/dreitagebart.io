import Image from "next/image";
import { Timeline, rem } from "@mantine/core";
import {
  Center,
  Grid,
  Group,
  Blockquote,
  Loader,
  Stack,
  Text,
} from "@mantine/core";
import { NextPage } from "next";
import {
  IconBalloon,
  IconCake,
  IconCertificate,
  IconCurrentLocation,
  IconDeviceMobile,
  IconLayersLinked,
  IconMail,
  IconSchool,
} from "@tabler/icons-react";

import profile from "../../assets/images/lowkey_color.jpg";
import { Layout, PageBreak, Pod } from "../../components";
import { useRestrictedArea } from "../../hooks";
import { TimelineItems } from "../../utils";

const education: TimelineItems = [
  {
    time: "2008 - 2011",
    title: "Apprenticeship as an information technology clerk (IT Kaufmann)",
    description: "ebm-papst GmbH & Co. KG",
  },
  {
    time: "2005 - 2007",
    title:
      "Apprenticeship as a management assistant for office communication (Kaufmann für Bürokommunikation)",
    description: "Computation Systemhaus GmbH",
  },
  {
    time: "2004",
    title: "School graduation Berufskolleg II (Commercial Diploma)",
    description: "KSM Bad Mergentheim",
  },
  {
    time: "2003",
    title: "School graduation Berufskolleg I (Business Assistant)",
    description: "KSM Bad Mergentheim",
  },
  {
    time: "2002",
    title: "School graduation middle school maturity",
    description: "Kopernikus Realschule Bad Mergentheim",
  },
];

const experience: TimelineItems = [
  {
    time: "since 2017 until today",
    title: "WITTENSTEIN SE",
    description: <>Software Developer</>,
  },
  {
    time: "2008 - 2017",
    title: "ebm-papst GmbH & Co. KG",
    description: (
      <>
        Inhouse Consultant for Master and Product Data Management and
        application developer
      </>
    ),
  },
  {
    time: "2007 - 2008",
    title: "Computation Systemhaus GmbH & Co. KG",
    description: <>Team lead / key account management for logistics</>,
  },
];

const Page: NextPage = () => {
  const { loading } = useRestrictedArea("career");

  return (
    <Layout title="Resume">
      {loading ? (
        <Center px="xl">
          <Loader size="xl"></Loader>
        </Center>
      ) : (
        <Pod>
          <Grid gutter="xl">
            <Grid.Col sm={12} md={4}>
              <Stack>
                <Stack align="center">
                  <Image
                    src={profile}
                    style={{ borderRadius: 12, maxWidth: 300, height: "auto" }}
                    alt="Stefan Büchold"
                  ></Image>
                </Stack>
                <Stack align="center" spacing={0}>
                  <Text
                    fz="lg"
                    fw={700}
                    sx={{ letterSpacing: 2, textTransform: "uppercase" }}
                  >
                    Stefan Büchold
                  </Text>
                  <Text>Software Developer</Text>
                </Stack>
                <Stack>
                  <Text
                    color="dimmed"
                    sx={{
                      "@media print": {
                        marginTop: rem(40),
                        textAlign: "center",
                      },
                    }}
                  >
                    My mission - utilize my skills and expertise in software
                    development, contribute positively to a dynamic organization
                    that values creativity, collaboration, and innovation, while
                    continually expanding my knowledge and skills to achieve
                    professional growth and personal fulfillment.
                  </Text>
                </Stack>
                <PageBreak></PageBreak>
                <Stack mt="xl" spacing="sm">
                  <Group noWrap align="flex-start">
                    <IconCake></IconCake>
                    <Text span>27.11.1985 in Bad Mergentheim</Text>
                  </Group>
                  <Group noWrap align="flex-start">
                    <IconMail></IconMail>
                    <Text span>stefan.buechold@gmail.com</Text>
                  </Group>
                  <Group noWrap align="flex-start">
                    <IconDeviceMobile></IconDeviceMobile>
                    <Text span>+49 160 90 469 717</Text>
                  </Group>
                  <Group noWrap align="flex-start">
                    <IconCurrentLocation></IconCurrentLocation>
                    <Text span>
                      Moorstraße 2/1<br></br>74523 Schwäbisch Hall
                    </Text>
                  </Group>
                </Stack>
                <Stack spacing={0}>
                  <Text span fw={700}>
                    Driving license
                  </Text>
                  <Text span>B, L, M</Text>
                </Stack>
                <Stack spacing={0}>
                  <Text fw={700}>Languages</Text>
                  <Text>German (mother tongue)</Text>
                  <Text>English, fluent in spoken and written</Text>
                  <Text>French, basic</Text>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col sm={12} md={8}>
              <Stack>
                <Group spacing="sm">
                  <IconLayersLinked size={36}></IconLayersLinked>
                  <Text fz="lg" fw={700}>
                    Working experience
                  </Text>
                </Group>
                <Timeline
                  lineWidth={2}
                  ml={8}
                  color="cyan"
                  active={experience.length - 1}
                >
                  {experience.map(({ time, title, description }, index) => {
                    return (
                      <Timeline.Item key={index} title={time}>
                        <Text color="cyan" fw={500}>
                          {title}
                        </Text>
                        <Text color="dimmed" size="sm">
                          {description}
                        </Text>
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
              </Stack>
              <PageBreak></PageBreak>
              <Stack mt="xl">
                <Group spacing="sm">
                  <IconSchool size="36"></IconSchool>
                  <Text fz="lg" fw={700}>
                    Educational path
                  </Text>
                </Group>
                <Timeline
                  lineWidth={2}
                  ml={8}
                  color="cyan"
                  active={education.length - 1}
                >
                  {education.map(({ time, title, description }, index) => {
                    return (
                      <Timeline.Item key={index} title={time}>
                        <Text color="cyan" fw={500}>
                          {title}
                        </Text>
                        <Text color="dimmed" size="sm">
                          {description}
                        </Text>
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
              </Stack>
              <Stack mt="xl">
                <Group spacing="sm">
                  <IconCertificate size="36"></IconCertificate>
                  <Text fz="lg" fw={700}>
                    Certificate
                  </Text>
                </Group>
                <Text>Chinese Business</Text>
              </Stack>
              <Stack mt="xl">
                <Group spacing="sm">
                  <IconBalloon size="36"></IconBalloon>
                  <Text fz="lg" fw={700}>
                    Hobbies and Interests
                  </Text>
                </Group>
                <Text>Music, podcasts, IT, sports and cooking</Text>
              </Stack>
            </Grid.Col>
          </Grid>
        </Pod>
      )}
    </Layout>
  );
};

export default Page;
