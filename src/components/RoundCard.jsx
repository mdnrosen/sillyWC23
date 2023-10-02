import { Card } from '@mui/material'


// Card component for easier tweaking to various mobile and browser styles
export const RoundCard = ({ children, fullHeight = false  }) => (
    <Card sx={{ pb: 2, mt: 0, height: fullHeight ? '100vh' : 'auto'  }}>
        {children}
    </Card>
  )

