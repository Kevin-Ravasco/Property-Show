import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/elegant-icons.css";
import "./css/nice-select.css";
import "./css/slicknav.min.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Properties from "./Pages/Properties";
import SingleProperty from "./Pages/SingleProperty";
import Contact from "./Pages/Contact";
// import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import Error404 from "./Pages/404";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/properties">
					<Properties />
				</Route>
				<Route exact path="/properties/:id">
					<SingleProperty />
				</Route>
				{/* <Route exact path="/blog">
					<Blog />
				</Route> */}
				<Route exact path="/blog:slug">
					<SingleBlog />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/contact">
					<Contact />
				</Route>
				<Route exact path="*">
					<Error404 />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
