import React, { useState } from "react";
import { signUp } from "../../auth/auth";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(email, password, username);
    };

    const handleLoginRedirect = () => {
        navigate("/login");
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 3, mt: 5 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                >
                    Sign Up
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Username"
                        type="text"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                    >
                        Sign Up
                    </Button>
                    <Divider sx={{ my: 2 }}>Or</Divider>
                    <Button
                        onClick={handleLoginRedirect}
                        variant="outlined"
                        color="secondary"
                        fullWidth
                    >
                        Already have an account? Log In
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default SignUp;
