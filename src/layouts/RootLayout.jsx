import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Container from "../shard/Container"

const RootLayout = () => {
  return (
    <div>
      <header className="h-16">
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-284px)]">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default RootLayout
