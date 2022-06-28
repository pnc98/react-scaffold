import { FC, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Collapse, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, ThemeProvider, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import mainStyle from "./style/index.module.scss";
import { Outlet, useNavigate} from "react-router-dom";
import { MenuListDataModels } from "../../core/model/mainLayout";
import { lightTheme, darkTheme } from "../../assets/themeColor";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Brightness5RoundedIcon from '@mui/icons-material/Brightness5Rounded';
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';
import { StarBorder } from "@mui/icons-material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
    },
  },
}));
const MainContent = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  paddingTop: "64px",
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  background:  theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: `${drawerWidth}px`,
  }),
}));
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const CustomDesktopWindowsOutlinedIcon = styled(DesktopWindowsOutlinedIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}));
const CustomSettingsOutlinedIcon = styled(SettingsOutlinedIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}));
const CustomChevronLeftIcon = styled(ChevronLeftIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}));
const CustomStarBorder = styled(ChevronLeftIcon)(({ theme }) => ({
  color: theme.palette.primary.contrastText
}));
const routeList: MenuListDataModels[] = [
  { key: "pageOne", path: "pageOne", pageName: "页面一", icon: <CustomDesktopWindowsOutlinedIcon /> },
  { key: "pageTwo", path: "pageTwo", pageName: "页面二", icon:  <CustomSettingsOutlinedIcon />}
];
export const Main: FC = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [ menuListVisible, setMenuListVisible ] = useState<boolean>(false);
  const [ activeKey, setActiveKey ] = useState<string>("");
  const [ lightThemeColor, setLightThemeColor ] = useState<boolean>(true);

  const menuListItemClick = (url: string) => {
    setActiveKey(`/main/${url}`);
  };
  const toggleThemeColor = () => {
    setLightThemeColor(!lightThemeColor);
  };
  const handleMenuListItemOpen = () => {
    setMenuListVisible(true);
  };

  const handleMenuListItemClose = () => {
    setMenuListVisible(false);
  };
  useEffect(() => {
    if(activeKey === "") {
      navigate("/main/pageOne", { replace: true });
    } else {
      navigate(activeKey, { replace: true });
    };
  }, [activeKey, navigate]);
  return (
    <ThemeProvider theme={lightThemeColor? lightTheme : darkTheme}>
      <div className={mainStyle.main}>
        <Box className={classes.root}>
          <AppBar position="fixed" open={menuListVisible}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuListItemOpen}
                sx={{ mr: 2, ...(menuListVisible && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Menu</Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={toggleThemeColor}
              >
                {lightThemeColor? <Brightness2RoundedIcon /> : <Brightness5RoundedIcon />}
              </IconButton>
            </Toolbar>
          </AppBar>
          <CustomDrawer
            variant="persistent"
            anchor="left"
            className={classes.drawer}
            open={ menuListVisible }
          >
            <DrawerHeader>
              <IconButton onClick={handleMenuListItemClose}>
                <CustomChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            <List disablePadding>
              {
                routeList.map((item) => (
                <ListItem key={item.key} disablePadding>
                  <ListItemButton onClick={() => menuListItemClick(item.path)}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.pageName} />
                  </ListItemButton>
                </ListItem>
                ))
              }
              <Collapse in={menuListVisible} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </Collapse>
            </List>
          </CustomDrawer>
          <MainContent open={menuListVisible}>
            <Outlet />
          </MainContent>
        </Box>
      </div>
    </ThemeProvider>
  )
};
