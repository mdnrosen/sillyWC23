import { Card } from '@mui/material'


// Card component for easier tweaking to various mobile and browser styles
export const RoundCard = ({ children }) => (
    <Card sx={{ py: 2, m: 0 }}>
        {children}
    </Card>
  )

