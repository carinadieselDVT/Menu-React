import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { burgerData } from "./data/burgers";
import { BurgerCard } from "./components/BurgerCard";
import { useMemo, useState } from "react";
import { FilterTabs, TabValue } from "./components/FilterTabs";

export default function App() {
  const [tab, setTab] = useState<TabValue>(TabValue.All);

  // Filter what shows based on which tab is visible. Keep in memo so it does not rerender
  const visible = useMemo(() => {
    switch (tab) {
      case TabValue.Spicy:
        return burgerData.filter((burger) => burger.isSpicy);
      case TabValue.Vegan:
        return burgerData.filter((burger) => burger.isVegan);
      default:
        return burgerData;
    }
  }, [tab]);

  return (
    <Container maxWidth="md" sx={{ minHeight: "100vh" }}>
      <Box sx={{ pt: 4 }}>
        <Typography variant="h4" component="h2" color="white" fontSize={32}>
          FOOOOOOD
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        <FilterTabs value={tab} onChange={setTab} />
      </Box>

      <Box
        sx={{
          my: 2,
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        {visible.length ? (
          visible.map((burger) => (
            <BurgerCard
              key={burger.id}
              name={burger.name}
              description={burger.description}
            />
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            No results for this tab.
          </Typography>
        )}
      </Box>
    </Container>
  );
}
