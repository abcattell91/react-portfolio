import { signInWithGoogle } from "../../firebase";

const Login = () => {
  return (
    <div className="dashboard">
    <h1>Add my new projects via login. Only for me...</h1>
      <button onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login;
