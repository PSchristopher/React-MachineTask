import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { Config } from "../Config";
import { GetUserResponse, User } from "../Model/Type/User";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import "./home.css";
function Home() {
  const [users, setUsers] = useState<User[]>(() => {
    const data = localStorage.getItem("UserDetails");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  });
  const [loading, setLoading] = useState(false);

  const getAllData = useCallback(async () => {
    let { data } = await axios.get<GetUserResponse>(
      `${Config.BASE_URL}?results=50`
    );
    return data.results;
  }, []);

  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      let result = await getAllData();
      let data = localStorage.getItem("UserDetails");
      if (!data) {
        setUsers(result);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Unexpected error")
    } finally {
      setLoading(false);
    }
  }, [getAllData]);

  useEffect(() => {
    if (users.length != 0) {
      localStorage.setItem("UserDetails", JSON.stringify(users));
    }
  }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = (id: string) => {
    const dataa = localStorage.getItem("UserDetails");
    if (dataa) {
      const localData = JSON.parse(dataa) as User[];
      let filteredArray = localData.filter((obj) => obj.email !== id);
      setUsers(filteredArray);
    }
  };
  
  const refreashUser = async () => {
    let result = await getAllData();
    setUsers(result);
  };

  return (
    <>
      <Container>
        <div className="header-area">
          <Button onClick={() => refreashUser()}>refresh</Button>
          <p>Total : {users.length}</p>
        </div>

        <Grid container spacing={3}>
          {users.map((users, index) => {
            return (
              <Grid item key={index}>
                <Card className="card ">
                  <div className="card-img">
                    <CardMedia
                      component="img"
                      sx={{ height: 200 }}
                      src={users?.picture.large}
                      title="green iguana"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="text-field"
                    >
                      {users.name.title} - {users.name.first} {users.name.last}
                    </Typography>
                    <Typography variant="body2" className="email">
                      {users.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => deleteUser(users.email)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
