import { Card } from '@mui/material'


// Card component for easier tweaking to various mobile and browser styles
export const RoundCard = ({ children, fullHeight = false  }) => (
    <Card sx={{ py: 2, mt: 0, height: fullHeight ? '100%' : 'auto'  }}>
        {children}
    </Card>
  )

