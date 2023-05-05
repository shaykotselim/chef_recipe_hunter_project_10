import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {AiOutlineGithub,AiOutlineGooglePlus} from "react-icons/ai";
import app from "../../firebase/firebase.config";

const auth = getAuth(app)
const githubProvider = new GithubAuthProvider(); 
const googleProvider = new GoogleAuthProvider();
  export default function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext)
    
    const previousLocation = useLocation()
    console.log(previousLocation);
    const navigate = useNavigate()
    const from  = location.state?.from?.pathname || '/'
    const handleSubmit =(event)=>{
      event.preventDefault();
        signIn(email,password)
        .then(result=>{
          const logingUser = result.user
          navigate(from,{replace: true})
      
          setError('Login Successfully')
        })
        .catch(error=>{
          setError(error.message);
        })
    }
    // ------------Github Login-----------------------------

    const handleGithubLogin =()=>{
        signInWithPopup(auth,githubProvider)
        .then(user=>{
          // console.log(user);
          navigate(from,{replace: true})
        })
        .catch(error=>{
          console.log(error.message);
        })

    }
    const handleGoogleLogin = ()=>{
      signInWithPopup(auth, googleProvider)
      .then(user=>{
        navigate(from,{replace: true})
      })
      .catch(error=>{
        console.log(error.message);
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
           
            <Button type="submit" className="mt-6" fullWidth>
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
        {/* -------------------Gmail & Github Login */}
        <div className="flex justify-center items-center gap-4">
            <div>
            <button onClick={handleGithubLogin} className="text-6xl">
            <span className="text-sm">Github SignIn</span>
            <AiOutlineGithub/>
              
            </button>
            </div>
            <div>
            <Link to='/'>
             <button 
              onClick={handleGoogleLogin}
              className="text-6xl">
                <span className="text-sm">Google SignIn</span>
               <AiOutlineGooglePlus/>
             </button>
            </Link>
            </div>
        </div>
      </div>
    );
  }
  