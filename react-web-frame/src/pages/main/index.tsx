import { FC, useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import mainStyle from "./style/index.module.scss";
import { Outlet, useNavigate} from "react-router-dom";
import { MenuListDataModels } from "./models";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  drawer: {
    width: 240,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
  },
  content: {
    flex: 1,
  }
}));
const routeList: MenuListDataModels[] = [
  { key: "pageOne", path: "pageOne", pageName: "页面一", icon: <DesktopWindowsOutlinedIcon sx={{ color: "#000"}}/> },
  { key: "pageTwo", path: "pageTwo", pageName: "页面二", icon:  <SettingsOutlinedIcon sx={{ color: "#000" }}/>}
];
export const Main: FC = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [ menuListVisible, setMenuListVisible ] = useState<boolean>(false);
  const [ activeKey, setActiveKey ] = useState<string>("");
  const [ lightThemeColor, setLightThemeColor ] = useState<boolean>(true);
  const toggleMenuList = () => {
    setMenuListVisible(!menuListVisible);
  };
  const menuListItemClick = (url: string) => {
    setActiveKey(`/main/${url}`);
    setMenuListVisible(!menuListVisible);
  };
  const toggleThemeColor = () => {
    setLightThemeColor(!lightThemeColor);
  };
  useEffect(() => {
    if(activeKey === "") {
      navigate("/main/pageOne", { replace: true });
    } else {
      navigate(activeKey, { replace: true });
    };
  }, [activeKey, navigate]);
  return (
    <div className={mainStyle.main}>
      <Box className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleMenuList}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Menu</Typography>
            {
              lightThemeColor? 
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={toggleThemeColor}
              >
                <Brightness5OutlinedIcon />
              </IconButton>
              :
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={toggleThemeColor}
              >
                <Brightness3OutlinedIcon />
              </IconButton>
            }
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          variant="temporary"
          className={classes.drawer}
          open={ menuListVisible }
          onClose={ toggleMenuList }
        >
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
          </List>
        </Drawer>
        <Box className={classes.content}>
          <Outlet />
        </Box>
      </Box>
    </div>
  )
};