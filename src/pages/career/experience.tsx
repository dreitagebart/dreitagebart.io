import {
  rem,
  Avatar,
  Center,
  Flex,
  Group,
  Loader,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import { LayersLinked } from "tabler-icons-react";

import {
  Heading,
  Layout,
  PageBreak,
  PageTitle,
  Pod,
  Section,
  SubTitle,
  TOC,
} from "../../components";
import { useRestrictedArea } from "../../hooks";
import { TimelineItems } from "../../utils";

const experienceComputation: TimelineItems = [
  {
    time: "2007 - 2008",
    title: "Team lead / key account management for logistics",
    description: "Planning and execution of deliveries to key account Amazon",
  },
];

const experienceEbmPapst: TimelineItems = [
  {
    time: "2016 - 2017",
    title: (
      <>
        Integration &ldquo;Industrial Ventilation Technology&ldquo; (carve out)
      </>
    ),
    description: (
      <>
        Subproject manager data migration and contact person for master data
        management<br></br>
        Transfer of a complete product line from subsidiary into the existing
        SAP system ebm-papst Mulfingen in cooperation with external company
      </>
    ),
  },
  {
    time: "2016",
    title: "SAP implementation QM at ebm-papst Mulfingen (Quality Management)",
    description: (
      <>
        Main contact person for master data management<br></br>
        Implementing requirements from project
      </>
    ),
  },
  {
    time: "2016",
    title:
      "SAP implementation EWM at ebm-papst Mulfingen (Extended Warehouse Management)",
    description: (
      <>
        Main contact person for master data management<br></br>
        Implementing requirements from project<br></br>
        Adaptation of material master data for EWM processes (mass changes)
      </>
    ),
  },
  {
    time: "2015",
    title:
      "Technology conversion master data management at ebm-papst Mulfingen",
    description: (
      <>
        Conversion of the technology of an existing master data management in
        SAP - main contact person + implementation support
      </>
    ),
  },
  {
    time: "2015",
    title: "Collaboration epIN",
    description: (
      <>
        Recruitment and development of an IT department in the ebm-papst branch
        office in India (Chennai), which mainly supports the SAP area in the
        Asian region in cooperation with IT ebm-papst Mulfingen.
      </>
    ),
  },
  {
    time: "",
    title: "break",
    description: "",
  },
  {
    time: "since 2015",
    title: "Project ECM (Engineering Change Management)",
    description: (
      <>
        Support in the implementation and contact person in the development of a
        management program for change projects on products
      </>
    ),
  },
  {
    time: "since 2014",
    title: "Project epGML (ebm-papst Globale MaterialnummernLogik)",
    description: (
      <>
        Contact person and carry out the implementation of a non-speaking
        material number logic in SAP
      </>
    ),
  },
  {
    time: "2014 - 2015",
    title: "SAP implementation ebm-papst branch office China (Shanghai)",
    description: (
      <>
        Support as &ldquo;German expert&ldquo; in the area of data migration and
        master data management
      </>
    ),
  },
  {
    time: "2012 - 2013",
    title: "SAP implementation ebm-papst branch office Italy (Mozzate)",
    description: (
      <>
        Subproject manager for data migration and master/product data management
        <br></br>
        Transfer of all data from legacy system to SAP
      </>
    ),
  },
  {
    time: "2011 - 2012",
    title: "SAP implementation ebm-papst branch office France (Obernai)",
    description: (
      <>
        Subproject manager for data migration and master/product data management
        <br></br>
        Transfer of all data from legacy system to SAP
      </>
    ),
  },
];

const experienceWittenstein: TimelineItems = [
  {
    time: "2023",
    title: "Competence Matrix",
    description: (
      <>
        Web app that displays all IT colleagues plus their qualifications and
        skills in an overview dashboard. The colleagues can be searched for
        specific search terms and tags.
      </>
    ),
  },
  {
    time: "2023",
    title: "Azure DevOps Monitoring Tools",
    description: (
      <>
        Webapp that uses the Azure DevOps API to provide some analytics about e.
        g. registered users and their current access license.
      </>
    ),
  },
  {
    time: "2023",
    title: "SAP Rollout FI/CO at WITTENSTEIN USA",
    description: (
      <>
        Data migration and coordination of various developments for the SAP
        implementation.
      </>
    ),
  },
  {
    time: "2022",
    title: "SEAS measurement data dashboard",
    description: (
      <>
        Webapp which displays all measurement data of SEAS machines for
        production on the quality test benches.
      </>
    ),
  },
  {
    time: "since 2022",
    title: "DevOps Methodology",
    description: (
      <>
        Application management and main contact person of Microsoft Azure DevOps
        <br></br>
        Introduction of an agile/scrum toolset at WITTENSTEIN IT department
        (Weekly Scrum, kanban boards, user stories, tasks and epics).<br></br>
        Improve development processes in SAP and non-SAP applications by working
        with Git (Linting, CI/CD)
      </>
    ),
  },
  {
    time: "since 2021",
    title: "WITTENSTEIN Accelerated Response Program (WARP)",
    description: (
      <>
        Development of several features or programs like an average stock report
        or material creation program for supply chain models.
      </>
    ),
  },
  {
    time: "",
    title: "break",
    description: "",
  },
  {
    time: "2021",
    title: "Material Status Dashboard",
    description: (
      <>
        A central dashboard that highlights inconsistencies within assemblies
        and reveals the vibrancy of a product based on various metrics.
      </>
    ),
  },
  {
    time: "2020",
    title: "Product Lifecycle Management (PLM)",
    description: (
      <>
        Consultant for various engineering processes.<br></br>
        Creation of a central &quot;material number generator&quot;
      </>
    ),
  },
  {
    time: "2019",
    title: "Laser marking printing program",
    description: (
      <>
        Development of a desktop app which is able to receive input of an
        barcode scanner. After scanning of production order, serial number or
        sales order it consumes a self developed REST API in SAP, which triggers
        a print request.
      </>
    ),
  },
  {
    time: "since 2020",
    title: "Material Information System (MIS)",
    description: (
      <>
        Creation of a material information system, which serves as a central
        entry point for material and all other related objects
      </>
    ),
  },
  {
    time: "2020",
    title: "Engineering Change Managment Cockpit",
    description: (
      <>
        A cockpit for managing and coordinating changes of WITTENSTEIN products
        &quot;at one glance&quot;
      </>
    ),
  },
  {
    time: "2019",
    title: "WITTENSTEIN Service Portal",
    description: (
      <>
        Development of a central data distribution program (alias &laquo;flux
        compensator&raquo;) that fills a data lake in the Azure Cloud with
        product and manufacturing data of WITTENSTEIN products.
      </>
    ),
  },
  {
    time: "",
    title: "break",
    description: "",
  },
  {
    time: "2018",
    title: "Custom Label Designer (pilot project)",
    description: (
      <>
        Development of a custom label designer (alias &laquo;WILDCAT&raquo;) -
        after creation of a custom label, this label will be converted into a
        special format for TRUMPF laser machines.
      </>
    ),
  },
  {
    time: "2018",
    title: "bookr Time Tracking Tool",
    description: (
      <>
        Desktop app with which WITTENSTEIN employees can record their work on
        projects and internal orders.
      </>
    ),
  },
  {
    time: "2018",
    title: "SAP Development Guidelines",
    description: (
      <>
        Development guidelines (includes security aspects, naming conventions,
        performance, enhancement of SAP standard, structure of development
        objects and many more) which serve as specifications for program
        development within the SAP ERP system.
      </>
    ),
  },
  {
    time: "2018",
    title: "WITTENSTEIN App Framework",
    description: (
      <>
        Creation of an ABAP Framework which enables developers faster
        application development (RAD) and preserving the quality, unifying and
        standardization of WITTENSTEIN applications.
      </>
    ),
  },
  {
    time: "2017",
    title: "Functional Specification Template",
    description: (
      <>
        Creation of a template for new application development requests for non
        SAP and SAP applications.
      </>
    ),
  },
];

const Page: NextPage = () => {
  const { loading } = useRestrictedArea("career");

  return (
    <Layout title="Experience">
      {loading ? (
        <Center px="xl">
          <Loader size="xl"></Loader>
        </Center>
      ) : (
        <Pod>
          <Flex gap="xl" direction="row">
            <Stack sx={{ width: "100%" }}>
              <PageTitle>Experience</PageTitle>
              <SubTitle
                sx={{
                  "@media print": {
                    display: "none",
                  },
                }}
              >
                During my professional activity I could collect different
                experiences. On this page I would like to show you my wealth of
                experience and highlights.
              </SubTitle>
              <Section id="sec-working-experience">
                <Heading id="wittenstein">
                  <Group
                    spacing="sm"
                    sx={{
                      "@media print": {
                        display: "none",
                      },
                    }}
                  >
                    <LayersLinked size={36}></LayersLinked>
                    <Text fz="lg" fw={700}>
                      Experience / Highlights
                    </Text>
                  </Group>
                </Heading>
                <Section mt={rem(20)} id="sec-wittenstein">
                  <Title order={4}>WITTENSTEIN SE</Title>
                  <Timeline
                    mt="md"
                    id="wittenstein"
                    lineWidth={2}
                    ml={8}
                    color="cyan"
                    styles={{
                      itemBody: {
                        marginLeft: rem(20),
                      },
                    }}
                  >
                    {experienceWittenstein.map(
                      ({ time, title, description }, index) => {
                        if (title === "break") {
                          return <PageBreak key={index}></PageBreak>;
                        }

                        return (
                          <Timeline.Item
                            key={index}
                            title={time}
                            radius="md"
                            bulletSize={48}
                            bullet={
                              <Avatar
                                size={46}
                                radius="md"
                                bg="#fff"
                                src="/companies/wittenstein.png"
                              ></Avatar>
                            }
                          >
                            <Text color="cyan" fw={500}>
                              {title}
                            </Text>
                            <Text color="dimmed" size="sm">
                              {description}
                            </Text>
                          </Timeline.Item>
                        );
                      }
                    )}
                  </Timeline>
                </Section>
                <PageBreak></PageBreak>
                <Section id="sec-ebmpapst" mt={rem(40)}>
                  <Title order={4}>ebm-papst GmbH & Co. KG</Title>
                  <Timeline
                    mt="md"
                    id="ebmpapst"
                    lineWidth={2}
                    ml={8}
                    styles={{ itemBody: { marginLeft: rem(20) } }}
                  >
                    {experienceEbmPapst.map(
                      ({ time, title, description }, index) => {
                        if (title === "break") {
                          return <PageBreak key={index}></PageBreak>;
                        }

                        return (
                          <Timeline.Item
                            key={index}
                            title={time}
                            radius="md"
                            bulletSize={48}
                            bullet={
                              <Avatar
                                bg="#fff"
                                size={46}
                                radius="md"
                                src="/companies/ebm-papst.jpg"
                              ></Avatar>
                            }
                          >
                            <Text color="cyan" fw={500}>
                              {title}
                            </Text>
                            <Text color="dimmed" size="sm">
                              {description}
                            </Text>
                          </Timeline.Item>
                        );
                      }
                    )}
                  </Timeline>
                </Section>
                <Section id="sec-computation" mt={rem(40)}>
                  <Title order={4}>Computation Systemhaus GmbH</Title>
                  <Timeline
                    mt="md"
                    id="computation"
                    lineWidth={2}
                    ml={8}
                    styles={{ itemBody: { marginLeft: rem(20) } }}
                  >
                    {experienceComputation.map(
                      ({ time, title, description }, index) => {
                        return (
                          <Timeline.Item
                            key={index}
                            title={time}
                            radius="md"
                            bulletSize={48}
                            bullet={
                              <Avatar radius="md" bg="#ffffff" size={46}>
                                <Group spacing={0}>
                                  <Text span fz={11} color={"red"}>
                                    com
                                  </Text>
                                  <Text span fz={11} color="dark">
                                    putation
                                  </Text>
                                </Group>
                              </Avatar>
                            }
                          >
                            <Text color="cyan" fw={500}>
                              {title}
                            </Text>
                            <Text color="dimmed" size="sm">
                              {description}
                            </Text>
                          </Timeline.Item>
                        );
                      }
                    )}
                  </Timeline>
                </Section>
              </Section>
            </Stack>
            <TOC
              offset={200}
              links={[
                {
                  id: "sec-exp-hl",
                  order: 1,
                  label: "Experiences / Highlights",
                },
                {
                  id: "sec-wittenstein",
                  order: 2,
                  label: "WITTENSTEIN",
                },
                {
                  id: "sec-ebmpapst",
                  order: 2,
                  label: "ebm-papst ",
                },
                {
                  id: "sec-computation",
                  order: 2,
                  label: "Computation",
                },
              ]}
            ></TOC>
          </Flex>
        </Pod>
      )}
    </Layout>
  );
};

export default Page;
