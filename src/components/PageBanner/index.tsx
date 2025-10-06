// src/components/Products/index.tsx
import * as React from "react";
import { alpha, Box, Typography } from "@mui/material";
import makeStyles from "@site/src/helpers/makeStyles";
import type UxtTheme from "@site/src/theme/UxtTheme";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Card from "@mui/material/Card";
import Link from "@docusaurus/Link";
import type { CSSObject } from "tss-react";

export interface PageBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
  imgSrc?: string;
  altText?: string;
}

const useStyles = makeStyles<PageBannerProps>({ name: "MicrochipFPGAPageBanner" })((theme: UxtTheme, props: any, classes: Record<string, unknown>) => ({
  root: {
    scrollSnapType: "y proximity",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  bannerImageWrapper: {
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto",
    alignItems: "center",
    minWidth: "60%",
    justifyContent: "center",
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  bannerImage: {
    objectFit: "contain",
    objectPosition: "top",
    height: "min-content",
    maxHeight: theme.spacing(50),
    // aspectRatio: "16 / 9",
    [theme.breakpoints.down("md")]: {
      //   aspectRatio: "4 / 3",
    },
  },
  bannerChildrenWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
}));

const PageBanner = React.forwardRef<HTMLDivElement, PageBannerProps>((props: PageBannerProps, ref: React.Ref<HTMLDivElement>) => {
  const { className, classes: classesProp, children, imgSrc, altText, ...rest } = props;
  const { classes, cx } = useStyles(props, { props: { classes: classesProp } });

  return (
    <div ref={ref} className={cx(classes.root, className)} {...rest}>
      <div className={cx(classes.bannerImageWrapper)}>
        <img className={classes.bannerImage} src={useBaseUrl(imgSrc)} alt={altText} loading="lazy" />
      </div>
      <div className={cx(classes.bannerChildrenWrapper)}>{children}</div>
    </div>
  );
});

export default React.memo(PageBanner);
