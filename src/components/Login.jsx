import { Alert, Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Login = () => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    if (!errors.email && !errors.password) {
      setOpen(true);
      form.setValue("email", "");
      form.setValue("password", "");
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert variant="filled" onClose={() => setOpen(false)} severity="success" sx={{ width: "100%" }}>
          Login Successufull!
        </Alert>
      </Snackbar>
      <Typography sx={{ textAlign: "center", m: 2 }} variant="h4">
        Login
      </Typography>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack width={400} spacing={2}>
          <TextField
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Login;
