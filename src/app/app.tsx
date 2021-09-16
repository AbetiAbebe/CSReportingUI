
import { RenderRoutes } from "../routes/routes"
import ROUTES from "../routes/routes-config"
const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
     <RenderRoutes routes={ROUTES} />
    </div>
  )
}

export default App
