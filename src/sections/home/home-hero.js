import NextLink from 'next/link';
import EyeIcon from '@untitled-ui/icons-react/build/esm/Eye';
import LayoutBottomIcon from '@untitled-ui/icons-react/build/esm/LayoutBottom';
import { Box, Button, Container, Rating, Stack, SvgIcon, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { paths } from '../../paths';
import { HomeCodeSamples } from './home-code-samples';

export const HomeHero = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("/assets/gradient-bg.svg")', 
        height:"100vh",
        pt:"290px"
      }}
    >
      <Container>
        <Box>
          <Box sx={{display:"flex",justifyContent:"center", justifyItems:"center"}}>
            <Typography
              variant="h1"
              sx={{ mb: 4 }}
            >
              The Main Dashboard for&nbsp;
              <Typography
                component="span"
                color="primary.main"
                variant="inherit"
              >
              Batahaf
              </Typography>
              
            </Typography>
          </Box>
          <Stack
            alignItems="center"
            direction="column"
            
          >
            <Button
              component={NextLink}
              href={paths.dashboard.index}
              startIcon={(
                <SvgIcon fontSize="small">
                  <EyeIcon />
                </SvgIcon>
              )}
              sx={(theme) => theme.palette.mode === 'dark'
                ? {
                  backgroundColor: 'neutral.50',
                  color: 'neutral.900',
                  '&:hover': {
                    backgroundColor: 'neutral.200'
                  }
                }
                : {
                  backgroundColor: 'neutral.900',
                  color: 'neutral.50',
                  '&:hover': {
                    backgroundColor: 'neutral.700'
                  }
                }}
              variant="contained"
            >
              Enter the Dashboard
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
