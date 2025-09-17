import React from "react";
import makeStyles from "@site/src/helpers/makeStyles";
import type UxtTheme from "@site/src/theme/UxtTheme";
import SolutionsCard from "../SolutionsCard";

export interface SolutionCategory {
  titleText?: string;
  solutions?: Array<string>;
  imgUrl?: string;
}

export interface SolutionsCardListProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
  solutionCategories?: Array<SolutionCategory>;
}

const useStyles = makeStyles<SolutionsCardListProps>({ name: "MicrochipFPGASolutionsCardList" })((theme: UxtTheme, props: SolutionsCardListProps, classes: Record<string, unknown>) => ({
  root: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",

    // ✅ default: 3 columns → with 9 items = 3 rows naturally
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gridTemplateRows: "repeat(2, minmax(0, 200px))",

    columnGap: theme.spacing(4),
    rowGap: theme.spacing(3),
    alignItems: "stretch",
    justifyItems: "stretch",
    gridAutoRows: 200,
    // responsive fallbacks
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

const SolutionsCardList = React.forwardRef<HTMLDivElement, SolutionsCardListProps>((props: SolutionsCardListProps, ref: React.Ref<HTMLDivElement>) => {
  const { className, classes: classesProp, solutionCategories = [], ...rest } = props;
  const { classes, cx } = useStyles(props, { props: { classes: classesProp } });

  return (
    <div className={cx(classes.root, className)}>
      {solutionCategories.map((solutionCategory: SolutionCategory) => (
        <SolutionsCard imgUrl={solutionCategory.imgUrl} titleText={solutionCategory.titleText} solutions={solutionCategory.solutions} />
      ))}
    </div>
  );
});

export default React.memo(SolutionsCardList);
