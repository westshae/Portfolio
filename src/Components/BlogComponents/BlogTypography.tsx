import { Typography } from "@mui/material"

const TextForCard: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Typography variant="body1" color="text.secondary">
            {children}
        </Typography>
    )
}

const HeaderForCard: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Typography variant="h5" component="div" color="text.secondary">
            {children}
        </Typography>
    )
}

export {TextForCard, HeaderForCard}