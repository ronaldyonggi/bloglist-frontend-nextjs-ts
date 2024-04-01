"use client"

import LoginForm from "@/components/LoginForm";
import { useEffect, useState } from "react";
import blogService from "@/services/blogs"

export default function App() {
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const [user, setUser] = useState<IUser | null>(null)
  const [notification, setNotification] = useState('')
  const [isError, setIsError] = useState(false)

  /**
   * Fetch blogs on initial render.
   */
  useEffect(() => {
    blogService.getAll()
      .then(res => setBlogs(res.data))
  }, [])

  /**
   * Fetch login details from browser local storage if there's one in the first place.
   */
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser');
    // If login details is found in browser, set user and set token to that user's token
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  /**
   * Helper function to set up notification and automatically resets it after a short period of time
   * @param message Message to display
   * @param isItError Boolean indicating whether the notification is an error
   */
  const notificationHelper = (message: string, isItError: boolean) => {
    setNotification(message)
    setIsError(isItError)
    setTimeout(() => {
      setNotification('')
    }, 6000)
  }

  /**
   * Handles logging out
   */
  const handleLogout = () => {
    blogService.setToken(null)
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  return (
    <div>
      { user ? (
        <div>
          <p>{user.name} logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoginForm notificationHelper={notificationHelper} setUser={setUser} />
      )}
    </div>
  );
}