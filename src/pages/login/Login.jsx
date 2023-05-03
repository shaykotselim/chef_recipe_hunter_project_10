import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  
  export default function Login() {
    return (
      <div className="container text-center mx-auto">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to log in
          </Typography>
          <form className="mt-8 mx-auto mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              
              <Input size="lg" label="Email" />
              <Input type="password" size="lg" label="Password" />
            </div>
           
            <Button className="mt-6" fullWidth>
              Submit
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Do not have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Register
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    );
  }
  