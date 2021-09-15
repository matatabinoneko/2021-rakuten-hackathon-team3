import logo from "./logo.svg";
import "./css/App.css";
import RoutingPage from "pages/RoutingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopPage from "pages/TopPage";
import MockPage from "pages/MockPage";
import Login from "pages/Login";
import UserPage from "pages/UserPage";
import Registrationpage from "pages/Registrationpage";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/mock">
					<MockPage />
				</Route>
				<Route path="/top">
					<TopPage />
				</Route>
				<Route path="/registration">
					<Registrationpage />
				</Route>
				<Route path="/signin">
					<Login />
				</Route>
				<Route path="/user/:userId" component={UserPage} />
				<Route path="/">
					<RoutingPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
