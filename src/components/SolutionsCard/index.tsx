import React from "react";
import makeStyles from "@site/src/helpers/makeStyles";
import type UxtTheme from "@site/src/theme/UxtTheme";
import { Card } from "@mui/material";
import { CSSObject } from "tss-react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Solution } from "@site/src/types";

export interface SolutionsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
  imgUrl?: string;
  titleText?: React.ReactNode;
  solutions?: Array<Solution>;
}

const useStyles = makeStyles<SolutionsCardProps>({ name: "MicrochipFPGASolutionsCard" })((theme: UxtTheme, props: SolutionsCardProps, classes: Record<string, unknown>) => ({
  root: {
    width: "100%",
    height: "100%", // bounded by parent grid row (e.g., 240px)
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    minHeight: 0, // allow children to shrink
    padding: theme.spacing(2),

    overflow: "hidden",
    borderRadius: theme.spacing(2),
    cursor: "pointer",
    transition: "box-shadow 220ms ease, transform 220ms ease",
    willChange: "box-shadow, transform",

    "&:hover": {
      boxShadow: theme.shadows[6],
      [`& .${classes.megaTrendsSectionCardTitle}`]: {
        color: theme.palette.primary.main,
      },
    },

    "&:hover img, &:focus-within img": { transform: "scale(1.015)" },
    "@media (hover: none)": { "&:hover img": { transform: "none" } },
  },

  titleColor: { color: theme.palette.common.black },
  subTitleColor: { color: "#64748B" },

  landingTextList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: theme.spacing(3),
    width: "100%",
    height: "100%", // 🔑 consume card height
    minHeight: 0,
  },

  landingPageTextListItem: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1),
    alignItems: "flex-start",
    width: "100%",
    flex: "1 1 0", // 🔑 take remaining vertical space
    minWidth: 0, // allow right pane to shrink
    minHeight: 0, // 🔑 allow inner grid to compute 1fr height
  },

  // left icon/image
  megaTrendsSectionCardImage: {
    width: 64,
    height: 64,
    objectFit: "cover",
    display: "block",
    flex: "0 0 auto",
    borderRadius: theme.spacing(0.5),
  },

  // right side: title + list area
  megaTrendsSectionTextListItemTextWrapper: {
    display: "grid",
    gridTemplateRows: "auto 1fr", // title row, then list consumes the rest
    gap: theme.spacing(2),
    flex: "1 1 auto",
    width: "100%",
    minWidth: 0,
    minHeight: 0, // 🔑 lets the 1fr row shrink
    alignItems: "start",
    justifyContent: "start",
  },

  megaTrendsSectionCardTitle: {
    ...(theme.typography.h6 as CSSObject),
    fontWeight: 600,
    margin: 0,
  },

  megaTrendsSectionListItemTitle: {
    ...(theme.typography.h6 as CSSObject),
    margin: 0,
    color: theme.palette.text.primary,
  },

  // wrapper that owns the bounded height for the <ul>
  listArea: {
    height: "100%", // 🔑 gives the ul a real height to wrap to
    minHeight: 0,
    width: "100%",
  },

  // UL: vertical-first flow, wraps to the right when height is filled
  megaTrendsSectionListItemTitleContentWrapper: {
    ...(theme.typography.body1 as CSSObject),

    // reset
    margin: 0,
    padding: 0,
    listStyle: "none",

    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "flex-start",

    height: "100%", // fills listArea height
    minHeight: 0,
    width: "max-content",
    minWidth: 0,
    maxHeight: 160,

    // row gap then column gap
    gap: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  },

  megaTrendsSectionListItem: {
    display: "block",
    color: theme.palette.text.link,

    // allow breaking so columns can fit even with long URLs/text
    whiteSpace: "normal",
    overflowWrap: "anywhere",
    wordBreak: "break-word",

    [`& + &`]: { paddingTop: theme.spacing(0.5) },

    "& a": {
      textDecoration: "none",
      color: "inherit",
      display: "inline",
    },
  },
}));

const SolutionsCard = React.forwardRef<HTMLDivElement, SolutionsCardProps>((props: SolutionsCardProps, ref: React.Ref<HTMLDivElement>) => {
  const { imgUrl = "", titleText, className, classes: classesProp, solutions = [], ...rest } = props;
  const { classes, cx } = useStyles(props, { props: { classes: classesProp } });

  return (
    <Card ref={ref} variant="outlined" className={cx(classes.root, className)} {...rest}>
      <div className={classes.landingTextList}>
        <div className={classes.landingPageTextListItem}>
          <img src={imgUrl ? useBaseUrl(imgUrl) : undefined} width={64} height={64} className={classes.megaTrendsSectionCardImage} alt="" aria-hidden />
          <div className={classes.megaTrendsSectionTextListItemTextWrapper}>
            <span className={cx(classes.megaTrendsSectionListItemTitle, classes.titleColor)}>{titleText}</span>

            {/* bounded area -> ul gets real height to wrap against */}
            <div className={classes.listArea}>
              <ul className={cx(classes.megaTrendsSectionListItemTitleContentWrapper, classes.subTitleColor)}>
                {solutions.map((solution: Solution, index: number) => (
                  // <li key={index} className={classes.megaTrendsSectionListItem}>
                  <a target="_blank" rel="noreferrer" href={solution.url}>
                    {solution.text}
                  </a>
                  // </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
});

export default React.memo(SolutionsCard);
