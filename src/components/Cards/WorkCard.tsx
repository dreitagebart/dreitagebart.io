import { createStyles, Text, rem } from "@mantine/core";
import { ComponentPropsWithoutRef, FC } from "react";
import { TablerIconsProps } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },
  overlay: {
    position: "absolute",
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
  },
  icon: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
  },
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

interface Props extends ComponentPropsWithoutRef<"div"> {
  icon: FC<TablerIconsProps>;
  title: string;
  description: string;
}

export const WorkCard: FC<Props> = ({
  icon: Icon,
  title,
  description,
  className,
  ...others
}) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={rem(38)} className={classes.icon} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
};
