import {
  Avatar,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const Home = () => {
  const handleAuth = (id) => {
    switch (id) {
      case 1:
        window.location.href = "http://localhost:3000";
        break;
      case 2:
        window.location.href = "http://localhost:3002";
        break;
      default:
        console.log(id);
        break;
    }
  };
  const data = [
    { name: "Todo App", id: 1 },
    { name: "Demo App", id: 2 },
  ];
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card
        variant="outlined"
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            Login to
          </Typography>
          <List>
            {data.map((val) => (
              <ListItem
                key={val.id}
                button
                divider
                onClick={() => handleAuth(val.id)}
              >
                <ListItemIcon>
                  <Avatar>{val.name[0]}</Avatar>
                </ListItemIcon>
                <ListItemText primary={val.name} />
                <LoginOutlinedIcon sx={{ color: "#989898" }} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
