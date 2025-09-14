import * as React from "react";
import Layout from "@theme/Layout";
import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, Card, CardContent, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";

const SIDEBAR_WIDTH = 280;

export default function Products() {
  const [open, setOpen] = React.useState(true);
  const toggle = () => setOpen((v) => !v);

  return (
    <Layout title="Products" description="Our products">
      {/* Page-local sidebar (NOT the docs sidebar) */}
      <Drawer
        variant="persistent"
        open={open}
        PaperProps={{
          sx: {
            position: "sticky",
            top: "var(--ifm-navbar-height)",
            height: "calc(100vh - var(--ifm-navbar-height))",
            width: SIDEBAR_WIDTH,
            bgcolor: "background.sidebar",
            borderRight: (theme) => `1px solid ${theme.palette.divider}`,
          },
        }}
        sx={{ display: { xs: "none", lg: "block" } }}
      >
        <Box sx={{ width: SIDEBAR_WIDTH, p: 1, overflow: "auto" }}>
          <Typography variant="subtitle2" sx={{ px: 1, py: 1 }}>
            Filters
          </Typography>
          <List dense>
            <ListItemButton>
              <ListItemText primary="All" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Hardware" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Software" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Services" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* Content shifts when drawer is open on lg+ */}
      <Box
        sx={{
          transition: (theme) => theme.transitions.create("margin-left"),
          ml: { lg: open ? `${SIDEBAR_WIDTH}px` : 0 },
          px: { xs: 2, md: 3 },
          py: 3,
          maxWidth: 1400,
          mx: "auto",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <IconButton onClick={toggle} sx={{ display: { xs: "none", lg: "inline-flex" } }} aria-label="Toggle sidebar">
            {open ? "⟨" : "⟩"}
          </IconButton>
          <Typography variant="h4">Products</Typography>
        </Box>

        {/* <Grid container spacing={2}>
          {Array.from({ length: 8 }).map((_, i) => (
            <Grid key={i} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Product {i + 1}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Short description goes here.
                  </Typography>
                  <Button variant="contained" size="small">
                    Learn more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </Layout>
  );
}
