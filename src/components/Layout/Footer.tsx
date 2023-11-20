import Link from "next/link";
import {
  Box,
  BoxProps,
  createStyles,
  Group,
  Stack,
  Text,
  Tooltip,
  rem,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandPaypal,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";
import { FC, ReactNode } from "react";

import { Pod } from "./Pod";
import { ThemeSwitch } from "./ThemeSwitch";
import { handwritingFont } from "../../styles/theme";

interface Props extends BoxProps {}

const useStyles = createStyles((theme) => ({
  slogan: {
    fontFamily: handwritingFont.style.fontFamily,
    fontSize: rem(32),
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      fontSize: rem(24),
    },
  },
  link: {
    transition: "all 500ms ease-out",
    color: theme.colors.gray[6],
    ":hover": {
      color: theme.colors.gray[0],
    },
  },
  social: {
    transition: "all 500ms ease-out",
    ":hover": {
      background: theme.colors.spin[8],
    },
  },
  copyright: {
    fontSize: rem(18),
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      fontSize: rem(16),
    },
  },
}));

// const footerLinks: Array<{
//   label: string
//   href: string
// }> = [
//   {
//     label: 'Privacy policy',
//     href: '/privacy'
//   },
//   {
//     label: 'Impressum',
//     href: '/impressum'
//   }
// ]

// const creditsLinks: Array<{
//   label: string
//   href: string
// }> = [
//   {
//     label: 'Who I am',
//     href: '/about#who-i-am'
//   },
//   {
//     label: 'What I do',
//     href: '/about#what-i-do'
//   },
//   {
//     label: 'What I think',
//     href: '/about#what-i-think'
//   }
// ]

const socialLinks: Array<{
  label: string;
  icon: ReactNode;
  href: string;
}> = [
  {
    label: "Github",
    href: "https://github.com/dreitagebart",
    icon: <IconBrandGithub size={32}></IconBrandGithub>,
  },
  {
    label: "Twitter",
    href: "https://x.com/dreitagebart",
    icon: <IconBrandX size={32}></IconBrandX>,
  },
  {
    label: "Telegram",
    href: "https://t.me/dreitagebart",
    icon: <IconBrandTelegram size={32}></IconBrandTelegram>,
  },
  {
    label: "Paypal",
    href: "https://paypal.me/sbuechold",
    icon: <IconBrandPaypal size={32}></IconBrandPaypal>,
  },
];

export const Footer: FC<Props> = ({ ...props }) => {
  const { classes, theme } = useStyles();

  return (
    <Box component="footer" {...props}>
      <Pod>
        <Group mt="xl" position="apart">
          <Text className={classes.slogan}>Creating things that matter</Text>
          <Group spacing="xs">
            {socialLinks.map(({ label, href, icon }) => {
              return (
                <Tooltip label={label} key={label}>
                  <ActionIcon
                    component={Link}
                    className={classes.social}
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {icon}
                  </ActionIcon>
                </Tooltip>
              );
            })}
          </Group>
        </Group>
        <Group mt="lg" position="apart" align="flex-start">
          <Stack spacing={4}>
            <Text className={classes.copyright}>
              <Text component="span" color={theme.colors.cyan[5]}>
                &#47;&#47;
              </Text>{" "}
              copyright 2023 dreitagebart
            </Text>
            {/* <Group spacing='xl'>
              {footerLinks.map(({ label, href }) => {
                return (
                  <Link href={href} key={href}>
                    <UnstyledButton className={classes.link}>
                      {label}
                    </UnstyledButton>
                  </Link>
                )
              })}
            </Group> */}
          </Stack>
          <ThemeSwitch></ThemeSwitch>
        </Group>
      </Pod>
    </Box>
  );
};
