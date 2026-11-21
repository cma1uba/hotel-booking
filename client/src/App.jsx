import RootLayout from "./layout/RootLayout"
import About from "./pages/About"
import Experiences from "./pages/Experiences"
import Home from "./pages/Home"
import Hotels from "./pages/Hotels"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path="hotels" element={<Hotels/>} />
        <Route path="experiences" element={<Experiences/>} />
        <Route path="about" element={<About/>} />
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App