import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";

export default function FiveDayCard(props) {
    const {  date, temp, maxTemp, feelsLike, icon, description } = props;

  return (
    <Grid
      sx={{
        mt: 10,
        mx: 1,
        mb: 5,
      }}
    >
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "#000000",
          opacity: 0.3,
          color: "#fff",
        }}
      >
        <CardContent>
          <Typography fontWeight="bold" display="block">
            {date}
          </Typography>
          <Typography>Current Temperature: {temp}&#176;</Typography>
          <Typography>High: {maxTemp}&#176;</Typography>
          <Typography>Feels Like: {feelsLike}&#176;</Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <Box
          sx={{
            width: 50,
            alignItems: "center",
            justifyContent: "center",
            pl: 3,
            // mr: 5,
            display: { xs: "none", sm: "block", md: "block" },
          }}
        >
          <Image src={icon} alt="face-image" width={65} height={65} />
        </Box>
      </Card>
    </Grid>
  );
}
