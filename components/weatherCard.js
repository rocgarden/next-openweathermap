import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function WeatherCard(props) {
  const { city, date, temp, maxTemp, feelsLike, icon, description } = props;

  return (
    <Box
      sx={{
        display: "grid",
        px: 12,
        py: 6,
      //  mx: { xs: 2, lg: 3 },
        mb: 10,
        color: "#fff",
      }}
    >
      <Box
        sx={{
          ml: 12,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          display="block"
          mb={3}
          textAlign="left"
        >
          {city}
        </Typography>
        <Typography variant="h6" display="block" pr={6}>
          {date}
        </Typography>
        <Typography>Current Temperature: {temp}&#176;</Typography>
        <Typography>High: {maxTemp}&#176;</Typography>
        <Typography>Feels Like: {feelsLike}&#176;</Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "40vw",
          height: "40vh",
          pr: 85,
           ml: 25,
          display: { xs: "none", sm: "flex", md: "flex" },
        }}
      >
        <Image
          src={icon}
          alt="face-image"
          style={{
            objectFit: "contain",
          }}
          fill
        />
      </Box>
      <Box>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}
