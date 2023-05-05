import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

export default function Register() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser,profileUpdate } = useContext(AuthContext);

  const handleRegister = (event) => {
    
    event.preventDefault();
    createUser(email, password)
    .then(result=>{
      const loggedUser = result.user;
      profileUpdate(result.user,name, photo)
      .then(()=>{
          console.log('profile name & photo url update');
      })
      .catch(error=>{
        console.log(error.message);
      })
    })
    
    .catch(error=>{
      console.log(error.message);
    })

  };

  return (
    <div className="container text-center mx-auto">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          onSubmit={handleRegister}
          className="mt-8 mx-auto mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="lg"
              label="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              size="lg"
              label="Photo url"
              value={photo}
              onChange={(event) => setPhoto(event.target.value)}
            />
            <Input
              size="lg"
              label="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              size="lg"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
