import { Box, Switch, ToggleButton, Typography } from "@mui/material";
import { useContext } from "react";
import { HiringManagerContext } from "./HiringManagerContext";

const HiringManagerToggle = () => {
    const context = useContext(HiringManagerContext);
    if (!context) {
        throw new Error('HiringManagerContext must be used within a HiringManagerContextProvider');
    }
    const { isHiringManager, setIsHiringManager } = context;

    return (
        <>
            <Typography variant="h6">Hiring Manager Content?</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 'fit-content', flexShrink: 0 }}>
                <Typography variant="h6">Hide</Typography>
                <Switch checked={isHiringManager} onChange={() => setIsHiringManager(!isHiringManager)} />
                <Typography variant="h6">Show</Typography>
            </Box>
        </>
    );
};

export default HiringManagerToggle;
