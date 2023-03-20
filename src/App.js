import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import CourseItemDetails from './components/CourseItemDetails'
import './App.css'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </div>
)

export default App
