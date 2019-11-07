import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
//import Nav from "./components/Nav";
import Login from "./components/Login";
import Jumbotron from "./components/Jumbotron"
import Register from "./components/Register";
import { Container } from "./components/Grid";
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/PublicRoute";
import Home from "./pages/Home";
import Results from "./pages/Results";
import './App.css';
import Footer from './components/Footer';


//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<div>

		<Jumbotron />
		{/* <Nav className="App-header" />  */}
		<Router>
			<div>
				<AuthButton />
				{/* <ul style={listStyle}>
					<li><Link to="/home">Home Page</Link></li>
					<li><Link to="/public">Public Page</Link></li>
					<li><Link to="/protected">Protected Page</Link></li>
					<li><Link to="/register">Register a New User</Link></li>
				</ul> */}
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/" component={Home} />
					<Route path="/reader" component={PublicRoute} />
					<Route path="/results" component={Results} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<PrivateRoute path="/pinned" component={ProtectedRoute} />
					{/* <Route component={NoMatch} /> */}
				</Switch>
			</div>
		</Router>

		<Footer />

	</div>

)


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			<p>Success! You are Logged In!</p>
			<button className="btn btn-danger"
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
		</div>
	) : (
			<p></p>
		)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props} />
		) : (
				<Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				}} />
			)
	)} />
)



export default AuthExample

