import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useContext, useState } from "react";
  import { Link, } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
  
  export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext)
    const handleSubmit =(event)=>{
      event.preventDefault();
        signIn(email,password)
        .then(result=>{
          const logingUser = result.user
          setError('Login Successfully')
        })
        .catch(error=>{
          setError(error.message);
        })
    }
    return (
      <div className="container text-center mx-auto">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to log in
          </Typography>
            <div>
              <p className="text-red-800">{error}</p>
            </div>
          <form 
            onSubmit={handleSubmit}
          className="mt-8 mx-auto mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div>
                <p></p>
              </div>
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
           
            <Button to="/" type="submit" className="mt-6" fullWidth>
              Login
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
  