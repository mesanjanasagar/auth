import { Avatar, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const handleAuth = () => {
    navigate('/auth')
  }
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Card variant="outlined" sx={{
        maxWidth: 600,
        width: "100%"
      }}>
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            Login to
          </Typography>
          <List>
            <ListItem button divider onClick={handleAuth}>
              <ListItemIcon>
                <Avatar >T</Avatar>
              </ListItemIcon>
              <ListItemText primary="Todo App" />
              <LoginOutlinedIcon />
            </ListItem>
            <ListItem button divider >
              <ListItemIcon>
                <Avatar >D</Avatar>
              </ListItemIcon>
              <ListItemText primary="Demo App" />
              <LoginOutlinedIcon />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Home