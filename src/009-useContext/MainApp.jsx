import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { NotFoundPage } from "./NotFoundPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
   <UserProvider>
        <h1>Main App</h1>
        <Navbar />
        <hr />

        <Routes>
            <Route aria-label='home' path="/" element={<HomePage />} />
            <Route aria-label='login' path="login" element={<LoginPage />} />
            <Route aria-label='about' path="about" element={<AboutPage />} />



            {/* <Route path="/*" element={<NotFoundPage />} /> */}
            <Route path="notfound" element={<NotFoundPage />} />
            <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
   </UserProvider>
  )
}
