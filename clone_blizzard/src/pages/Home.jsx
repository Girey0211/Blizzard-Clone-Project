import Header from "../components/home/HomeHeader";
import Advertieses from "../components/home/HomeAdvertises";
import Games from "../components/home/HomeGames";
import Download from "../components/home/HomeDownload";
import Footer from "../components/home/HomeFooter";
import "./style/home.css";

export default function Home() {
	return (
		<>
			<Header />
			<Advertieses />
			<Games />
			<Download />
			<Footer />
		</>
	);
}
