import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "top",
        margin: "auto",
      }}
    >
      <div>
        <Typography variant="h6">
          The page you’re looking for doesn’t exist.
        </Typography>
        <Grid item xs={6} marginTop={2}>
          <img
            src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
            alt=""
            width={500}
            height={250}
          />
        </Grid>
        <Button className={styles.button} href="/users" variant="contained">
          Back Home
        </Button>
      </div>
    </Box>
  );
};

export default NotFoundPage;
