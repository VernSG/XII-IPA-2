import BoxClassIg from "../components/BoxClassIg.jsx"
import BoxOldWeb from "../components/BoxOldWeb.jsx"
import BoxTextAnonim from "../components/BoxTextAnonim.jsx"
import Navbar from "../components/Navbar.jsx"

const Home = () => {
	return (
		<div className="text-white px-[10%]" id="Home">
			<Navbar />
			<div className="lg:hidden">
				<div className="font-bold text-5xl text-center py-20 ">XII IPA 2</div>
				<div
					className="border-2 flex justify-between px-10 text-4xl font-bold py-2 relative"
					id="TotalSiswa">
					<div id="AngkaGradientBlue" className="flex items-center justify-center ">
						XII
					</div>
					<div className="">
						<span id="AngkaGradientBlue" className="text-5xl">
							I
						</span>
						<span id="AngkaGradientPink" className="text-5xl">
							IPA
						</span>
					</div>
					<div id="AngkaGradientPink" className="flex items-center justify-center">
						2
					</div>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-2 gap-7 md:gap-5">
					<div className="grid gap-2 md:gap-0 md:grid-cols-1">
						<BoxClassIg />
					</div>
					<div className="grid gap-2 md:gap-0 md:grid-cols-1">
						<BoxOldWeb />
						<BoxTextAnonim />
					</div>
				</div>
			</div>

			{/* Dekstop */}
			<div className="hidden lg:block">
				<div className="flex justify-center items-center flex-col h-[100vh]">
					<h5 className="text-[1.4rem] font-semibold">Hi, Visitor!</h5>
					<h1 className="text-7xl font-extrabold" id="Glow">
						WELCOME
					</h1>
					<h6 className="text-sm" style={{ letterSpacing: "5px" }}>
						TO XII IPA 2
					</h6>
				</div>
			</div>
		</div>
	)
}

export default Home
