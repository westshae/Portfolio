import { Box, Switch, Typography } from "@mui/material";
import { useContext } from "react";
import { NerdContext } from "./NerdContext"; // Updated context import

const NerdToggle = () => { // Updated component name
    const context = useContext(NerdContext); // Updated context usage
    if (!context) {
        throw new Error('NerdContext must be used within a NerdContextProvider'); // Updated error message
    }
    const { isNerd, setIsNerd } = context; // Updated variable names

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
                Hide Nerd Stuff?
            </Typography>
            <Switch 
                color="secondary"
                checked={isNerd} // Updated state reference
                onChange={() => setIsNerd(!isNerd)} // Updated setter reference
                size="small"
            />
        </Box>
    );
};

export default NerdToggle; // Updated export name
