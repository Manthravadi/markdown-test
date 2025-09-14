import React, { type ReactNode } from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import DocItemPaginator from "@theme/DocItem/Paginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import ContentVisibility from "@theme/ContentVisibility";
import type { Props as DocItemLayoutProps } from "@theme/DocItem/Layout";
import makeStyles from "../../../helpers/makeStyles";
import styles from "./styles.module.css";
import type UxtTheme from "../../UxtTheme";

export interface LayoutProps extends DocItemLayoutProps {
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
}

const useStyles = makeStyles<LayoutProps>({ name: "Layout" })((theme: UxtTheme) => ({
  /* Used only when full_width=true */
  fullWidthCol: {
    flex: "1 1 auto !important",
    maxWidth: "none !important",
    minWidth: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  container: {
    padding: `0px !important`,
  },
}));

/** unchanged */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop = canRender && (windowSize === "desktop" || windowSize === "ssr") ? <DocItemTOCDesktop /> : undefined;
  return { hidden, mobile, desktop };
}

export default function DocItemLayout(props: LayoutProps): ReactNode {
  const { children, classes: classesProp } = props;
  const { classes, cx } = useStyles(props, { props: { classes: classesProp } });

  // 👇 read front matter flag
  const { metadata, frontMatter } = useDoc() as { metadata: any; frontMatter: { full_width?: boolean } };
  const isFull = !!frontMatter.full_width;

  const docTOC = useDocTOC();

  return (
    <div className="row" style={isFull ? { marginLeft: 0, marginRight: 0 } : undefined}>
      {/* CONTENT column */}
      <div
        className={cx(
          "col",
          // ⬇ only use the theme’s capped class when NOT full width
          !isFull && !docTOC.hidden && styles.docItemCol,
          // ⬇ expand only when full width
          isFull && classes.fullWidthCol
        )}
      >
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={cx(styles.docItemContainer, classes.container)}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>

      {/* DESKTOP TOC: show only when NOT full width */}
      {!isFull && docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
