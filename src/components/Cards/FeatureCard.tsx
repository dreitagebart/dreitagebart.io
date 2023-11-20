import { createStyles, Text, Card, rem } from "@mantine/core";
import { FC } from "react";
import { TablerIconsProps } from "@tabler/icons-react";

interface Props {
  title: string;
  icon: FC<TablerIconsProps>;
  description: string;
}

const useStyles = createStyles((theme) => ({
  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },
  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export const FeatureCard: FC<Props> = ({ title, description, icon: Icon }) => {
  const { classes, theme } = useStyles();

  return (
    <Card
      key={title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Icon size={rem(50)} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
};
