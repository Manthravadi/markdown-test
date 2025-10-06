// src/components/Products/index.tsx
import * as React from "react";
import { alpha, Box, Typography } from "@mui/material";
import makeStyles from "@site/src/helpers/makeStyles";
import type UxtTheme from "@site/src/theme/UxtTheme";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Card from "@mui/material/Card";
import Link from "@docusaurus/Link";
import type { CSSObject } from "tss-react";

const useStyles = makeStyles({ name: "Products" })((theme: UxtTheme, props: any, classes: Record<string, unknown>) => ({
  root: {
    scrollSnapType: "y proximity",
  },

  section: {
    width: "100%",
    minHeight: "calc(100vh - var(--ifm-navbar-height))",
    scrollSnapAlign: "start",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },

  /* FLEX: stack by default, split 50/50 on ≥ md */
  landingSection: {
    display: "flex",
    minHeight: "calc((100vh - var(--ifm-navbar-height)) / 2)",
    flexDirection: "column",
    alignItems: "stretch", // children stretch full width
    gap: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },

  /* halves */
  landingHalf: {
    flex: "1 1 auto",
    width: "50%",
    minWidth: 0, // prevent overflow when text is wide
    display: "flex",
    alignItems: "center", // ⬅️ top-align content
    justifyContent: "center", // center horizontally; change to "flex-start" if you prefer
    padding: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  titleColor: {
    color: theme.palette.common.black,
  },
  subTitleColor: {
    color: "#64748B",
  },

  /* backgrounds */
  odd: { backgroundColor: alpha("#D1DDE6", 0.2) },
  even: { backgroundColor: theme.palette.background.paper },

  /* inner cap container */

  landingTextualContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1 50%",
    width: "100%",
    height: "100%",
    [theme.breakpoints.up("md")]: { textAlign: "left" },
  },
  landingImagery: {
    // place imagery rules here (e.g., maxWidth)
    display: "flex",
    flex: "1 1 auto",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  landingImage: {
    borderRadius: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  landingTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  },
  landingMainTitleFirstLineText: {
    ...(theme.typography.h3 as CSSObject),
    fontWeight: "bold",
  },
  landingMainTitleSecondLineText: {
    marginTop: theme.spacing(-2),
    ...(theme.typography.h3 as CSSObject),
    fontWeight: "bold",
  },
  landingSubTitleText: {
    ...(theme.typography.h6 as CSSObject),
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
  landingPageTextListItemTextWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    // gap: theme.spacing(0.5),
  },
  landingPageTextListItemTitle: {
    ...(theme.typography.body1 as CSSObject),
    fontWeight: 500,
  },
  landingPageTextListItemTitleContent: {
    ...(theme.typography.body1 as CSSObject),
  },
  chooseProductsSection: {
    display: "flex",
    flexDirection: "column",
    minHeight: "min-content",
    // minHeight: "calc(100vh - var(--ifm-navbar-height))",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: theme.spacing(4),
  },
  chooseProdcutsSectionTitleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "0 0 auto", // ← stop growing
    width: "100%",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1), // optional: small separation from cards
  },

  chooseProductsSectionTitle: {
    ...(theme.typography.h3 as CSSObject),
    fontWeight: "bold",
  },
  chooseProductsSectionSubTitle: {
    ...(theme.typography.h6 as CSSObject),
    fontWeight: 400,
    color: "#64748B",
  },

  // was display:flex ... -> make it a grid
  chooseProductsSectionCardWrapper: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",

    display: "grid",
    gridTemplateColumns: "1fr", // stack by default
    rowGap: theme.spacing(3),
    columnGap: theme.spacing(4),
    justifyContent: "center", // center the 2 cols on wide screens
    justifyItems: "stretch",
    alignItems: "stretch",

    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(3, minmax(320px, 1fr))", // two columns @ ~40% each
    },
  },

  // let the card fill its grid area (remove any fixed widths here)
  chooseProductsSectionCard: {
    overflow: "hidden",
    cursor: "pointer",
    transition: "box-shadow 220ms ease, transform 220ms ease",
    willChange: "box-shadow, transform",
    borderRadius: theme.spacing(2),

    width: "100%", // <— important with grid; fills the cell
    height: "100%",

    "&:hover": {
      boxShadow: theme.shadows[6],
      // transform: "translateY(-2px)",
      [`& .${classes.chooseProductsSectionCardTitle}`]: {
        color: theme.palette.primary.main,
      },
    },

    "&:hover img, &:focus-within img": { transform: "scale(1.015)" },
    "@media (hover: none)": { "&:hover img": { transform: "none" } },
  },

  chooseProductsSectionCardImage: {
    height: 200,
    width: "100%", // your current quick fix
    objectFit: "cover", // keep aspect ratio, crop overflow
    objectPosition: "center",
    display: "block",
    transformOrigin: "center center", // zoom from center
    transition: "transform 360ms cubic-bezier(0.22, 0.61, 0.36, 1)",
    willChange: "transform",
    backfaceVisibility: "hidden", // prevents blurring during transform
    // transform: "translateZ(0)",       // optional: force GPU layer
  },

  /* Accessibility: honor reduced motion */
  "@media (prefers-reduced-motion: reduce)": {
    chooseProductsSectionCardImage: {
      transition: "none",
    },
  },

  /* Tie the hover to the image scale */
  chooseProductsSectionCardTextWrapper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    justifyContent: "center",
    height: "auto",
    width: "100%",
    gap: theme.spacing(2),
  },
  chooseProductsSectionCardTitle: {
    ...(theme.typography.h6 as CSSObject),
    fontWeight: 600,
  },
  chooseProductsSectionCardSubTitle: {
    ...(theme.typography.body1 as CSSObject),
  },

  // Product Families
  productFamiliesSection: {
    display: "flex",
    flexDirection: "column",
    minHeight: "min-content",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: theme.spacing(4),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  productFamiliesSectionTitleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "0 0 auto", // ← stop growing
    width: "100%",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1), // optional: small separation from cards
  },

  productFamiliesSectionTitle: {
    ...(theme.typography.h3 as CSSObject),
    fontWeight: "bold",
  },
  productFamiliesSectionSubTitle: {
    ...(theme.typography.h6 as CSSObject),
    fontWeight: 400,
    color: "#64748B",
  },

  productFamiliesSectionCardWrapper: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",

    // ✅ default: 3 columns → with 9 items = 3 rows naturally
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",

    columnGap: theme.spacing(4),
    rowGap: theme.spacing(3),
    alignItems: "stretch",
    justifyItems: "stretch",

    // responsive fallbacks
    // Guard tiny widths if the container shrinks
    "& > *": { minWidth: 0 }, // avoid overflow from long text

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, minmax(280px, 1fr))", // give each card breathing room
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "minmax(260px, 1fr)",
    },
  },

  productFamiliesSectionCard: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: "0 0 auto",

    overflow: "hidden",
    borderRadius: theme.spacing(4.5),
    cursor: "pointer",
    transition: "box-shadow 220ms ease, transform 220ms ease",
    willChange: "box-shadow, transform",

    "&:hover": {
      boxShadow: theme.shadows[6],
      // transform: "translateY(-2px)",
      [`& .${classes.productFamiliesSectionCardTitle}`]: {
        color: theme.palette.primary.main,
      },
    },

    "&:hover img, &:focus-within img": { transform: "scale(1.015)" },
    "@media (hover: none)": { "&:hover img": { transform: "none" } },
  },

  // productFamiliesSectionCardMedia: {
  //   position: "relative",
  //   width: "100%",
  //   aspectRatio: "16 / 9", // stable, responsive ratio
  //   overflow: "hidden",
  //   borderTopLeftRadius: "inherit",
  //   borderTopRightRadius: "inherit",
  //   paddingBlock: 16,

  //   // optional: slightly taller on small screens
  //   [theme.breakpoints.down("sm")]: {
  //     aspectRatio: "4 / 3",
  //   },
  // },

  // // (optional) keep thumbnails consistent
  // productFamiliesSectionCardImage: {
  //   width: "100%",
  //   height: "100%", // <-- fill the media box
  //   display: "block",
  //   objectFit: "contain", // 🔑 fill without distortion
  //   objectPosition: "center",
  //   transformOrigin: "center center",
  //   transition: "transform 360ms cubic-bezier(0.22, 0.61, 0.36, 1)",
  //   backfaceVisibility: "hidden",
  // },

  productFamiliesSectionCardMedia: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit",

    // ❌ remove aspectRatio
  },

  productFamiliesSectionCardImage: {
    width: theme.spacing(25),
    height: "auto", // ⬅️ natural height
    display: "block",
    alignSelf: "center",
    justifySelf: "center",
    margin: theme.spacing(4),
  },

  productFamiliesSectionCardTextWrapper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    justifyContent: "flex-start", // ⬅️ k
    height: "auto",
    width: "100%",
    gap: theme.spacing(2),
  },

  productFamiliesSectionCardTitle: {
    ...(theme.typography.h6 as CSSObject),
    fontWeight: 600,
    margin: 0,
    display: "block",
  },
  productFamiliesSectionCardSubTitle: {
    ...(theme.typography.body1 as CSSObject),
  },

  // Mega Trends
  megaTrendsSection: {
    display: "flex",
    flexDirection: "column",
    minHeight: "min-content",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: theme.spacing(4),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  megaTrendsSectionTitleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: "0 0 auto", // ← stop growing
    width: "100%",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1), // optional: small separation from cards
  },

  megaTrendsSectionTitle: {
    ...(theme.typography.h3 as CSSObject),
    fontWeight: "bold",
  },
  megaTrendsSectionSubTitle: {
    ...(theme.typography.h6 as CSSObject),
    fontWeight: 400,
    color: "#64748B",
  },

  megaTrendsSectionCardWrapper: {
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

  megaTrendsSectionCard: {
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

export default function Products() {
  const { classes, cx } = useStyles();

  // Imagery
  const nextGenLandingPage = useBaseUrl("/img/pages/products/Solutions.webp");
  const chooseProductsSecurityImage = useBaseUrl("/img/pages/products/choose-products/security.webp");
  const chooseProductsReliabilityImage = useBaseUrl("/img/pages/products/choose-products/reliability.webp");
  const chooseProductsLowPowerImage = useBaseUrl("/img/pages/products/choose-products/low-power.webp");
  const productFamiliesPolarFireFPGAImage = useBaseUrl("/img/pages/products/product-families/polarfire-fpga.avif");
  const productFamiliesPolarFireSOCImage = useBaseUrl("/img/pages/products/product-families/polarfire-soc.avif");
  const productFamiliesRTPolarFireFPGAImage = useBaseUrl("/img/pages/products/product-families/rt-polarfire-fpga.avif");
  const productFamiliesRTPolarFireSOCFPGAImage = useBaseUrl("/img/pages/products/product-families/rt-polarfire-soc-fpga.avif");
  const productFamiliriesSmartFusion2FPGAImage = useBaseUrl("/img/pages/products/product-families/smartfusion2-fpga.png");
  const productFamiliesPic64Image = useBaseUrl("/img/pages/products/product-families/pic64gx-mpu.png");
  const productFamiliesIGLOO2Image = useBaseUrl("/img/pages/products/product-families/igloo2.avif");
  const productFamiliesRTG4FPGA2Image = useBaseUrl("/img/pages/products/product-families/rtg4-fpga.avif");
  const megaTrendsMedicalImage = useBaseUrl("/img/pages/products/mega-trends/medical.png");
  const megaTrendsSpaceImage = useBaseUrl("/img/pages/products/mega-trends/space.svg");
  const megaTrendsCommunicationsImage = useBaseUrl("/img/pages/products/mega-trends/communications.png");
  const megaTrendsIndustrialImage = useBaseUrl("/img/pages/products/mega-trends/iot.svg");
  const megaTrendsAerospaceAndDefenseImage = useBaseUrl("/img/pages/products/mega-trends/aerospace-defense.png");
  const megaTrendsAutoImage = useBaseUrl("/img/pages/products/mega-trends/auto.svg");
  const microchipLogo = useBaseUrl("/img/logos/microchip.avif");
  const placeholder = useBaseUrl("/img/placeholder.svg");

  // Navigation
  const toPolarFireFPGA = useBaseUrl("/polar-fire-fpga");
  const toPolarFireSOCFPGA = useBaseUrl("/polar-fire-soc-fpga");
  const toRTPolarFireFPGA = useBaseUrl("/rt-polar-fire-fpga");
  const toRTPolarFireSOCFPGA = useBaseUrl("/rt-polar-fire-soc-fpga");
  const toPIC64GX = useBaseUrl("/pic-64-gx");
  const toSmartFusion2 = useBaseUrl("/smart-fusion-2");
  const toIGLOO2 = useBaseUrl("/igloo-2");
  const toRTG4FPGA = useBaseUrl("/rtg-4-fpga");

  return (
    <div className={classes.root}>
      <section id="section-landing" className={cx(classes.section, classes.landingSection, classes.odd)}>
        <div className={cx(classes.landingHalf)}>
          <div className={cx(classes.landingTextualContent, classes.landingTitle)}>
            <img src={microchipLogo} />
            <span className={classes.landingMainTitleFirstLineText}>FPGA Solutions</span>
            <span className={classes.landingMainTitleSecondLineText}>Intelligent Edge</span>
            <span className={classes.landingSubTitleText}>Power your innovations with our cutting-edge embedded systems designed for industrial automation, medical devices, and robotics applications.</span>
            <br />
            {/* <div className={classes.landingTextList}>
              <div className={classes.landingPageTextListItem}>
                <img src={placeholder} width={36} height={36} />
                <div className={classes.landingPageTextListItemTextWrapper}>
                  <span className={cx(classes.landingPageTextListItemTitle, classes.titleColor)}>High Performance</span>
                  <span className={cx(classes.landingPageTextListItemTitleContent, classes.subTitleColor)}>Advanced processors with optimized power consumption</span>
                </div>
              </div>
              <div className={classes.landingPageTextListItem}>
                <img src={placeholder} width={36} height={36} />
                <div className={classes.landingPageTextListItemTextWrapper}>
                  <span className={cx(classes.landingPageTextListItemTitle, classes.titleColor)}>Real-time Processing</span>
                  <span className={cx(classes.landingPageTextListItemTitleContent, classes.subTitleColor)}>Ultra-low latency for mission-critical applications</span>
                </div>
              </div>
              <div className={classes.landingPageTextListItem}>
                <img src={placeholder} width={36} height={36} />
                <div className={classes.landingPageTextListItemTextWrapper}>
                  <span className={cx(classes.landingPageTextListItemTitle, classes.titleColor)}>Enterprise Security</span>
                  <span className={cx(classes.landingPageTextListItemTitleContent, classes.subTitleColor)}>Built-in security features and encryption Get Started</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className={cx(classes.landingHalf)}>
          <div className={cx(classes.landingImagery)}>
            <img className={classes.landingImage} src={nextGenLandingPage} alt="Solutions" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="section-choose-products" className={cx(classes.section, classes.chooseProductsSection, classes.even)}>
        <div className={classes.chooseProdcutsSectionTitleWrapper}>
          <span className={cx(classes.chooseProductsSectionTitle, classes.titleColor)}>Why Choose Our Products?</span>
          <span className={cx(classes.chooseProductsSectionSubTitle, classes.subTitleColor)}>Cutting-edge technology meets reliability in our embedded solutions</span>
        </div>

        <div className={classes.chooseProductsSectionCardWrapper}>
          <Card variant="outlined" className={classes.chooseProductsSectionCard}>
            <img className={classes.chooseProductsSectionCardImage} src={chooseProductsLowPowerImage} alt="Low Power" />
            <div className={classes.chooseProductsSectionCardTextWrapper}>
              <span className={cx(classes.titleColor, classes.chooseProductsSectionCardTitle)}>Low Power</span>
              <span className={cx(classes.subTitleColor, classes.chooseProductsSectionCardSubTitle)}>Microchip FPGAs and SoC FPGAs consume up to 50% lower total power than competitive FPGAs. Our nonvolatile process delivers FPGA families that are live at power-up with minimal in-rush current, and significantly lower leakage than SRAM-based alternatives.</span>
            </div>
          </Card>

          <Card variant="outlined" className={classes.chooseProductsSectionCard}>
            <img className={classes.chooseProductsSectionCardImage} src={chooseProductsSecurityImage} alt="Security" />
            <div className={classes.chooseProductsSectionCardTextWrapper}>
              <span className={cx(classes.titleColor, classes.chooseProductsSectionCardTitle)}>Security</span>
              <span className={cx(classes.subTitleColor, classes.chooseProductsSectionCardSubTitle)}>Securing the edge requires robust security. The PolarFire® family of FPGAs and SoC FPGAs is built upon the three fundamental security principles of confidentiality, integrity and authenticity.</span>
            </div>
          </Card>

          <Card variant="outlined" className={classes.chooseProductsSectionCard}>
            <img className={classes.chooseProductsSectionCardImage} src={chooseProductsReliabilityImage} alt="Reliability" />
            <div className={classes.chooseProductsSectionCardTextWrapper}>
              <span className={cx(classes.titleColor, classes.chooseProductsSectionCardTitle)}>Reliability</span>
              <span className={cx(classes.subTitleColor, classes.chooseProductsSectionCardSubTitle)}>Reliability - Our FPGAs address the high-reliability requirements of high-availability, safety-critical and mission-critical systems in industrial, aviation, military and communications applications.</span>
            </div>
          </Card>
        </div>
      </section>

      <section id="section-product-families" className={cx(classes.section, classes.productFamiliesSection, classes.odd)}>
        <div className={classes.productFamiliesSectionTitleWrapper}>
          <span className={cx(classes.productFamiliesSectionTitle, classes.titleColor)}>Product Families</span>
          <span className={cx(classes.productFamiliesSectionSubTitle, classes.subTitleColor)}>Comprehensive solutions across multiple product categories</span>
        </div>

        <div className={classes.productFamiliesSectionCardWrapper}>
          <Link to={toPolarFireFPGA}>
            <Card variant="outlined" className={classes.productFamiliesSectionCard}>
              <div className={classes.productFamiliesSectionCardMedia}>
                <img className={classes.productFamiliesSectionCardImage} src={productFamiliesPolarFireFPGAImage} alt="PolarFire® FPGA" />
              </div>
              <div className={classes.productFamiliesSectionCardTextWrapper}>
                <span className={cx(classes.titleColor, classes.productFamiliesSectionCardTitle)}>PolarFire® FPGA</span>
                <span className={cx(classes.subTitleColor, classes.productFamiliesSectionCardSubTitle)}>Reduce power by 50% over equivalent SRAM FPGAs.</span>
              </div>
            </Card>
          </Link>

          <Link to={toPolarFireSOCFPGA}>
            <Card variant="outlined" className={classes.productFamiliesSectionCard}>
              <div className={classes.productFamiliesSectionCardMedia}>
                <img className={classes.productFamiliesSectionCardImage} src={productFamiliesPolarFireSOCImage} alt="PolarFire® SOC FPGA" />
              </div>
              <div className={classes.productFamiliesSectionCardTextWrapper}>
                <span className={cx(classes.titleColor, classes.productFamiliesSectionCardTitle)}>PolarFire® SOC FPGA</span>
                <span className={cx(classes.subTitleColor, classes.productFamiliesSectionCardSubTitle)}>The PolarFire SoC offers an unparalleled combination of thermal efficiency and defense-grade security to simplify the deployment of smart, connected systems.</span>
              </div>
            </Card>
          </Link>

          <Link to={toRTPolarFireFPGA}>
            <Card variant="outlined" className={classes.productFamiliesSectionCard}>
              <div className={classes.productFamiliesSectionCardMedia}>
                <img className={classes.productFamiliesSectionCardImage} src={productFamiliesRTPolarFireFPGAImage} alt="RT PolarFire® FPGA" />
              </div>
              <div className={classes.productFamiliesSectionCardTextWrapper}>
                <span className={cx(classes.titleColor, classes.productFamiliesSectionCardTitle)}>RT PolarFire® FPGA</span>
                <span className={cx(classes.subTitleColor, classes.productFamiliesSectionCardSubTitle)}>RT PolarFire - Our flexible and easy-to-use reprogrammable radiation-tolerant PolarFire FPGAs can streamline the design of high-speed data paths within space payloads</span>
              </div>
            </Card>
          </Link>

          <Link to={toRTPolarFireSOCFPGA}>
            <Card variant="outlined" className={classes.productFamiliesSectionCard}>
              <div className={classes.productFamiliesSectionCardMedia}>
                <img className={classes.productFamiliesSectionCardImage} src={productFamiliesRTPolarFireSOCFPGAImage} alt="RT PolarFire® SOC FPGA" />
              </div>
              <div className={classes.productFamiliesSectionCardTextWrapper}>
                <span className={cx(classes.titleColor, classes.productFamiliesSectionCardTitle)}>RT PolarFire® SOC FPGA</span>
                <span className={cx(classes.subTitleColor, classes.productFamiliesSectionCardSubTitle)}>RT PolarFire SOC FPGA - Designed to enable high-performance data processing, our radiation-tolerant PolarFire SoC FPGA is the industry's first embedded, real-time, Linux®-capable, RISC-V®-based Microprocessor Subsystem (MSS) on the flight-proven RT PolarFire FPGA fabric.</span>
              </div>
            </Card>
          </Link>

          <Link to={toPIC64GX}>
            <Card variant="outlined" className={classes.productFamiliesSectionCard}>
              <div className={classes.productFamiliesSectionCardMedia}>
                <img className={classes.productFamiliesSectionCardImage} src={productFamiliesPic64Image} alt="PIC64GX" />
              </div>
              <div className={classes.productFamiliesSectionCardTextWrapper}>
                <span className={cx(classes.titleColor, classes.productFamiliesSectionCardTitle)}>PIC64GX</span>
                <span className={cx(classes.subTitleColor, classes.productFamiliesSectionCardSubTitle)}>The PIC64GX microprocessor (MPU) is a 64-bit Linux® Operating System (OS)-capable processor that provides an innovative, mid-range, embedded compute platform that is based on the RISC-V® Instruction Set Architecture (ISA).</span>
              </div>
            </Card>
          </Link>

          <Link to={toSmartFusion2}>
            <Card variant="outlined" className={classes.productFamiliesSectionCard}>
              <div className={classes.productFamiliesSectionCardMedia}>
                <img className={classes.productFamiliesSectionCardImage} src={productFamiliriesSmartFusion2FPGAImage} alt="SmartFusion® 2" />
              </div>
              <div className={classes.productFamiliesSectionCardTextWrapper}>
                <span className={cx(classes.titleColor, classes.productFamiliesSectionCardTitle)}>SmartFusion® 2</span>
                <span className={cx(classes.subTitleColor, classes.productFamiliesSectionCardSubTitle)}>SmartFusion® 2 Optimize design size and power consumption using these low-density, low-power devices</span>
              </div>
            </Card>
          </Link>

          <Link to={toIGLOO2}>
            <Card variant="outlined" className={classes.productFamiliesSectionCard}>
              <div className={classes.productFamiliesSectionCardMedia}>
                <img className={classes.productFamiliesSectionCardImage} src={productFamiliesIGLOO2Image} alt="IGLOO 2" />
              </div>
              <div className={classes.productFamiliesSectionCardTextWrapper}>
                <span className={cx(classes.titleColor, classes.productFamiliesSectionCardTitle)}>IGLOO 2</span>
                <span className={cx(classes.subTitleColor, classes.productFamiliesSectionCardSubTitle)}>IGLOO - Improve design integration with low-density IGLOO 2 devices that give you more resources than other FPGAs in their class.</span>
              </div>
            </Card>
          </Link>

          <Link to={toRTG4FPGA}>
            <Card variant="outlined" className={classes.productFamiliesSectionCard}>
              <div className={classes.productFamiliesSectionCardMedia}>
                <img className={classes.productFamiliesSectionCardImage} src={productFamiliesRTG4FPGA2Image} alt="RTG4™ FPGA" />
              </div>
              <div className={classes.productFamiliesSectionCardTextWrapper}>
                <span className={cx(classes.titleColor, classes.productFamiliesSectionCardTitle)}>RTG4™ FPGA</span>
                <span className={cx(classes.subTitleColor, classes.productFamiliesSectionCardSubTitle)}>Our RTG4 FPGAs can implement designs for harsh radiation environments such as space flights.</span>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      <section id="section-mega-trends" className={cx(classes.section, classes.megaTrendsSection, classes.even)}>
        <div className={classes.megaTrendsSectionTitleWrapper}>
          <span className={cx(classes.megaTrendsSectionTitle, classes.titleColor)}>Mega Trends</span>
          <span className={cx(classes.megaTrendsSectionSubTitle, classes.subTitleColor)}>Our solutions power innovation across diverse industries and applications</span>
        </div>

        <div className={classes.megaTrendsSectionCardWrapper}>
          <Card variant="outlined" className={classes.megaTrendsSectionCard}>
            <div className={classes.landingTextList}>
              <div className={classes.landingPageTextListItem}>
                <img src={megaTrendsMedicalImage} width={64} height={64} />
                <div className={classes.megaTrendsSectionTextListItemTextWrapper}>
                  <span className={cx(classes.megaTrendsSectionListItemTitle, classes.titleColor)}>Medical-Diagnostic/Imaging</span>
                  <ul className={cx(classes.megaTrendsSectionListItemTitleContentWrapper, classes.subTitleColor)}>
                    <li className={classes.megaTrendsSectionListItem}>Edge Connectivity</li>
                    <li className={classes.megaTrendsSectionListItem}>Industrial Edge</li>
                    <li className={classes.megaTrendsSectionListItem}>Smart Embedded Vision</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="outlined" className={classes.megaTrendsSectionCard}>
            <div className={classes.landingTextList}>
              <div className={classes.landingPageTextListItem}>
                <img src={megaTrendsSpaceImage} width={64} height={64} />
                <div className={classes.megaTrendsSectionTextListItemTextWrapper}>
                  <span className={cx(classes.megaTrendsSectionListItemTitle, classes.titleColor)}>Space</span>
                  <ul className={cx(classes.megaTrendsSectionListItemTitleContentWrapper, classes.subTitleColor)}>
                    <li className={classes.megaTrendsSectionListItem}>Industrial Edge</li>
                    <li className={classes.megaTrendsSectionListItem}>Smart Embedded Vision</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="outlined" className={classes.megaTrendsSectionCard}>
            <div className={classes.landingTextList}>
              <div className={classes.landingPageTextListItem}>
                <img src={megaTrendsCommunicationsImage} width={64} height={64} />
                <div className={classes.megaTrendsSectionTextListItemTextWrapper}>
                  <span className={cx(classes.megaTrendsSectionListItemTitle, classes.titleColor)}>COMMS 10-100G, Optical & 5G</span>
                  <ul className={cx(classes.megaTrendsSectionListItemTitleContentWrapper, classes.subTitleColor)}>
                    <li className={classes.megaTrendsSectionListItem}>Industrial Edge</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="outlined" className={classes.megaTrendsSectionCard}>
            <div className={classes.landingTextList}>
              <div className={classes.landingPageTextListItem}>
                <img src={megaTrendsAerospaceAndDefenseImage} width={64} height={64} />
                <div className={classes.megaTrendsSectionTextListItemTextWrapper}>
                  <span className={cx(classes.megaTrendsSectionListItemTitle, classes.titleColor)}>Aerospace & Defense</span>
                  <ul className={cx(classes.megaTrendsSectionListItemTitleContentWrapper, classes.subTitleColor)}>
                    <li className={classes.megaTrendsSectionListItem}>Edge Connectivity</li>
                    <li className={classes.megaTrendsSectionListItem}>Industrial Edge</li>
                    <li className={classes.megaTrendsSectionListItem}>Smart Embedded Vision</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="outlined" className={classes.megaTrendsSectionCard}>
            <div className={classes.landingTextList}>
              <div className={classes.landingPageTextListItem}>
                <img src={megaTrendsIndustrialImage} width={64} height={64} />
                <div className={classes.megaTrendsSectionTextListItemTextWrapper}>
                  <span className={cx(classes.megaTrendsSectionListItemTitle, classes.titleColor)}>Industrial</span>
                  <ul className={cx(classes.megaTrendsSectionListItemTitleContentWrapper, classes.subTitleColor)}>
                    <li className={classes.megaTrendsSectionListItem}>Edge Connectivity</li>
                    <li className={classes.megaTrendsSectionListItem}>Industrial Edge</li>
                    <li className={classes.megaTrendsSectionListItem}>Smart Embedded Vision</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card variant="outlined" className={classes.megaTrendsSectionCard}>
            <div className={classes.landingTextList}>
              <div className={classes.landingPageTextListItem}>
                <img src={megaTrendsAutoImage} width={64} height={64} />
                <div className={classes.megaTrendsSectionTextListItemTextWrapper}>
                  <span className={cx(classes.megaTrendsSectionListItemTitle, classes.titleColor)}>Auto</span>
                  <ul className={cx(classes.megaTrendsSectionListItemTitleContentWrapper, classes.subTitleColor)}>
                    <li className={classes.megaTrendsSectionListItem}>Edge Connectivity</li>
                    <li className={classes.megaTrendsSectionListItem}>Industrial Edge</li>
                    <li className={classes.megaTrendsSectionListItem}>Smart Embedded Vision</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
