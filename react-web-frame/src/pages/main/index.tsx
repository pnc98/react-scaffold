import { FC } from "react";
import { Box, Grid, Menu, MenuItem, Paper, styled } from "@mui/material";
import mainStyle from "./style/index.module.scss";

export const Main: FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div className={mainStyle.main}>
      <Box>
        <Grid container spacing={2}>
          <Grid item>
            <Item>123</Item>
          </Grid>
          <Grid item>
            <Item>123</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};