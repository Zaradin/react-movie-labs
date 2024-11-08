import React, { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import { auth } from "../firebase/firebase";

const AccountDetailsPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Set up Firebase listener to get the current user
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 3, mt: 5 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                >
                    Account Details
                </Typography>
                {user ? (
                    <>
                        <Typography variant="h6">
                            Email: {user.email}
                        </Typography>
                        <Typography variant="body1">
                            Username: {user.displayName || "N/A"}
                        </Typography>
                    </>
                ) : (
                    <Typography variant="body1">
                        Loading user information...
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default AccountDetailsPage;
