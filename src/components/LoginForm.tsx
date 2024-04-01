import { SyntheticEvent, useState } from "react"
import loginService from "@/services/login"
import blogService from "@/services/blogs"

interface LoginFormProps {
  notificationHelper: (message: string, isItError: boolean) => void;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

const LoginForm = ({ notificationHelper, setUser } : LoginFormProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event: SyntheticEvent) => {
    event.preventDefault()
    try {
      const loginUser = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedBlogappUser',
        JSON.stringify(loginUser)
      )

      blogService.setToken(loginUser.token)
      setUser(loginUser)
      setUsername('')
      setPassword('')
    } catch (error) {
      notificationHelper(
        'Wrong username or password',
        true
      )
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          password
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default LoginForm