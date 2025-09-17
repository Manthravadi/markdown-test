import React from "react";
import makeStyles from "@site/src/helpers/makeStyles";
import type UxtTheme from "@site/src/theme/UxtTheme";
import { Card } from "@mui/material";
import { CSSObject } from "tss-react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export interface SolutionsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
  imgUrl?: string;
  titleText?: React.ReactNode;
  solutions?: Array<string>;
}

const useStyles = makeStyles<SolutionsCardProps>({ name: "MicrochipFPGASolutionsCard" })((theme: UxtTheme, props: SolutionsCardProps, classes: Record<string, unknown>) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),

    overflow: "hidden",
    borderRadius: theme.spacing(2),
    cursor: "pointer",
    transition: "box-shadow 220ms ease, transform 220ms ease",
    willChange: "box-shadow, transform",

    "&:hover": {
      boxShadow: theme.shadows[6],
      // transform: "translateY(-2px)",
      [`& .${classes.megaTrendsSectionCardTitle}`]: {
        color: theme.palette.primary.main,
      },
    },

    "&:hover img, &:focus-within img": { transform: "scale(1.015)" },
    "@media (hover: none)": { "&:hover img": { transform: "none" } },
  },

  titleColor: {
    color: theme.palette.common.black,
  },
  subTitleColor: {
    color: "#64748B",
  },

  landingTextList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: theme.spacing(3),
  },
  landingPageTextListItem: {
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: theme.spacing(1),
  },

  // (optional) keep thumbnails consistent
  megaTrendsSectionCardImage: {
    height: 400, // your current quick fix
    objectFit: "cover", // keep aspect ratio, crop overflow
    objectPosition: "center",
    display: "block",
    aspectRatio: "16 / 9",
    transformOrigin: "center center",
    transition: "transform 360ms cubic-bezier(0.22, 0.61, 0.36, 1)",
    backfaceVisibility: "hidden",
  },

  megaTrendsSectionCardTextWrapper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    justifyContent: "center",
    height: "auto",
    width: "100%",
    gap: theme.spacing(2),
  },

  megaTrendsSectionCardTitle: {
    ...(theme.typography.h6 as CSSObject),
    fontWeight: 600,
  },
  megaTrendsSectionCardSubTitle: {
    ...(theme.typography.body1 as CSSObject),
  },

  megaTrendsSectionTextListItemTextWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    // gap: theme.spacing(0.5),
  },

  megaTrendsSectionListItemTitle: {
    ...(theme.typography.h6 as CSSObject),
    marginBottom: theme.spacing(2),
  },
  megaTrendsSectionListItemTitleContentWrapper: {
    ...(theme.typography.body1 as CSSObject),
  },
  megaTrendsSectionListItem: {
    color: theme.palette.text.link,
    [`& + &`]: {
      marginTop: theme.spacing(1),
    },
  },
}));

const SolutionsCard = React.forwardRef<HTMLDivElement, SolutionsCardProps>((props: SolutionsCardProps, ref: React.Ref<HTMLDivElement>) => {
  const { imgUrl = "", titleText, className, classes: classesProp, solutions = [], ...rest } = props;
  const { classes, cx } = useStyles(props, { props: { classes: classesProp } });

  return (
    <Card variant="outlined" className={cx(classes.root, className)} {...rest}>
      <div className={classes.landingTextList}>
        <div className={classes.landingPageTextListItem}>
          <img src={imgUrl ? useBaseUrl(imgUrl) : undefined} width={64} height={64} />
          <div className={classes.megaTrendsSectionTextListItemTextWrapper}>
            <span className={cx(classes.megaTrendsSectionListItemTitle, classes.titleColor)}>{titleText}</span>
            <ul className={cx(classes.megaTrendsSectionListItemTitleContentWrapper, classes.subTitleColor)}>
              {solutions.map((solution: string, index: number) => (
                <li key={index} className={classes.megaTrendsSectionListItem}>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
});

export default React.memo(SolutionsCard);
