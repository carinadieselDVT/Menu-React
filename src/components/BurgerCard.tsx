import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export type BurgerCardProps = {
  name: string;
  description?: string;
};
export function BurgerCard({ name, description }: BurgerCardProps) {
  return (
    <Card sx={{ backgroundColor: "rgb(156, 189, 211)" }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
