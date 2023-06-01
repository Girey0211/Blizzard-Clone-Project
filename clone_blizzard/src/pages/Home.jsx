import Header from "../components/home/HomeHeader";
import Advertieses from "../components/home/HomeAdvertises";
import Games from "../components/home/HomeGames";
import Download from "../components/home/HomeDownload";
import Footer from "../components/home/HomeFooter";

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
