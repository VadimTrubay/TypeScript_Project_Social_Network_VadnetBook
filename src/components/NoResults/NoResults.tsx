import React from "react";
import {Box, Typography} from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

export const NoResults = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            textAlign="center"
        >
            <PeopleOutlineIcon color="disabled" sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h6" color="textSecondary">
                Not content
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
                Perhaps they are not there yet or they are hiding
            </Typography>
        </Box>
    );
};