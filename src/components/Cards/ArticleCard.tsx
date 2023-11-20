import Link from "next/link";
import dayjs from "dayjs";
import {
  createStyles,
  Card,
  Group,
  Text,
  getStylesRef,
  rem,
} from "@mantine/core";
import { FC, useMemo } from "react";
import { IconCalendar, IconTags } from "@tabler/icons-react";

import { BlogPost } from "../../utils";
import { Tag } from "../Tag";

interface Props {
  post: BlogPost;
}

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    height: rem(280),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.spin[8] : theme.white,
    [`&:hover .${getStylesRef("cover")}`]: {
      transform: "scale(1.05)",
    },
  },
  content: {
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fontFamily,
    color: theme.white,
    marginBottom: rem(5),
  },
  overlay: {
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
  },
  cover: {
    ...theme.fn.cover(),
    transition: "all 200ms ease-in",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    ref: getStylesRef("cover"),
  },
  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.xl}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.spin[7] : theme.colors.gray[2]
    }`,
  },
}));

export const ArticleCard: FC<Props> = ({ post }) => {
  const relativeDate = useMemo(() => dayjs(post.date).fromNow(), [post.date]);
  const { classes } = useStyles();

  const link = `/blog/${post.slug}`;

  return (
    <Card radius="md" className={classes.card} component={Link} href={link}>
      <div
        className={classes.cover}
        style={{
          backgroundImage: `url(/blog/${post.slug}/${post.cover.image})`,
        }}
      ></div>
      <div className={classes.overlay} />
      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {post.title}
          </Text>
          <Group position="apart">
            <Group spacing={6}>
              <IconCalendar size={18}></IconCalendar>
              <Text size="xs" color="dimmed">
                {relativeDate}
              </Text>
            </Group>
            <Group spacing={6}>
              <IconTags></IconTags>{" "}
              <Group spacing={4}>
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Group>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
};
