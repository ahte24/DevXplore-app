import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const sora = Sora({ subsets: ["latin"] });


export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={sora.className}>
				<div className="min-h-[1800px] bg-[#000E0F] text-white">
					<Navbar />
					<div className="">{children}</div>
				</div>
			</body>
		</html>
	);
}
