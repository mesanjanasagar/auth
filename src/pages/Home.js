import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
        variant="elevation"
        elevation={2}
        sx={{
          overflow: "visible",
          maxWidth: 600,
          width: "100%",
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Button
            disableRipple
            sx={{
              background: "linear-gradient(45deg, #B56AFF 30%, #B799FF 90%)",
              border: 0,
              borderRadius: 3,
              boxShadow: "0 3px 5px 2px rgba(159, 90, 253, .3)",
              color: "white",
              height: 48,
              padding: "0 30px",
              mt: -5,
              display: "flex",
              mx: "auto",
            }}
          >
            Login to
          </Button>
          <List>
            {data.map((val) => (
              <ListItem
                key={val.id}
                divider
                button
                sx={{
                  maxWidth: 450,
                  mx: "auto",
                }}
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
