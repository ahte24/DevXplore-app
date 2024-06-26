"use client";
import Image from "next/image";
import Adobe from "@/public/adobe.svg";
import Figma from "@/public/figma.svg";
import Diamond from "@/public/diamond.svg";
import In from "@/public/in.svg";
import Graphic from "@/public/graphic.svg";
import Mobile from "@/public/mobile.svg";
import webApp from "@/public/webApp.svg";
import uiDesign from "@/public/uiDesign.svg";
import uX from "@/public/uX.svg";
import landingPage from "@/public/landingPage.svg";
import Design from "@/public/Design.svg";
import Dev from "@/public/Dev.svg";
import Management from "@/public/Management.svg";
import showCase from "@/public/showcase.svg";
import Link from "next/link";
import Image1 from "@/public/image1.png";
import Image2 from "@/public/image2.png";
import Image3 from "@/public/image3.png";
import Image4 from "@/public/image4.png";
import profile from "@/public/image4.png";
import { useState } from "react";

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const itemsToShow = 2.07;
	const itemWidth = 350;

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) =>
			Math.min(
				prevIndex + itemsToShow,
				Math.floor(testimonials.length / itemsToShow) * itemsToShow
			)
		);
	};
	const testimonials = [
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand essence. The feedback from our customers has been overwhelmingly positive.",
			name: "Mark Roberts",
			title: "Founder of GreenEarth Eco Store",
			image: profile,
		},
		{
			quote:
				"DigitX transformed our online presence, bringing our vision to life. The website they built for us is not only visually stunning but also highly functional.",
			name: "Jane Doe",
			title: "CEO of TechWorld",
			image: profile,
		},
		{
			quote:
				"We have seen a significant increase in traffic and engagement since DigitX revamped our site. Their teams expertise is unmatched.",
			name: "John Smith",
			title: "Marketing Director at SalesCorp",
			image: profile,
		},
		{
			quote:
				"We have seen a significant increase in traffic and engagement since DigitX revamped our site. Their teams expertise is unmatched.",
			name: "John Smith",
			title: "Marketing Director at SalesCorp",
			image: profile,
		},
		{
			quote:
				"We have seen a significant increase in traffic and engagement since DigitX revamped our site. Their teams expertise is unmatched.",
			name: "John Smith",
			title: "Marketing Director at SalesCorp",
			image: profile,
		},
	];
	return (
		<div className="">
			<div className="w-full bg 2xl:flex-row flex-col flex justify-center items-center min-h-[600px] pt-[120px] relative">
				<div className="2xl:w-1/2 h-full flex flex-col items-center justify-center">
					<div className=" max-w-[657px] px-5  flex justify-center flex-col gap-[20px] h-[550px]">
						<h4 className="text-[16px] text-[#507C7C]">
							Innovate. Elevate. Captivate
						</h4>
						<h1 className="xl:text-[40px] text-[35px] flex flex-col gap-3">
							Transforming Visions into Digital Excellence
						</h1>
						<p className="text-[16px] text-[#507C7C]">
							At Novus, we craft digital experiences that resonate. As your
							strategic digital partner, we merge creativity with cutting-edge
							technology to propel your brand to new heights. Join us on a
							journey where innovation meets impact.
						</p>
						<div className="buttons flex gap-4 z-20">
							<button className="flex items-center justify-center transition-all duration-300  h-[50px] w-[150px]  border border-[#00393D] hover:bg-[#66FFF0] rounded-full hover:text-black text-[14px]">
								View Projects
							</button>
							<button
								className="flex items-center justify-center transition-all duration-300  h-[50px] w-[150px]  border border-[#00393D] 
							bg-[#66FFF0] rounded-full text-black text-[14px] hover:bg-[#000e0f] hover:text-white"
							>
								Contact Us
							</button>
						</div>
					</div>
				</div>
				<div className="2xl:w-1/2 h-full hidden md:flex justify-center items-end ">
					<div className="max-w-[657px] h-[520px] heroBg2 heroBg1 rounded-3xl flex border border-x-[#00393D] border-t-[#00393D] border-b-[#040d0e] relative overflow-hidden bg-gradient-to-b from-[#00393D] to-slate-950">
						<div className="w-1/2 h-full rounded-l-3xl overflow-hidden">
							<svg
								width="328"
								height="446"
								viewBox="0 0 328 446"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g opacity="0.8" filter="url(#filter0_f_1_205)">
									<path
										d="M-8.68408 -29.2935L52.5557 -66.5485L206.533 324.48L-8.68408 -29.2935Z"
										fill="#00393D"
									/>
								</g>
								<defs>
									<filter
										id="filter0_f_1_205"
										x="-129.284"
										y="-187.149"
										width="456.417"
										height="632.229"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur
											stdDeviation="60.3"
											result="effect1_foregroundBlur_1_205"
										/>
									</filter>
								</defs>
							</svg>
						</div>
						<div className="w-1/2 h-full rounded-r-3xl flex ">
							<svg
								width="410"
								height="443"
								viewBox="0 0 310 443"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g opacity="0.8" filter="url(#filter0_f_1_206)">
									<path
										d="M295.334 -53.6782L360.324 -23.4358L120.628 321.758L295.334 -53.6782Z"
										fill="#00393D"
									/>
								</g>
								<defs>
									<filter
										id="filter0_f_1_206"
										x="0.0278397"
										y="-174.278"
										width="480.896"
										height="616.636"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur
											stdDeviation="60.3"
											result="effect1_foregroundBlur_1_206"
										/>
									</filter>
								</defs>
							</svg>
						</div>
						<div className="absolute h-full w-full backdrop-blur-lg opacity-40 flex flex-col"></div>
						<div className="absolute h-full w-full  flex flex-col p-5 ">
							<div className="w-full flex justify-center h-[20%] text-white gap-5 items-center">
								<div className="text-[#507C7C] hover:text-[#99FFF5] transition-all flex flex-col items-center justify-center gap-2 w-[110px]">
									<span className="text-[14px]">Design</span>
									<div className="h-4 w-full flex flex-col justify-center items-center gap-2">
										<svg
											// className="hidden"
											width="2"
											height="2"
											viewBox="0 0 2 2"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="1" cy="1" r="1" fill="#1AFFE9" />
										</svg>
										<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-custom-dark to-transparent"></div>
									</div>
								</div>
								<div className="text-[#507C7C]  hover:text-[#99FFF5] transition-all flex flex-col items-center justify-center gap-2 w-[110px]">
									<span className="text-[14px]">Development</span>
									<div className="h-4 w-full flex flex-col justify-center items-center gap-2">
										<svg
											className="hidden"
											width="2"
											height="2"
											viewBox="0 0 2 2"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="1" cy="1" r="1" fill="#1AFFE9" />
										</svg>
										<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-custom-dark to-transparent hidden"></div>
									</div>
								</div>
								<div className="text-[#507C7C] hover:text-[#99FFF5] transition-all flex flex-col items-center justify-center gap-2 w-[110px]">
									<span className="text-[14px]">Management</span>
									<div className="h-4 w-full flex flex-col justify-center items-center gap-2 ">
										<svg
											className="hidden"
											width="2"
											height="2"
											viewBox="0 0 2 2"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="1" cy="1" r="1" fill="#1AFFE9" />
										</svg>
										<div className="h-[2px] w-full bg-gradient-to-r from-transparent via-custom-dark to-transparent hidden"></div>
									</div>
								</div>
							</div>
							<div className="w-full flex flex-col justify-center h-[80%] z-20">
								<div className="w-full flex flex-col gap-4 items-center justify-center h-[30%]  mt-5">
									<span className="text-[12px] text-[#A2C3C3]">
										Tools we Use For Designing
									</span>
									<div className="w-full h-[60%]">
										<div className="w-[50%] mx-auto h-full rounded-full border border-[#00393D] bg-[#00171A] flex justify-evenly items-center">
											<Image src={Adobe} width={51} height={50} alt="" />
											<Image src={Figma} width={51} height={50} alt="" />
											<Image src={Diamond} width={51} height={50} alt="" />
											<Image src={In} width={51} height={50} alt="" />
										</div>
									</div>
								</div>
								<div className="w-full h-full relative">
									<div className="flex items-center justify-between px-3  gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-0 left-3">
										<Image width={57} height={57} src={webApp} alt="" />
										<span className="text-[14px]">Web Design</span>
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
												stroke="#1AFFE9"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
									<div className="flex items-center justify-between px-3  gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-16 left-[122px] rotate-45">
										<Image width={57} height={57} src={Graphic} alt="" />
										<span className="text-[14px]">Graphic Design</span>
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
												stroke="#1AFFE9"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
									<div className="flex items-center justify-between px-3  gap-2 absolute w-[200px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-0 right-[80px]">
										<Image width={57} height={57} src={uX} alt="" />
										<span className="text-[14px]">UX Design</span>
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
												stroke="#1AFFE9"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
									<div className="flex items-center justify-between px-3 gap-2 absolute w-[240px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[75px] right-[-33px] rotate-[58deg]">
										<Image width={57} height={57} src={landingPage} alt="" />
										<span className="text-[14px]">Landing Page</span>
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
												stroke="#1AFFE9"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
									<div className="flex items-center justify-between px-3 gap-2 absolute w-[260px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[88px] right-[114px] rotate-[16deg]">
										<Image width={57} height={57} src={uiDesign} alt="s" />
										<span className="text-[14px]">UI Design</span>
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
												stroke="#1AFFE9"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
									<div className="flex items-center justify-between px-3  gap-2 absolute w-[215px] h-[60px] bg-gradient-to-l from-[#012a2d77] to-[#000000] border border-[#00393D] rounded-full bottom-[123px] left-[-7px] -rotate-[55deg]">
										<Image width={57} height={57} src={Mobile} alt="" />
										<span className="text-[14px]">Hero Secrion</span>
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M3.75 17.0835L16.25 4.5835M16.25 4.5835L6.875 4.5835M16.25 4.5835V13.9585"
												stroke="#1AFFE9"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 w-full h-[250px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>
			</div>
			<div className="w-full mt-20 min-h-[180px] gap-4  flex flex-col justify-center px-8">
				<h4 className="text-center text-[16px] text-[#C1D7D7] my-4">
					Our Custombers
				</h4>

				<div className="flex items-center lg:flex-row flex-col min-h-[90px] justify-center gap-4 ">
					<div className="flex justify-center w-full lg:w-1/2 items-center gap-4 relative">
						<div className="w-1/3 border-x border-t  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
							<svg
								width="88"
								height="30"
								viewBox="0 0 88 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_212)">
									<path
										d="M13.4204 1.92432C6.17169 1.92432 0.295166 7.80068 0.295166 15.0494C0.295166 22.2984 6.17169 28.1743 13.4204 28.1743C20.6699 28.1743 26.5458 22.2984 26.5458 15.0494C26.5458 7.80115 20.6699 1.92494 13.4203 1.92494L13.4204 1.92432ZM19.4396 20.8544C19.2045 21.24 18.6998 21.3623 18.3142 21.1256C15.2325 19.2432 11.3531 18.8169 6.78436 19.8608C6.3441 19.9611 5.90525 19.6852 5.80494 19.2448C5.70416 18.8044 5.97891 18.3655 6.42027 18.2652C11.42 17.123 15.7087 17.6148 19.1684 19.7291C19.554 19.9658 19.6762 20.4689 19.4396 20.8544ZM21.0461 17.2806C20.7498 17.7621 20.1198 17.9141 19.6386 17.6179C16.1106 15.4494 10.7326 14.8213 6.5596 16.0881C6.01841 16.2515 5.4468 15.9465 5.28255 15.4063C5.11955 14.8651 5.4247 14.2946 5.96496 14.13C10.7317 12.6837 16.6576 13.3843 20.7091 15.874C21.1903 16.1702 21.3423 16.8003 21.0461 17.2808V17.2806ZM21.184 13.5592C16.9538 11.0466 9.97449 10.8156 5.93565 12.0414C5.28709 12.2381 4.60123 11.872 4.40469 11.2234C4.20815 10.5745 4.57396 9.88914 5.22299 9.69197C9.85929 8.28451 17.5666 8.55644 22.4369 11.4477C23.0215 11.7939 23.2127 12.5473 22.8664 13.1299C22.5215 13.7133 21.7661 13.9056 21.1846 13.5592H21.184ZM36.0046 14.0407C33.7383 13.5003 33.3354 13.121 33.3354 12.324C33.3354 11.571 34.0439 11.0643 35.0987 11.0643C36.1206 11.0643 37.1331 11.4491 38.1957 12.2412C38.2271 12.2652 38.2678 12.2748 38.307 12.2685C38.3478 12.2625 38.3822 12.2408 38.4057 12.208L39.5123 10.6482C39.5577 10.5839 39.5452 10.4954 39.4841 10.4463C38.2192 9.43179 36.7961 8.93856 35.1316 8.93856C32.685 8.93856 30.9751 10.407 30.9751 12.508C30.9751 14.761 32.4499 15.5588 34.9984 16.1746C37.166 16.6741 37.5327 17.0926 37.5327 17.8405C37.5327 18.6696 36.793 19.1852 35.6018 19.1852C34.279 19.1852 33.1991 18.7386 31.9923 17.6947C31.9625 17.6681 31.9217 17.6571 31.8841 17.6587C31.8434 17.6618 31.8073 17.6806 31.7822 17.7104L30.5409 19.1868C30.4892 19.2495 30.4955 19.3404 30.555 19.3937C31.9593 20.6476 33.6865 21.309 35.5516 21.309C38.1879 21.309 39.8916 19.8686 39.8916 17.6383C39.8963 15.7564 38.7694 14.7141 36.0093 14.0427L36.0046 14.0407ZM45.8568 11.8057C44.7142 11.8057 43.777 12.2558 43.0027 13.1782V12.14C43.0027 12.058 42.9369 11.9912 42.8554 11.9912H40.8257C40.7442 11.9912 40.6784 12.058 40.6784 12.14V23.6756C40.6784 23.7571 40.7442 23.8245 40.8257 23.8245H42.8554C42.9369 23.8245 43.0027 23.7571 43.0027 23.6756V20.0347C43.777 20.9015 44.7142 21.3262 45.8568 21.3262C47.9805 21.3262 50.1309 19.6915 50.1309 16.5664C50.134 13.4407 47.9837 11.8055 45.8584 11.8055L45.8568 11.8057ZM47.7705 16.5664C47.7705 18.1571 46.7909 19.2683 45.3866 19.2683C43.9995 19.2683 42.9526 18.1069 42.9526 16.5664C42.9526 15.0257 43.9995 13.8647 45.3866 13.8647C46.7674 13.8645 47.7705 15.0005 47.7705 16.5662V16.5664ZM55.64 11.8057C52.9051 11.8057 50.7625 13.9115 50.7625 16.6004C50.7625 19.2605 52.891 21.3435 55.6071 21.3435C58.3515 21.3435 60.5003 19.2448 60.5003 16.5664C60.5003 13.8971 58.3656 11.806 55.64 11.806V11.8057ZM55.64 19.284C54.1856 19.284 53.0884 18.1148 53.0884 16.5656C53.0884 15.0094 54.1479 13.8802 55.6071 13.8802C57.071 13.8802 58.1744 15.0489 58.1744 16.5996C58.1744 18.1555 57.1086 19.284 55.64 19.284ZM66.3402 11.9912H64.1067V9.70827C64.1067 9.62646 64.0409 9.55969 63.9594 9.55969H61.9297C61.8482 9.55969 61.7808 9.62646 61.7808 9.70827V11.9912H60.8059C60.7244 11.9912 60.6586 12.058 60.6586 12.14V13.8839C60.6586 13.9657 60.7244 14.0327 60.8059 14.0327H61.7808V18.5458C61.7808 20.3686 62.6883 21.2933 64.4797 21.2933C65.207 21.2933 65.8104 21.1428 66.3793 20.82C66.4264 20.7949 66.4546 20.7447 66.4546 20.6914V19.0301C66.4546 18.9799 66.4279 18.9313 66.384 18.9047C66.3402 18.8765 66.2853 18.8749 66.2399 18.8984C65.8496 19.0943 65.4719 19.1852 65.0487 19.1852C64.3982 19.1852 64.1067 18.889 64.1067 18.2276V14.0335H66.3402C66.4217 14.0335 66.4875 13.9667 66.4875 13.8847V12.1409C66.4906 12.0589 66.4248 11.9922 66.3417 11.9922L66.3402 11.9912ZM74.1204 12.0002V11.7198C74.1204 10.8949 74.437 10.527 75.1454 10.527C75.5686 10.527 75.9087 10.611 76.2895 10.738C76.3366 10.7527 76.3851 10.7454 76.4228 10.7173C76.4619 10.6893 76.4839 10.6443 76.4839 10.5966V8.88668C76.4839 8.82132 76.4431 8.76349 76.3789 8.74421C75.9776 8.62462 75.4636 8.5019 74.6924 8.5019C72.8195 8.5019 71.8274 9.55734 71.8274 11.553V11.9825H70.8525C70.771 11.9825 70.7036 12.0492 70.7036 12.131V13.8839C70.7036 13.9657 70.771 14.0327 70.8525 14.0327H71.8274V20.9924C71.8274 21.0754 71.8948 21.1413 71.9763 21.1413H74.0044C74.0874 21.1413 74.1533 21.0754 74.1533 20.9924V14.0331H76.0482L78.9509 20.9924C78.6217 21.7227 78.2973 21.8685 77.8553 21.8685C77.4979 21.8685 77.1202 21.7619 76.7362 21.5503C76.7002 21.5315 76.6563 21.5284 76.6187 21.5394C76.5795 21.5535 76.5466 21.5817 76.5309 21.6193L75.8428 23.1286C75.8099 23.2007 75.8381 23.2838 75.9071 23.3214C76.6249 23.7101 77.2722 23.8762 78.0732 23.8762C79.5715 23.8762 80.4006 23.1772 81.1294 21.2996L84.6496 12.2033C84.6684 12.1575 84.6622 12.1058 84.634 12.0652C84.6073 12.0249 84.5619 12.0006 84.5133 12.0006H82.4005C82.3363 12.0006 82.2798 12.0409 82.2595 12.1003L80.095 18.2809L77.7252 12.0962C77.7033 12.0387 77.6484 12.0006 77.5873 12.0006H74.1204V12.0002ZM69.6096 11.9912H67.5799C67.4984 11.9912 67.431 12.058 67.431 12.14V20.9924C67.431 21.0754 67.4984 21.1413 67.5799 21.1413H69.6096C69.6911 21.1413 69.7585 21.0754 69.7585 20.9924V12.1406C69.7585 12.0586 69.6927 11.9919 69.6096 11.9919V11.9912ZM68.6065 7.96023C67.8025 7.96023 67.1505 8.61099 67.1505 9.41487C67.1505 10.2192 67.8025 10.8708 68.6065 10.8708C69.4106 10.8708 70.061 10.2192 70.061 9.41487C70.061 8.61114 69.409 7.96023 68.6065 7.96023ZM86.3831 14.8376C85.5806 14.8376 84.9553 14.1927 84.9553 13.4095C84.9553 12.6263 85.5885 11.974 86.3909 11.974C87.1934 11.974 87.8188 12.6188 87.8188 13.4014C87.8188 14.1845 87.1856 14.8376 86.3831 14.8376ZM86.3909 12.116C85.659 12.116 85.1057 12.6975 85.1057 13.4095C85.1057 14.1212 85.6559 14.6949 86.3831 14.6949C87.115 14.6949 87.6683 14.1139 87.6683 13.4014C87.6683 12.6896 87.1182 12.116 86.3909 12.116ZM86.7075 13.5482L87.1119 14.1137H86.7702L86.4066 13.5949H86.0947V14.1137H85.8095V12.6147H86.4771C86.8267 12.6147 87.0555 12.7929 87.0555 13.0929C87.0571 13.3387 86.9144 13.4888 86.7091 13.5482H86.7075ZM86.4662 12.8719H86.0947V13.346H86.4662C86.6511 13.346 86.7624 13.2553 86.7624 13.1087C86.7624 12.9545 86.6511 12.8719 86.4662 12.8719Z"
										fill="#007780"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1_212">
										<rect
											width="87.5"
											height="30"
											fill="white"
											transform="translate(0.25)"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="w-1/3  border-x border-t  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
							<svg
								width="98"
								height="30"
								viewBox="0 0 98 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_215)">
									<path
										d="M95.3406 17.7915C95.2853 18.0684 95.1885 18.3036 95.0569 18.5112C94.9257 18.7185 94.7525 18.8849 94.5315 19.0161C94.3167 19.1409 94.0473 19.2098 93.7288 19.2098C93.4176 19.2098 93.1476 19.1477 92.9334 19.0161C92.7194 18.8909 92.5371 18.7181 92.4006 18.5112C92.269 18.3038 92.1721 18.0684 92.1101 17.7915C92.0491 17.5167 92.0189 17.236 92.02 16.9545C92.02 16.664 92.048 16.3733 92.1032 16.1038C92.1585 15.827 92.2553 15.5848 92.3869 15.3773C92.5181 15.1625 92.6913 14.9968 92.9123 14.8585C93.1271 14.7269 93.3967 14.6578 93.715 14.6578C94.0262 14.6578 94.2892 14.7269 94.5036 14.8585C94.7184 14.9914 94.9006 15.1711 95.0364 15.3841C95.1748 15.5985 95.2717 15.8475 95.3338 16.1175C95.3958 16.3941 95.4238 16.6708 95.4238 16.9545C95.4238 17.2382 95.3958 17.5149 95.3406 17.7915ZM97.181 15.5571C97.0494 15.0936 96.8559 14.6924 96.5929 14.3396C96.3229 13.9938 95.991 13.7099 95.5897 13.5025C95.1883 13.295 94.7043 13.1843 94.1439 13.1843C93.7011 13.1843 93.2997 13.2743 92.9332 13.4473C92.5663 13.6203 92.262 13.9038 92.0267 14.2843H91.9991V13.378H90.1451V22.9733H92.096V19.604H92.1235C92.3535 19.9425 92.6685 20.2145 93.0369 20.3928C93.4106 20.5726 93.8118 20.6626 94.2544 20.6626C94.7734 20.6626 95.2299 20.5589 95.6243 20.3582C96.0049 20.1633 96.3379 19.8869 96.5997 19.5487C96.8627 19.2098 97.0562 18.8222 97.181 18.3796C97.3126 17.9368 97.3747 17.4805 97.3747 17.0029C97.3747 16.498 97.3126 16.0138 97.181 15.5501V15.5571ZM87.5579 17.7915C87.5026 18.0684 87.4058 18.3036 87.2742 18.5112C87.1426 18.7187 86.9698 18.8849 86.7484 19.0161C86.534 19.1409 86.2642 19.2098 85.9461 19.2098C85.6345 19.2098 85.3719 19.1477 85.1503 19.0161C84.9364 18.8908 84.7541 18.7181 84.6175 18.5112C84.4863 18.3038 84.3894 18.0684 84.3273 17.7915C84.2662 17.5167 84.236 17.236 84.2373 16.9545C84.2373 16.664 84.2649 16.3733 84.3201 16.1038C84.3758 15.827 84.4722 15.5848 84.6038 15.3773C84.7354 15.1625 84.9082 14.9968 85.1296 14.8585C85.344 14.7269 85.6138 14.6578 85.9319 14.6578C86.2435 14.6578 86.5061 14.7269 86.7209 14.8585C86.9357 14.9914 87.1177 15.1711 87.2533 15.3841C87.3917 15.5985 87.4886 15.8475 87.551 16.1175C87.6131 16.3941 87.6407 16.6708 87.6407 16.9545C87.6407 17.2382 87.6131 17.5149 87.5579 17.7915ZM88.8098 14.3396C88.547 13.9938 88.2081 13.7099 87.8068 13.5025C87.4056 13.295 86.9214 13.1843 86.3608 13.1843C85.918 13.1843 85.517 13.2743 85.1501 13.4473C84.7836 13.6203 84.4792 13.9038 84.244 14.2843H84.216V13.378H82.362V22.9733H84.3129V19.604H84.3408C84.5708 19.9425 84.8858 20.2145 85.2542 20.3928C85.6275 20.5726 86.0287 20.6626 86.4713 20.6626C86.9971 20.6626 87.4468 20.5589 87.8416 20.3582C88.222 20.1631 88.5549 19.8868 88.8166 19.5487C89.0798 19.2098 89.2735 18.8222 89.4051 18.3796C89.5327 17.9318 89.5979 17.4685 89.5988 17.0029C89.5988 16.498 89.5363 16.0138 89.4051 15.5501C89.2735 15.0868 89.0798 14.6853 88.8098 14.3327V14.3396ZM75.9696 16.6917L77.2495 13.0873H77.2772L78.5156 16.6917H75.9696ZM76.1772 10.666L72.4622 20.4826H74.6345L75.4026 18.2966H79.076L79.8162 20.4826H82.0576L78.3842 10.666H76.1703H76.1772ZM72.3031 17.3696C72.1715 17.1482 72.0056 16.9545 71.7912 16.8024C71.5836 16.6503 71.3413 16.5324 71.0715 16.4357C70.7981 16.3459 70.5212 16.2675 70.2413 16.2007C69.9646 16.1382 69.6948 16.0759 69.4318 16.0206C69.1688 15.9654 68.9267 15.9029 68.7262 15.8338C68.5188 15.7647 68.3527 15.6749 68.2281 15.564C68.0965 15.4533 68.0344 15.315 68.0344 15.1352C68.0344 14.9899 68.069 14.8722 68.1449 14.7822C68.2211 14.6924 68.3111 14.6301 68.4148 14.5817C68.5187 14.5333 68.6362 14.5055 68.7678 14.4919C68.8872 14.4786 69.0073 14.4717 69.1274 14.4712C69.4734 14.4712 69.7778 14.5403 70.034 14.6717C70.2899 14.8031 70.4352 15.0591 70.4559 15.4326H72.3099C72.2752 14.9897 72.1578 14.6301 71.971 14.3394C71.7841 14.0487 71.5491 13.8206 71.2654 13.6476C70.9817 13.4746 70.6566 13.3503 70.2968 13.2741C69.9371 13.198 69.5634 13.1634 69.176 13.1634C68.7889 13.1634 68.4152 13.1982 68.0485 13.2671C67.6818 13.3362 67.3499 13.4539 67.0594 13.6269C66.762 13.7999 66.5266 14.0283 66.3538 14.3187C66.1737 14.6092 66.0839 14.9899 66.0839 15.4462C66.0839 15.7576 66.146 16.0204 66.2776 16.2348C66.4022 16.4496 66.575 16.6292 66.7825 16.7745C66.9971 16.9129 67.2324 17.0306 67.5022 17.1205C67.772 17.2103 68.0487 17.2866 68.3324 17.3487C69.0312 17.494 69.5708 17.6392 69.965 17.7845C70.3524 17.9298 70.5463 18.1512 70.5463 18.4417C70.5463 18.6147 70.5047 18.7599 70.4217 18.8775C70.3405 18.9923 70.2339 19.087 70.1103 19.1541C69.9857 19.2233 69.8473 19.2719 69.6952 19.3062C69.5522 19.3388 69.406 19.355 69.2594 19.3547C69.0657 19.3547 68.8789 19.3342 68.7059 19.2855C68.5261 19.2371 68.3669 19.1676 68.2287 19.071C68.0903 18.9741 67.9796 18.8496 67.8898 18.6975C67.7998 18.5454 67.7582 18.3653 67.7582 18.1578H65.9041C65.9248 18.635 66.0289 19.0294 66.2294 19.3476C66.4231 19.6661 66.679 19.915 66.9834 20.1087C67.2878 20.3024 67.6406 20.4406 68.035 20.5236C68.4294 20.6068 68.8305 20.6484 69.2456 20.6484C69.647 20.6484 70.048 20.6068 70.4356 20.5304C70.8229 20.4545 71.1689 20.316 71.4733 20.1224C71.7777 19.9287 72.0198 19.6727 72.2067 19.3613C72.3933 19.0432 72.4902 18.6559 72.4902 18.1853C72.4902 17.8534 72.4281 17.5767 72.2965 17.3551L72.3031 17.3696ZM64.2295 11.2473H62.2786V13.378H61.0954V14.6853H62.2786V18.8779C62.2786 19.2377 62.3407 19.5214 62.4584 19.7426C62.5761 19.9642 62.7421 20.13 62.9496 20.2547C63.1572 20.3723 63.3927 20.4553 63.6623 20.4968C63.9463 20.5391 64.2331 20.5599 64.5202 20.5589C64.7139 20.5589 64.9076 20.5521 65.1151 20.5453C65.2983 20.5391 65.4809 20.5205 65.6616 20.4898V18.9747C65.5661 18.9963 65.469 19.0101 65.3713 19.0161C65.2654 19.0244 65.1592 19.029 65.053 19.03C64.7209 19.03 64.5063 18.9747 64.3958 18.8638C64.2851 18.7533 64.2297 18.5317 64.2297 18.2068V14.6853H65.6616V13.378H64.2297V11.2473H64.2295ZM58.6325 17.7363C58.6325 17.8468 58.6189 17.9922 58.598 18.1791C58.5747 18.3702 58.511 18.5541 58.4111 18.7187C58.3075 18.8988 58.1552 19.0509 57.9408 19.1825C57.7334 19.3137 57.4289 19.3761 57.0485 19.3761C56.8962 19.3761 56.7439 19.3621 56.5918 19.3345C56.4466 19.3066 56.3152 19.2582 56.2045 19.1893C56.0938 19.12 56.0108 19.0302 55.9415 18.9056C55.8794 18.7881 55.8446 18.6428 55.8446 18.4628C55.8446 18.2759 55.8794 18.1307 55.9415 18.0063C56.0038 17.8884 56.0936 17.7915 56.1976 17.7087C56.3013 17.6326 56.4259 17.5705 56.5711 17.5221C56.7164 17.4737 56.8548 17.4389 57.0069 17.4112C57.1631 17.3843 57.32 17.3613 57.4773 17.3421C57.6364 17.3214 57.7819 17.3005 57.9271 17.2729C58.0724 17.2454 58.2038 17.2107 58.3284 17.1693C58.4529 17.1279 58.5566 17.0724 58.6398 16.9963V17.7228L58.6325 17.7363ZM60.5835 18.9054V15.2041C60.5835 14.7754 60.4866 14.4294 60.2931 14.1666C60.0994 13.9036 59.8501 13.7031 59.5527 13.5578C59.2484 13.4125 58.9162 13.3157 58.5496 13.2604C58.1896 13.2112 57.8269 13.1858 57.4636 13.1843C57.069 13.1843 56.6748 13.2259 56.2875 13.302C55.9003 13.3782 55.5473 13.5094 55.2359 13.6964C54.9293 13.8788 54.667 14.127 54.468 14.4229C54.2674 14.7273 54.1497 15.1077 54.1222 15.5643H56.0731C56.1076 15.1772 56.239 14.9073 56.4602 14.7412C56.6819 14.575 56.9792 14.4923 57.3668 14.4923C57.5398 14.4923 57.7055 14.5059 57.858 14.5268C57.9997 14.5454 58.1362 14.5925 58.2592 14.6652C58.377 14.7344 58.4668 14.8312 58.5361 14.9558C58.6052 15.0803 58.6398 15.2461 58.6398 15.4607C58.6466 15.6612 58.5914 15.8137 58.4598 15.9242C58.3284 16.0279 58.1554 16.111 57.9342 16.1663C57.7129 16.2215 57.4638 16.2631 57.1801 16.2909C56.8964 16.3186 56.6059 16.3531 56.3154 16.4016C56.0248 16.45 55.7341 16.5121 55.4436 16.5882C55.1531 16.6644 54.8969 16.7819 54.6755 16.9412C54.4473 17.1002 54.2674 17.3077 54.1222 17.5637C53.9769 17.8267 53.9076 18.1588 53.9076 18.56C53.9076 18.9267 53.9697 19.2449 54.0944 19.5077C54.2112 19.7639 54.3866 19.9891 54.6064 20.1651C54.8348 20.3428 55.0956 20.4743 55.3743 20.5525C55.6648 20.6355 55.9831 20.6769 56.322 20.6769C56.7648 20.6769 57.1938 20.6148 57.6157 20.4832C58.033 20.3558 58.4114 20.125 58.7157 19.8123C58.7226 19.9299 58.7435 20.0472 58.7641 20.1651C58.7848 20.2756 58.8194 20.3934 58.8542 20.5041H60.8328C60.7428 20.3588 60.6737 20.1372 60.6391 19.8467C60.6025 19.5414 60.584 19.2342 60.5836 18.9267V18.9054H60.5835ZM52.5448 13.9936C52.3511 13.7447 52.0881 13.5439 51.7562 13.4055C51.4241 13.2602 50.9953 13.1909 50.4693 13.1909C50.1026 13.1909 49.7291 13.2878 49.3418 13.4746C48.9544 13.6615 48.643 13.9659 48.394 14.3739H48.3524V10.6728H46.4016V20.4896H48.3524V16.7608C48.3524 16.0343 48.4702 15.5155 48.7123 15.1973C48.9476 14.879 49.3349 14.7269 49.8676 14.7269C50.3311 14.7269 50.6632 14.8722 50.843 15.1625C51.023 15.4531 51.1199 15.889 51.1199 16.4769V20.4896H53.0708V16.1175C53.0708 15.6747 53.0292 15.2736 52.953 14.9138C52.8769 14.5539 52.7385 14.2427 52.5448 13.9936ZM42.2297 17.4389H42.202L40.528 10.673H38.5077L36.8058 17.3559H36.7781L35.2214 10.673H33.0631L35.6642 20.4898H37.8504L39.483 13.8067H39.5107L41.1711 20.4898H43.3157L44.4917 16.1313L45.9583 10.673H43.8413L42.2297 17.4389Z"
										fill="#007780"
									/>
									<path
										d="M14.7646 26.3976C12.3777 26.3976 10.1501 25.6781 8.28922 24.4537L3.76458 25.8993L5.23127 21.5272C3.82003 19.5899 2.99004 17.2033 2.99004 14.6297C2.99004 8.14051 8.26852 2.86204 14.7577 2.86204C21.2469 2.86204 26.5254 8.14051 26.5254 14.6297C26.5254 21.1187 21.2469 26.3974 14.7577 26.3974H14.7646V26.3976ZM14.7646 0.634277C7.03671 0.634277 0.769117 6.90246 0.769117 14.6299C0.769117 17.2726 1.50246 19.7493 2.77527 21.8593L0.250153 29.3655L7.99869 26.882C10.0698 28.0272 12.398 28.6271 14.7646 28.6253C22.4922 28.6253 28.76 22.3576 28.76 14.6299C28.7598 6.90246 22.4922 0.634277 14.7646 0.634277Z"
										fill="#007780"
									/>
									<path
										d="M14.7646 2.86182C8.27536 2.86182 2.99689 8.14029 2.99689 14.6295C2.99689 17.203 3.82707 19.5897 5.23831 21.5269L3.77162 25.8991L8.29606 24.4535C10.1569 25.6849 12.3777 26.3973 14.7714 26.3973C21.2606 26.3973 26.5391 21.1187 26.5391 14.6297C26.5391 8.14049 21.2606 2.86201 14.7714 2.86201H14.7646V2.86182Z"
										fill="#005F66"
									/>
									<path
										d="M11.4783 8.83954C11.2501 8.29305 11.0771 8.27235 10.7313 8.2583C10.6 8.24984 10.4685 8.24528 10.3369 8.24463C9.88705 8.24463 9.41671 8.37603 9.13301 8.66656C8.78723 9.01937 7.92932 9.84252 7.92932 11.5306C7.92932 13.2187 9.16074 14.8514 9.3267 15.0798C9.49969 15.3079 11.7274 18.8223 15.1864 20.2546C17.8914 21.3753 18.694 21.2715 19.3096 21.1401C20.2089 20.9464 21.3367 20.2819 21.6204 19.4797C21.9041 18.677 21.9041 17.9921 21.8209 17.8468C21.7379 17.7016 21.5095 17.6188 21.1637 17.4456C20.8179 17.2726 19.1366 16.4424 18.8184 16.3317C18.507 16.2142 18.2096 16.2558 17.9745 16.5879C17.6424 17.0514 17.3173 17.5219 17.0543 17.8054C16.8468 18.0269 16.5077 18.0546 16.2242 17.9368C15.8436 17.7779 14.7784 17.404 13.4638 16.2349C12.4467 15.3287 11.755 14.2012 11.5545 13.8623C11.3537 13.5165 11.5338 13.3156 11.6927 13.1289C11.8657 12.9143 12.0316 12.7622 12.2046 12.5615C12.3776 12.361 12.4745 12.2571 12.5852 12.0219C12.7029 11.7936 12.6197 11.5583 12.5367 11.3854C12.4538 11.2124 11.762 9.52427 11.4783 8.83954Z"
										fill="white"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1_215">
										<rect
											width="97.5"
											height="30"
											fill="white"
											transform="translate(0.25)"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="w-1/3  border-x border-t  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
							<svg
								width="70"
								height="30"
								viewBox="0 0 70 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_221)">
									<path
										d="M9.85227 23.7914C8.80861 23.9747 7.74659 24.0296 6.64798 24.176L3.29707 14.3616V24.5972C2.25341 24.707 1.30128 24.8535 0.3125 25V6.25H3.09578L6.90429 16.8886V6.25H9.85227V23.7914ZM15.6201 13.1165C16.7555 13.1165 18.4949 13.0615 19.5386 13.0615V15.9911C18.2385 15.9911 16.7188 15.9911 15.6201 16.0461V20.4041C17.3414 20.2942 19.0626 20.1476 20.802 20.0927V22.9123L12.6904 23.5533V6.25H20.802V9.17969H15.6201V13.1165ZM31.6967 9.17976H28.6572V22.6563C27.6684 22.6563 26.6797 22.6563 25.7277 22.6928V9.17976H22.6881V6.25H31.6969L31.6967 9.17976ZM36.4574 12.9151H40.4675V15.8447H36.4574V22.4915H33.5825V6.25H41.7676V9.17969H36.4574V12.9151ZM46.5283 19.928C48.1946 19.9645 49.879 20.0929 51.5088 20.1843V23.0774C48.8904 22.9125 46.272 22.7479 43.5986 22.6928V6.25H46.5283V19.928ZM53.9807 23.2788C54.9145 23.3338 55.9033 23.3888 56.8554 23.4985V6.25H53.9807V23.2788ZM69.6912 6.25L65.9741 15.1673L69.6912 25C68.5925 24.8535 67.4938 24.6521 66.3952 24.469L64.2896 19.0492L62.1474 24.0296C61.0852 23.8464 60.0598 23.7914 58.998 23.6449L62.7699 15.0573L59.3641 6.25H62.5133L64.436 11.1755L66.4868 6.25H69.6912V6.25Z"
										fill="#007780"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1_221">
										<rect
											width="69.375"
											height="30"
											fill="white"
											transform="translate(0.3125)"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="w-full absolute bottom-0 h-[20px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>
					</div>
					<div className="flex justify-center w-full lg:w-1/2  items-center gap-4 relative">
						<div className="w-1/3  border-x border-t  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
							<svg
								width="102"
								height="30"
								viewBox="0 0 102 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_224)">
									<path
										d="M28.2189 8.75812H32.9828C36.0198 8.75812 38.5287 10.5154 38.5287 14.5275V15.3706C38.5287 19.4133 36.1824 21.2315 33.0742 21.2315H28.2189V8.75812ZM30.8802 11.0232V18.9562H32.9218C34.6486 18.9562 35.8065 17.8287 35.8065 15.3198V14.6596C35.8065 12.1507 34.5876 11.0232 32.8304 11.0232H30.8802ZM39.9406 11.1451H42.0737L42.419 13.4915C42.8253 11.8968 43.8614 11.0435 45.7405 11.0435H46.4008V13.7353H45.3037C43.1402 13.7353 42.612 14.4869 42.612 16.62V21.2619H39.9812V11.1451H39.9406ZM46.9289 16.4067V16.1223C46.9289 12.7398 49.0925 10.8912 52.0381 10.8912C55.0447 10.8912 57.1473 12.7398 57.1473 16.1223V16.4067C57.1473 19.7282 55.1057 21.5159 52.0381 21.5159C48.7776 21.4854 46.9289 19.7383 46.9289 16.4067ZM54.4556 16.3762V16.1223C54.4556 14.2431 53.511 13.1157 52.0077 13.1157C50.5348 13.1157 49.5597 14.1517 49.5597 16.1223V16.3762C49.5597 18.1944 50.5044 19.2304 52.0077 19.2304C53.511 19.2 54.4556 18.1944 54.4556 16.3762ZM58.5287 11.1451H60.7227L60.9767 13.0547C61.5049 11.7749 62.6323 10.8912 64.2982 10.8912C66.868 10.8912 68.5643 12.7398 68.5643 16.1629V16.4473C68.5643 19.7688 66.6852 21.526 64.2982 21.526C62.7034 21.526 61.6064 20.8048 61.0681 19.6469V24.7561H58.4983L58.5287 11.1451ZM65.8929 16.3762V16.1527C65.8929 14.1416 64.8568 13.1461 63.4754 13.1461C62.0026 13.1461 61.0275 14.2736 61.0275 16.1527V16.3457C61.0275 18.1334 61.9721 19.2609 63.4449 19.2609C64.9584 19.2304 65.8929 18.2655 65.8929 16.3762ZM72.4546 19.393L72.2311 21.2416H69.9762V7.7627H72.546V12.9328C73.1148 11.6124 74.2423 10.8912 75.837 10.8912C78.2545 10.9217 80.0422 12.5875 80.0422 15.9394V16.2543C80.0422 19.6063 78.3459 21.526 75.7761 21.526C74.0798 21.4854 72.9828 20.7033 72.4546 19.393ZM77.3403 16.2543V16.0004C77.3403 14.1517 76.3347 13.1157 74.9228 13.1157C73.4805 13.1157 72.4749 14.2736 72.4749 16.0309V16.2543C72.4749 18.1334 73.45 19.2304 74.8924 19.2304C76.4363 19.2304 77.3403 18.2655 77.3403 16.2543ZM81.1697 16.4067V16.1223C81.1697 12.7398 83.3332 10.8912 86.2789 10.8912C89.2855 10.8912 91.3881 12.7398 91.3881 16.1223V16.4067C91.3881 19.7282 89.3159 21.5159 86.2789 21.5159C83.0183 21.4854 81.1697 19.7383 81.1697 16.4067ZM88.7166 16.3762V16.1223C88.7166 14.2431 87.772 13.1157 86.2687 13.1157C84.7959 13.1157 83.8208 14.1517 83.8208 16.1223V16.3762C83.8208 18.1944 84.7654 19.2304 86.2687 19.2304C87.7822 19.2 88.7166 18.1944 88.7166 16.3762ZM94.8314 16.0004L91.2865 11.1451H94.3236L96.3652 14.1822L98.4373 11.1451H101.444L97.8482 15.9699L101.637 21.2416H98.6608L96.3449 17.8897L94.0899 21.2416H90.9818L94.8314 16.0004Z"
										fill="#007780"
									/>
									<path
										d="M11.8451 8.75825L5.95382 12.5165L11.8451 16.2748L5.95382 20.033L0.0625 16.2544L5.95382 12.4962L0.0625 8.75825L5.95382 5L11.8451 8.75825ZM5.92334 21.2417L11.8147 17.4835L17.706 21.2417L11.8147 25L5.92334 21.2417ZM11.8451 16.2544L17.7364 12.4962L11.8451 8.75825L17.706 5L23.5973 8.75825L17.706 12.5165L23.5973 16.2748L17.706 20.033L11.8451 16.2544Z"
										fill="#007780"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1_224">
										<rect
											width="101.875"
											height="30"
											fill="white"
											transform="translate(0.0625)"
										/>
									</clipPath>
								</defs>
							</svg>
						</div>
						<div className="w-1/3 lborder  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
							<svg
								width="60"
								height="30"
								viewBox="0 0 60 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 22.1227L6.15902 12.5391H0.729617C0.683606 12.263 0.663886 11.9607 0.663886 11.6254C0.663886 11.3034 0.683606 11.0076 0.729617 10.7381H9.51789L9.62964 11.0339L3.4246 20.6372H9.24182C9.28783 20.9396 9.30755 21.2551 9.30755 21.5706C9.30755 21.873 9.28783 22.1622 9.24182 22.4382H0.111743L0 22.1227Z"
									fill="#007780"
								/>
								<path
									d="M17.7738 14.7281C17.7738 13.8276 17.5437 13.2097 17.0902 12.8547C16.6366 12.5064 15.9728 12.3289 15.1051 12.3289C14.5727 12.3289 14.0731 12.3683 13.613 12.4538C13.1463 12.5392 12.6993 12.6444 12.2524 12.7824C11.9631 12.2829 11.8185 11.6782 11.8185 10.9814C12.3378 10.8171 12.9031 10.6856 13.5275 10.5936C14.152 10.5016 14.7501 10.4555 15.3286 10.4555C16.847 10.4555 18.0038 10.8039 18.7992 11.4941C19.588 12.1843 19.9889 13.2951 19.9889 14.8135V22.136C19.4565 22.2543 18.8123 22.3858 18.0499 22.5107C17.2874 22.6421 16.5117 22.7013 15.723 22.7013C14.9802 22.7013 14.3032 22.6356 13.705 22.4975C13.1069 22.3595 12.5942 22.1426 12.1735 21.8336C11.7528 21.5313 11.4307 21.1435 11.2007 20.6702C10.9706 20.1969 10.8589 19.6251 10.8589 18.9612C10.8589 18.3104 10.9903 17.732 11.2598 17.239C11.5227 16.746 11.8843 16.3319 12.3444 16.0098C12.7979 15.6812 13.3238 15.438 13.9219 15.2802C14.5135 15.1225 15.138 15.037 15.7953 15.037C16.2817 15.037 16.6826 15.0502 16.9916 15.0699C17.3005 15.0896 17.5634 15.1225 17.7804 15.1488V14.7281H17.7738ZM17.7738 16.9432C17.5437 16.9104 17.2545 16.8841 16.9061 16.8512C16.5578 16.8183 16.262 16.8052 16.0188 16.8052C15.0722 16.8052 14.3558 16.9827 13.8628 17.331C13.3698 17.6794 13.12 18.2118 13.12 18.9283C13.12 19.3819 13.2055 19.7434 13.3698 19.9997C13.5341 20.2561 13.7445 20.4533 13.9942 20.5913C14.244 20.7294 14.5201 20.8148 14.829 20.8411C15.1314 20.874 15.4206 20.8871 15.6967 20.8871C16.0451 20.8871 16.4066 20.8674 16.7812 20.8279C17.1559 20.7885 17.4846 20.7359 17.7738 20.657V16.9432Z"
									fill="#007780"
								/>
								<path
									d="M22.4538 10.7386C22.605 10.7057 22.7627 10.686 22.9205 10.6728C23.0783 10.6597 23.2426 10.6531 23.4135 10.6531C23.5647 10.6531 23.7224 10.6597 23.8933 10.6728C24.0577 10.686 24.222 10.7123 24.3732 10.7386C24.3863 10.7714 24.406 10.8635 24.4323 11.0212C24.452 11.179 24.4783 11.3499 24.4981 11.5339C24.5178 11.718 24.5441 11.8889 24.5638 12.0598C24.5835 12.2307 24.5967 12.3358 24.5967 12.3818C24.7478 12.1386 24.9319 11.902 25.1422 11.6719C25.3526 11.4419 25.6089 11.2381 25.9047 11.0541C26.2005 10.87 26.5357 10.7254 26.9104 10.6202C27.2851 10.5151 27.6992 10.4625 28.1527 10.4625C28.8363 10.4625 29.4739 10.5742 30.0589 10.8043C30.6439 11.0344 31.1435 11.3827 31.5642 11.8626C31.9848 12.3424 32.3069 12.9537 32.5436 13.6899C32.7802 14.4261 32.8985 15.3003 32.8985 16.306C32.8985 18.3174 32.3529 19.8884 31.2684 21.0189C30.1772 22.1495 28.6391 22.7214 26.6475 22.7214C26.3122 22.7214 25.9704 22.7017 25.6221 22.6557C25.2737 22.6096 24.9647 22.5505 24.7084 22.4716V27.8353C24.5243 27.8681 24.3337 27.8879 24.1234 27.901C23.9196 27.9142 23.729 27.9207 23.5647 27.9207C23.4003 27.9207 23.2097 27.9142 23.006 27.901C22.8022 27.8879 22.6116 27.8616 22.4472 27.8353V10.7386H22.4538ZM24.715 20.526C25.0042 20.6311 25.3 20.71 25.6023 20.756C25.9047 20.802 26.2991 20.8217 26.7921 20.8217C27.3376 20.8217 27.8438 20.7363 28.2973 20.5588C28.7509 20.3813 29.1453 20.1118 29.4739 19.7503C29.8026 19.3822 30.0589 18.9221 30.2495 18.37C30.4402 17.8178 30.5322 17.1539 30.5322 16.398C30.5322 15.182 30.3087 14.2158 29.8617 13.4993C29.4148 12.7828 28.6786 12.4279 27.6597 12.4279C27.2785 12.4279 26.917 12.4936 26.562 12.6316C26.2136 12.7697 25.8981 12.9734 25.6286 13.2495C25.3526 13.5256 25.1356 13.8674 24.9647 14.2881C24.7938 14.7087 24.715 15.2017 24.715 15.7802V20.526Z"
									fill="#007780"
								/>
								<path
									d="M35.7118 12.5128H34.2263C34.1934 12.3879 34.1737 12.2499 34.1605 12.0921C34.1474 11.9344 34.1408 11.7766 34.1408 11.6254C34.1408 11.4743 34.1474 11.3165 34.1605 11.1587C34.1737 11.001 34.2 10.8564 34.2263 10.7381H37.9269V22.4448C37.7626 22.4777 37.572 22.4974 37.3682 22.5105C37.1645 22.5237 36.9738 22.5303 36.8095 22.5303C36.6583 22.5303 36.4809 22.5237 36.2705 22.5105C36.0667 22.4974 35.8761 22.4711 35.7118 22.4448V12.5128Z"
									fill="#007780"
								/>
								<path
									d="M42.7845 17.1472C42.8173 18.4223 43.146 19.3623 43.777 19.9539C44.408 20.5455 45.3414 20.8413 46.5706 20.8413C47.6486 20.8413 48.6806 20.6506 49.6534 20.2694C49.7783 20.4995 49.8769 20.7755 49.9492 21.1042C50.0281 21.4328 50.0675 21.7549 50.0872 22.077C49.5877 22.2873 49.0355 22.4517 48.4308 22.5569C47.8326 22.662 47.1622 22.7146 46.4326 22.7146C45.3677 22.7146 44.4541 22.5634 43.6916 22.2676C42.9291 21.9718 42.3046 21.5512 41.8117 21.0122C41.3187 20.4732 40.9571 19.8356 40.7271 19.0928C40.497 18.3566 40.3853 17.5481 40.3853 16.6608C40.3853 15.7931 40.497 14.9846 40.7139 14.2287C40.9309 13.4728 41.2727 12.822 41.7262 12.2633C42.1798 11.7112 42.7582 11.2642 43.4484 10.9421C44.1385 10.6135 44.9602 10.4491 45.9001 10.4491C46.7086 10.4491 47.412 10.5872 48.0233 10.8632C48.6346 11.1393 49.1407 11.514 49.5548 11.9938C49.9623 12.4737 50.2778 13.0455 50.4882 13.7028C50.6985 14.3667 50.8103 15.0832 50.8103 15.8588C50.8103 16.0692 50.8037 16.2992 50.784 16.5293C50.7708 16.7659 50.7511 16.9697 50.738 17.134H42.7845V17.1472ZM48.582 15.4579C48.582 15.0306 48.5228 14.6231 48.4111 14.2353C48.2993 13.8475 48.1284 13.5122 47.9115 13.223C47.688 12.9338 47.412 12.7037 47.0702 12.5263C46.7284 12.3488 46.3208 12.2633 45.8476 12.2633C44.9207 12.2633 44.2108 12.546 43.7113 13.1047C43.2183 13.67 42.9159 14.4522 42.8108 15.4579H48.582Z"
									fill="#007780"
								/>
								<path
									d="M53.3081 10.7381C53.4724 10.7052 53.6368 10.6855 53.7879 10.6723C53.9391 10.6592 54.0969 10.6526 54.2678 10.6526C54.4321 10.6526 54.603 10.6592 54.7673 10.6723C54.9317 10.6855 55.0894 10.7118 55.2209 10.7381C55.2669 10.9681 55.3129 11.2639 55.3589 11.6386C55.4049 12.0133 55.4247 12.3288 55.4247 12.5851C55.7467 12.0658 56.1674 11.6189 56.6933 11.2376C57.2191 10.8564 57.8896 10.6658 58.7112 10.6658C58.8361 10.6658 58.961 10.6723 59.0859 10.6789C59.2174 10.6855 59.3225 10.6986 59.4145 10.7118C59.4474 10.8498 59.4671 10.9944 59.4803 11.1456C59.4934 11.2968 59.5 11.4545 59.5 11.6254C59.5 11.8095 59.4868 12.0001 59.4671 12.1973C59.4474 12.3945 59.4145 12.5851 59.3883 12.7692C59.2634 12.7363 59.1385 12.7232 59.0136 12.7232C58.8821 12.7232 58.7835 12.7232 58.7046 12.7232C58.2971 12.7232 57.9027 12.7823 57.5281 12.8941C57.1534 13.0058 56.8182 13.2096 56.5224 13.4988C56.2266 13.788 55.9899 14.1824 55.8125 14.6885C55.635 15.1881 55.5495 15.8388 55.5495 16.6276V22.4448C55.3852 22.4777 55.1946 22.4974 54.9908 22.5105C54.7871 22.5237 54.5964 22.5303 54.4321 22.5303C54.2678 22.5303 54.0772 22.5237 53.8734 22.5105C53.6696 22.4974 53.4724 22.4711 53.2884 22.4448V10.7381H53.3081Z"
									fill="#007780"
								/>
								<path
									d="M40.0763 3.84968H37.8677L39.4321 2.28528C39.3072 2.11438 39.1692 1.95005 39.0246 1.79887C38.8734 1.64768 38.7156 1.50965 38.5382 1.39133L36.9738 2.95574V0.747165C36.77 0.714299 36.5596 0.69458 36.3427 0.69458H36.3362C36.1192 0.69458 35.9089 0.714299 35.7051 0.747165V2.95574L34.1407 1.39133C33.9698 1.51622 33.8055 1.65426 33.6543 1.79887C33.5031 1.95005 33.3717 2.1078 33.2468 2.28528L34.8178 3.84968H32.6092C32.6092 3.84968 32.5566 4.26379 32.5566 4.4807C32.5566 4.69762 32.5763 4.90796 32.6092 5.11172H34.8178L33.2534 6.67613C33.4966 7.01793 33.7989 7.3203 34.1473 7.57008L35.7117 6.00567V8.21424C35.9155 8.24711 36.1258 8.26683 36.3427 8.26683H36.3493C36.5662 8.26683 36.7766 8.24711 36.9803 8.21424V6.00567L38.5447 7.57008C38.7156 7.44519 38.88 7.30715 39.0311 7.16254C39.1823 7.01136 39.3204 6.8536 39.4387 6.67613L37.8743 5.11172H40.0828C40.1157 4.90796 40.1354 4.69762 40.1354 4.4807V4.47413C40.1289 4.26379 40.1157 4.05345 40.0763 3.84968ZM37.2893 4.48728C37.2893 4.76992 37.2367 5.03942 37.1446 5.2892C36.8949 5.38122 36.6254 5.43381 36.3427 5.43381C36.0601 5.43381 35.7906 5.38122 35.5408 5.2892C35.4488 5.03942 35.3962 4.76992 35.3962 4.48728V4.4807C35.3962 4.19806 35.4488 3.92856 35.5408 3.67878C35.7906 3.58676 36.0601 3.53417 36.3427 3.53417C36.6254 3.53417 36.8949 3.58676 37.1446 3.67878C37.2367 3.92856 37.2893 4.19806 37.2893 4.48728Z"
									fill="#007780"
								/>
							</svg>
						</div>
						<div className="w-1/3  border  border-[#00393D] rounded-2xl bg-gradient-to-b from-[#00171A] to-[#000000ad] flex justify-center items-center h-[70px]">
							<svg
								width="60"
								height="30"
								viewBox="0 0 60 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 22.1227L6.15902 12.5391H0.729617C0.683606 12.263 0.663886 11.9607 0.663886 11.6254C0.663886 11.3034 0.683606 11.0076 0.729617 10.7381H9.51789L9.62964 11.0339L3.4246 20.6372H9.24182C9.28783 20.9396 9.30755 21.2551 9.30755 21.5706C9.30755 21.873 9.28783 22.1622 9.24182 22.4382H0.111743L0 22.1227Z"
									fill="#007780"
								/>
								<path
									d="M17.7738 14.7281C17.7738 13.8276 17.5437 13.2097 17.0902 12.8547C16.6366 12.5064 15.9728 12.3289 15.1051 12.3289C14.5727 12.3289 14.0731 12.3683 13.613 12.4538C13.1463 12.5392 12.6993 12.6444 12.2524 12.7824C11.9631 12.2829 11.8185 11.6782 11.8185 10.9814C12.3378 10.8171 12.9031 10.6856 13.5275 10.5936C14.152 10.5016 14.7501 10.4555 15.3286 10.4555C16.847 10.4555 18.0038 10.8039 18.7992 11.4941C19.588 12.1843 19.9889 13.2951 19.9889 14.8135V22.136C19.4565 22.2543 18.8123 22.3858 18.0499 22.5107C17.2874 22.6421 16.5117 22.7013 15.723 22.7013C14.9802 22.7013 14.3032 22.6356 13.705 22.4975C13.1069 22.3595 12.5942 22.1426 12.1735 21.8336C11.7528 21.5313 11.4307 21.1435 11.2007 20.6702C10.9706 20.1969 10.8589 19.6251 10.8589 18.9612C10.8589 18.3104 10.9903 17.732 11.2598 17.239C11.5227 16.746 11.8843 16.3319 12.3444 16.0098C12.7979 15.6812 13.3238 15.438 13.9219 15.2802C14.5135 15.1225 15.138 15.037 15.7953 15.037C16.2817 15.037 16.6826 15.0502 16.9916 15.0699C17.3005 15.0896 17.5634 15.1225 17.7804 15.1488V14.7281H17.7738ZM17.7738 16.9432C17.5437 16.9104 17.2545 16.8841 16.9061 16.8512C16.5578 16.8183 16.262 16.8052 16.0188 16.8052C15.0722 16.8052 14.3558 16.9827 13.8628 17.331C13.3698 17.6794 13.12 18.2118 13.12 18.9283C13.12 19.3819 13.2055 19.7434 13.3698 19.9997C13.5341 20.2561 13.7445 20.4533 13.9942 20.5913C14.244 20.7294 14.5201 20.8148 14.829 20.8411C15.1314 20.874 15.4206 20.8871 15.6967 20.8871C16.0451 20.8871 16.4066 20.8674 16.7812 20.8279C17.1559 20.7885 17.4846 20.7359 17.7738 20.657V16.9432Z"
									fill="#007780"
								/>
								<path
									d="M22.4538 10.7386C22.605 10.7057 22.7627 10.686 22.9205 10.6728C23.0783 10.6597 23.2426 10.6531 23.4135 10.6531C23.5647 10.6531 23.7224 10.6597 23.8933 10.6728C24.0577 10.686 24.222 10.7123 24.3732 10.7386C24.3863 10.7714 24.406 10.8635 24.4323 11.0212C24.452 11.179 24.4783 11.3499 24.4981 11.5339C24.5178 11.718 24.5441 11.8889 24.5638 12.0598C24.5835 12.2307 24.5967 12.3358 24.5967 12.3818C24.7478 12.1386 24.9319 11.902 25.1422 11.6719C25.3526 11.4419 25.6089 11.2381 25.9047 11.0541C26.2005 10.87 26.5357 10.7254 26.9104 10.6202C27.2851 10.5151 27.6992 10.4625 28.1527 10.4625C28.8363 10.4625 29.4739 10.5742 30.0589 10.8043C30.6439 11.0344 31.1435 11.3827 31.5642 11.8626C31.9848 12.3424 32.3069 12.9537 32.5436 13.6899C32.7802 14.4261 32.8985 15.3003 32.8985 16.306C32.8985 18.3174 32.3529 19.8884 31.2684 21.0189C30.1772 22.1495 28.6391 22.7214 26.6475 22.7214C26.3122 22.7214 25.9704 22.7017 25.6221 22.6557C25.2737 22.6096 24.9647 22.5505 24.7084 22.4716V27.8353C24.5243 27.8681 24.3337 27.8879 24.1234 27.901C23.9196 27.9142 23.729 27.9207 23.5647 27.9207C23.4003 27.9207 23.2097 27.9142 23.006 27.901C22.8022 27.8879 22.6116 27.8616 22.4472 27.8353V10.7386H22.4538ZM24.715 20.526C25.0042 20.6311 25.3 20.71 25.6023 20.756C25.9047 20.802 26.2991 20.8217 26.7921 20.8217C27.3376 20.8217 27.8438 20.7363 28.2973 20.5588C28.7509 20.3813 29.1453 20.1118 29.4739 19.7503C29.8026 19.3822 30.0589 18.9221 30.2495 18.37C30.4402 17.8178 30.5322 17.1539 30.5322 16.398C30.5322 15.182 30.3087 14.2158 29.8617 13.4993C29.4148 12.7828 28.6786 12.4279 27.6597 12.4279C27.2785 12.4279 26.917 12.4936 26.562 12.6316C26.2136 12.7697 25.8981 12.9734 25.6286 13.2495C25.3526 13.5256 25.1356 13.8674 24.9647 14.2881C24.7938 14.7087 24.715 15.2017 24.715 15.7802V20.526Z"
									fill="#007780"
								/>
								<path
									d="M35.7118 12.5128H34.2263C34.1934 12.3879 34.1737 12.2499 34.1605 12.0921C34.1474 11.9344 34.1408 11.7766 34.1408 11.6254C34.1408 11.4743 34.1474 11.3165 34.1605 11.1587C34.1737 11.001 34.2 10.8564 34.2263 10.7381H37.9269V22.4448C37.7626 22.4777 37.572 22.4974 37.3682 22.5105C37.1645 22.5237 36.9738 22.5303 36.8095 22.5303C36.6583 22.5303 36.4809 22.5237 36.2705 22.5105C36.0667 22.4974 35.8761 22.4711 35.7118 22.4448V12.5128Z"
									fill="#007780"
								/>
								<path
									d="M42.7845 17.1472C42.8173 18.4223 43.146 19.3623 43.777 19.9539C44.408 20.5455 45.3414 20.8413 46.5706 20.8413C47.6486 20.8413 48.6806 20.6506 49.6534 20.2694C49.7783 20.4995 49.8769 20.7755 49.9492 21.1042C50.0281 21.4328 50.0675 21.7549 50.0872 22.077C49.5877 22.2873 49.0355 22.4517 48.4308 22.5569C47.8326 22.662 47.1622 22.7146 46.4326 22.7146C45.3677 22.7146 44.4541 22.5634 43.6916 22.2676C42.9291 21.9718 42.3046 21.5512 41.8117 21.0122C41.3187 20.4732 40.9571 19.8356 40.7271 19.0928C40.497 18.3566 40.3853 17.5481 40.3853 16.6608C40.3853 15.7931 40.497 14.9846 40.7139 14.2287C40.9309 13.4728 41.2727 12.822 41.7262 12.2633C42.1798 11.7112 42.7582 11.2642 43.4484 10.9421C44.1385 10.6135 44.9602 10.4491 45.9001 10.4491C46.7086 10.4491 47.412 10.5872 48.0233 10.8632C48.6346 11.1393 49.1407 11.514 49.5548 11.9938C49.9623 12.4737 50.2778 13.0455 50.4882 13.7028C50.6985 14.3667 50.8103 15.0832 50.8103 15.8588C50.8103 16.0692 50.8037 16.2992 50.784 16.5293C50.7708 16.7659 50.7511 16.9697 50.738 17.134H42.7845V17.1472ZM48.582 15.4579C48.582 15.0306 48.5228 14.6231 48.4111 14.2353C48.2993 13.8475 48.1284 13.5122 47.9115 13.223C47.688 12.9338 47.412 12.7037 47.0702 12.5263C46.7284 12.3488 46.3208 12.2633 45.8476 12.2633C44.9207 12.2633 44.2108 12.546 43.7113 13.1047C43.2183 13.67 42.9159 14.4522 42.8108 15.4579H48.582Z"
									fill="#007780"
								/>
								<path
									d="M53.3081 10.7381C53.4724 10.7052 53.6368 10.6855 53.7879 10.6723C53.9391 10.6592 54.0969 10.6526 54.2678 10.6526C54.4321 10.6526 54.603 10.6592 54.7673 10.6723C54.9317 10.6855 55.0894 10.7118 55.2209 10.7381C55.2669 10.9681 55.3129 11.2639 55.3589 11.6386C55.4049 12.0133 55.4247 12.3288 55.4247 12.5851C55.7467 12.0658 56.1674 11.6189 56.6933 11.2376C57.2191 10.8564 57.8896 10.6658 58.7112 10.6658C58.8361 10.6658 58.961 10.6723 59.0859 10.6789C59.2174 10.6855 59.3225 10.6986 59.4145 10.7118C59.4474 10.8498 59.4671 10.9944 59.4803 11.1456C59.4934 11.2968 59.5 11.4545 59.5 11.6254C59.5 11.8095 59.4868 12.0001 59.4671 12.1973C59.4474 12.3945 59.4145 12.5851 59.3883 12.7692C59.2634 12.7363 59.1385 12.7232 59.0136 12.7232C58.8821 12.7232 58.7835 12.7232 58.7046 12.7232C58.2971 12.7232 57.9027 12.7823 57.5281 12.8941C57.1534 13.0058 56.8182 13.2096 56.5224 13.4988C56.2266 13.788 55.9899 14.1824 55.8125 14.6885C55.635 15.1881 55.5495 15.8388 55.5495 16.6276V22.4448C55.3852 22.4777 55.1946 22.4974 54.9908 22.5105C54.7871 22.5237 54.5964 22.5303 54.4321 22.5303C54.2678 22.5303 54.0772 22.5237 53.8734 22.5105C53.6696 22.4974 53.4724 22.4711 53.2884 22.4448V10.7381H53.3081Z"
									fill="#007780"
								/>
								<path
									d="M40.0763 3.84968H37.8677L39.4321 2.28528C39.3072 2.11438 39.1692 1.95005 39.0246 1.79887C38.8734 1.64768 38.7156 1.50965 38.5382 1.39133L36.9738 2.95574V0.747165C36.77 0.714299 36.5596 0.69458 36.3427 0.69458H36.3362C36.1192 0.69458 35.9089 0.714299 35.7051 0.747165V2.95574L34.1407 1.39133C33.9698 1.51622 33.8055 1.65426 33.6543 1.79887C33.5031 1.95005 33.3717 2.1078 33.2468 2.28528L34.8178 3.84968H32.6092C32.6092 3.84968 32.5566 4.26379 32.5566 4.4807C32.5566 4.69762 32.5763 4.90796 32.6092 5.11172H34.8178L33.2534 6.67613C33.4966 7.01793 33.7989 7.3203 34.1473 7.57008L35.7117 6.00567V8.21424C35.9155 8.24711 36.1258 8.26683 36.3427 8.26683H36.3493C36.5662 8.26683 36.7766 8.24711 36.9803 8.21424V6.00567L38.5447 7.57008C38.7156 7.44519 38.88 7.30715 39.0311 7.16254C39.1823 7.01136 39.3204 6.8536 39.4387 6.67613L37.8743 5.11172H40.0828C40.1157 4.90796 40.1354 4.69762 40.1354 4.4807V4.47413C40.1289 4.26379 40.1157 4.05345 40.0763 3.84968ZM37.2893 4.48728C37.2893 4.76992 37.2367 5.03942 37.1446 5.2892C36.8949 5.38122 36.6254 5.43381 36.3427 5.43381C36.0601 5.43381 35.7906 5.38122 35.5408 5.2892C35.4488 5.03942 35.3962 4.76992 35.3962 4.48728V4.4807C35.3962 4.19806 35.4488 3.92856 35.5408 3.67878C35.7906 3.58676 36.0601 3.53417 36.3427 3.53417C36.6254 3.53417 36.8949 3.58676 37.1446 3.67878C37.2367 3.92856 37.2893 4.19806 37.2893 4.48728Z"
									fill="#007780"
								/>
							</svg>
						</div>
						<div className="w-full absolute bottom-0 h-[20px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>
					</div>
				</div>
			</div>
			<div className="w-full px-8 mt-20 relative">
				<div className="relative rounded-3xl max-w-full overflow-hidden border-[#002629] border border-b-[#000e0f] flex justify-center">
					<div className="w-full bg-[#011212] h-[16px] overflow-hidden absolute top-0">
						<svg
							width="2000"
							height="42"
							viewBox="0 0 2000 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 -5L23.5789 41M23.5789 -5L47.1579 41M47.1579 -5L70.7368 41M70.7368 -5L94.3158 41M94.3158 -5L117.895 41M117.895 -5L141.474 41M141.474 -5L165.053 41M165.053 -5L188.632 41M188.632 -5L212.211 41M212.211 -5L235.789 41M235.789 -5L259.368 41M259.368 -5L282.947 41M282.947 -5L306.526 41M306.526 -5L330.105 41M330.105 -5L353.684 41M353.684 -5L377.263 41M377.263 -5L400.842 41M400.842 -5L424.421 41M424.421 -5L448 41M448 -5L471.579 41M471.579 -5L495.158 41M495.158 -5L518.737 41M518.737 -5L542.316 41M542.316 -5L565.895 41M565.895 -5L589.474 41M589.474 -5L613.053 41M613.053 -5L636.632 41M636.632 -5L660.211 41M660.211 -5L683.789 41M683.789 -5L707.368 41M707.368 -5L730.947 41M730.947 -5L754.526 41M754.526 -5L778.105 41M778.105 -5L801.684 41M801.684 -5L825.263 41M825.263 -5L848.842 41M848.842 -5L872.421 41M872.421 -5L896 41M896 -5L919.579 41M919.579 -5L943.158 41M943.158 -5L966.737 41M966.737 -5L990.316 41M990.316 -5L1013.89 41M1013.89 -5L1037.47 41M1037.47 -5L1061.05 41M1061.05 -5L1084.63 41M1084.63 -5L1108.21 41M1108.21 -5L1131.79 41M1131.79 -5L1155.37 41M1155.37 -5L1178.95 41M1178.95 -5L1202.53 41M1202.53 -5L1226.11 41M1226.11 -5L1249.68 41M1249.68 -5L1273.26 41M1273.26 -5L1296.84 41M1296.84 -5L1320.42 41M1320.42 -5L1344 41M1344 -5L1367.58 41M1367.58 -5L1391.16 41M1391.16 -5L1414.74 41M1414.74 -5L1438.32 41M1438.32 -5L1461.89 41M1461.89 -5L1485.47 41M1485.47 -5L1509.05 41M1509.05 -5L1532.63 41M1532.63 -5L1556.21 41M1556.21 -5L1579.79 41M1579.79 -5L1603.37 41M1603.37 -5L1626.95 41M1626.95 -5L1650.53 41M1650.53 -5L1674.11 41M1674.11 -5L1697.68 41M1697.68 -5L1721.26 41M1721.26 -5L1744.84 41M1744.84 -5L1768.42 41M1768.42 -5L1792 41M1792 -5L1815.58 41M1815.58 -5L1839.16 41M1839.16 -5L1862.74 41M1862.74 -5L1886.32 41M1886.32 -5L1909.89 41M1909.89 -5L1933.47 41M1933.47 -5L1957.05 41M1957.05 -5L1980.63 41M1980.63 -5L2004.21 41"
								stroke="url(#paint0_linear_1_289)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_1_289"
									x1="0"
									y1="18"
									x2="2000"
									y2="18"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#002629" stop-opacity="0" />
									<stop offset="0.0452344" stop-color="#002629" />
									<stop offset="0.950558" stop-color="#002629" />
									<stop offset="1" stop-color="#002629" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="w-[16px] bg-[#011212] h-full absolute right-0 overflow-hidden">
						<svg
							width="33"
							height="722"
							viewBox="0 0 33 722"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M33 0L1 15.7895M33 15.7895L1 31.5789M33 31.5789L1 47.3684M33 47.3684L1 63.1579M33 63.1579L1 78.9474M33 78.9474L1 94.7368M33 94.7368L1 110.526M33 110.526L1 126.316M33 126.316L1 142.105M33 142.105L1 157.895M33 157.895L1 173.684M33 173.684L1 189.474M33 189.474L1 205.263M33 205.263L1 221.053M33 221.053L1 236.842M33 236.842L1 252.632M33 252.632L1 268.421M33 268.421L1 284.211M33 284.211L1 300M33 300L1 315.789M33 315.789L1 331.579M33 331.579L1 347.368M33 347.368L1 363.158M33 363.158L1 378.947M33 378.947L1 394.737M33 394.737L1 410.526M33 410.526L1 426.316M33 426.316L1 442.105M33 442.105L1 457.895M33 457.895L1 473.684M33 473.684L1 489.474M33 489.474L1 505.263M33 505.263L1 521.053M33 521.053L1 536.842M33 536.842L1 552.632M33 552.632L1 568.421M33 568.421L1 584.211M33 584.211L1 600M33 600L1 615.789M33 615.789L1 631.579M33 631.579L1 647.368M33 647.368L1 663.158M33 663.158L1 678.947M33 678.947L1 694.737M33 694.737L1 710.526M33 710.526L1 726.316M33 726.316L1 742.105M33 742.105L1 757.895M33 757.895L1 773.684M33 773.684L1 789.474M33 789.474L1 805.263M33 805.263L1 821.053M33 821.053L1 836.842M33 836.842L1 852.632M33 852.632L1 868.421M33 868.421L1 884.211M33 884.211L1 900"
								stroke="url(#paint0_linear_1_287)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_1_287"
									x1="17"
									y1="0"
									x2="17"
									y2="900"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#002629" />
									<stop
										offset="0.742191"
										stop-color="#002629"
										stop-opacity="0"
									/>
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="w-[16px] bg-[#011212] h-full absolute left-0 overflow-hidden">
						<svg
							width="33"
							height="722"
							viewBox="0 0 33 722"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-2.38419e-07 0L32 15.7895M-2.38419e-07 15.7895L32 31.5789M-2.38419e-07 31.5789L32 47.3684M-2.38419e-07 47.3684L32 63.1579M-2.38419e-07 63.1579L32 78.9474M-2.38419e-07 78.9474L32 94.7368M-2.38419e-07 94.7368L32 110.526M-2.38419e-07 110.526L32 126.316M-2.38419e-07 126.316L32 142.105M-2.38419e-07 142.105L32 157.895M-2.38419e-07 157.895L32 173.684M-2.38419e-07 173.684L32 189.474M-2.38419e-07 189.474L32 205.263M-2.38419e-07 205.263L32 221.053M-2.38419e-07 221.053L32 236.842M-2.38419e-07 236.842L32 252.632M-2.38419e-07 252.632L32 268.421M-2.38419e-07 268.421L32 284.211M-2.38419e-07 284.211L32 300M-2.38419e-07 300L32 315.789M-2.38419e-07 315.789L32 331.579M-2.38419e-07 331.579L32 347.368M-2.38419e-07 347.368L32 363.158M-2.38419e-07 363.158L32 378.947M-2.38419e-07 378.947L32 394.737M-2.38419e-07 394.737L32 410.526M-2.38419e-07 410.526L32 426.316M-2.38419e-07 426.316L32 442.105M-2.38419e-07 442.105L32 457.895M-2.38419e-07 457.895L32 473.684M-2.38419e-07 473.684L32 489.474M-2.38419e-07 489.474L32 505.263M-2.38419e-07 505.263L32 521.053M-2.38419e-07 521.053L32 536.842M-2.38419e-07 536.842L32 552.632M-2.38419e-07 552.632L32 568.421M-2.38419e-07 568.421L32 584.211M-2.38419e-07 584.211L32 600M-2.38419e-07 600L32 615.789M-2.38419e-07 615.789L32 631.579M-2.38419e-07 631.579L32 647.368M-2.38419e-07 647.368L32 663.158M-2.38419e-07 663.158L32 678.947M-2.38419e-07 678.947L32 694.737M-2.38419e-07 694.737L32 710.526M-2.38419e-07 710.526L32 726.316M-2.38419e-07 726.316L32 742.105M-2.38419e-07 742.105L32 757.895M-2.38419e-07 757.895L32 773.684M-2.38419e-07 773.684L32 789.474M-2.38419e-07 789.474L32 805.263M-2.38419e-07 805.263L32 821.053M-2.38419e-07 821.053L32 836.842M-2.38419e-07 836.842L32 852.632M-2.38419e-07 852.632L32 868.421M-2.38419e-07 868.421L32 884.211M-2.38419e-07 884.211L32 900"
								stroke="url(#paint0_linear_1_288)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_1_288"
									x1="16"
									y1="0"
									x2="16"
									y2="900"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#002629" />
									<stop
										offset="0.742191"
										stop-color="#002629"
										stop-opacity="0"
									/>
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="flex flex-col w-full p-10 gap-10 items-center servicesBg border-[#002629]   m-[16px] rounded-3xl border bg-[#000e0f]">
						<div className="h-[200px] mx-auto max-w-full flex flex-col items-center justify-center gap-5">
							<h1 className="text-[38px] text-center text-[#E5FFFD]">
								Our Comprehensive Services Suite
							</h1>
							<p className="text-center text-[16px] text-[#507C7C] ">
								Novus offers a diverse array of expertly crafted services,
								seamlessly merging creativity and technology to deliver
								solutions that exceed expectations and drive digital success.
							</p>
						</div>
						<div className=" min-h-[450px] flex flex-col items-center max-w-[1750px] gap-8 px-4">
							<div className="w-full flex lg:flex-row flex-col gap-8">
								<div className="flex flex-col gap-4 2xl:w-1/2 h-[450px] p-5 border border-[#00393D] rounded-3xl bg-[#000e0f] hover:bg-gradient-to-b from-[#001b1d] to-transparent transition-all duration-500">
									<div className="w-full flex flex-col gap-1 h-[40%]">
										<div className="w-full h-[60%] flex justify-between items-center">
											<div className="w-[40%] h-full flex gap-2 items-center">
												<Image width={50} height={50} src={Design} alt="" />
												<span className="text-[18px] text-[#CCFFFA]">
													Design
												</span>
											</div>
											<div className="w-[30%] h-full flex items-center justify-center text-[#649B9B]">
												<span className="text-[14ox]">View Projects</span>
											</div>
										</div>
										<div className="w-full flex items-center h-[40%] gap-3">
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													UI Design
												</span>
											</div>
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													UX Design
												</span>
											</div>
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Branding
												</span>
											</div>
										</div>
									</div>
									<div className="w-full h-[60%] flex flex-col gap-4 ">
										<div className="w-full h-[65%] flex justify-center items-center z-20">
											<p className="text-[16px] text-[#649B9B] text-center">
												At Novus, were dedicated to crafting captivating designs
												that resonate with users. Every detail, from color to
												navigation, is meticulously considered for a seamless
												experience. Committed to innovation
											</p>
										</div>
										<button className="w-[90%] mx-auto h-[23%] bg-[#00171A] z-20 flex justify-center items-center border border-[#00393D] rounded-full text-[14px] text-[#E5FFFD]">
											Learn More
										</button>
									</div>
								</div>
								<div className="flex flex-col gap-4 2xl:w-1/2 h-[450px] p-5 border border-[#00393D] rounded-3xl bg-[#000e0f] hover:bg-gradient-to-b from-[#001b1d] to-transparent transition-all duration-500">
									<div className="w-full flex flex-col gap-1 h-[40%]">
										<div className="w-full h-[60%] flex justify-between items-center">
											<div className="w-[40%] h-full flex gap-2 items-center">
												<Image width={50} height={50} src={Dev} alt="" />
												<span className="text-[18px] text-[#CCFFFA]">
													Development
												</span>
											</div>
											<div className="w-[30%] h-full flex items-center justify-center text-[#649B9B]">
												<span className="text-[14ox]">View Projects</span>
											</div>
										</div>
										<div className="w-full flex items-center h-[40%] gap-3">
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Frontend
												</span>
											</div>
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Backend
												</span>
											</div>
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Full Stack
												</span>
											</div>
										</div>
									</div>
									<div className="w-full h-[60%] flex flex-col gap-4">
										<div className="w-full h-[65%] flex justify-center items-center z-20">
											<p className="text-[16px] text-[#649B9B] text-center">
												At Novus, were dedicated to crafting captivating designs
												that resonate with users. Every detail, from color to
												navigation, is meticulously considered for a seamless
												experience. Committed to innovation
											</p>
										</div>
										<button className="w-[90%] mx-auto h-[23%] bg-[#00171A] z-20 flex justify-center items-center border border-[#00393D] rounded-full text-[14px] text-[#E5FFFD]">
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div className="w-full flex lg:flex-row flex-col gap-8">
								<div className="flex flex-col gap-4 2xl:w-1/2 h-[450px] p-5 border border-[#00393D] rounded-3xl bg-[#000e0f] hover:bg-gradient-to-b from-[#001b1d] to-transparent transition-all duration-500">
									<div className="w-full flex flex-col gap-1 h-[40%]">
										<div className="w-full h-[60%] flex justify-between items-center">
											<div className="w-[40%] h-full flex gap-2 items-center">
												<Image width={50} height={50} src={Dev} alt="" />
												<span className="text-[18px] text-[#CCFFFA]">
													Development
												</span>
											</div>
											<div className="w-[30%] h-full flex items-center justify-center text-[#649B9B]">
												<span className="text-[14ox]">View Projects</span>
											</div>
										</div>
										<div className="w-full flex items-center h-[40%] gap-3">
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Frontend
												</span>
											</div>
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Backend
												</span>
											</div>
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Full Stack
												</span>
											</div>
										</div>
									</div>
									<div className="w-full h-[60%] flex flex-col gap-4">
										<div className="w-full h-[65%] flex justify-center items-center z-20">
											<p className="text-[16px] text-[#649B9B] text-center">
												At Novus, were dedicated to crafting captivating designs
												that resonate with users. Every detail, from color to
												navigation, is meticulously considered for a seamless
												experience. Committed to innovation
											</p>
										</div>
										<button className="w-[90%] mx-auto h-[23%] bg-[#00171A] z-20 flex justify-center items-center border border-[#00393D] rounded-full text-[14px] text-[#E5FFFD]">
											Learn More
										</button>
									</div>
								</div>
								<div className="flex flex-col gap-4 2xl:w-1/2 h-[450px] p-5 border border-[#00393D] rounded-3xl bg-[#000e0f] hover:bg-gradient-to-b from-[#001b1d] to-transparent transition-all duration-500">
									<div className="w-full flex flex-col gap-1 h-[40%]">
										<div className="w-full h-[60%] flex justify-between items-center">
											<div className="w-[40%] h-full flex gap-2 items-center">
												<Image width={50} height={50} src={Dev} alt="" />
												<span className="text-[18px] text-[#CCFFFA]">
													Development
												</span>
											</div>
											<div className="w-[30%] h-full flex items-center justify-center text-[#649B9B]">
												<span className="text-[14ox]">View Projects</span>
											</div>
										</div>
										<div className="w-full flex items-center h-[40%] gap-3">
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Frontend
												</span>
											</div>
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Backend
												</span>
											</div>
											<div className="w-[120px] border h-[40px] flex items-center justify-center rounded-full border-[#00393D]">
												<span className="text-[14px] text-[#649B9B]">
													Full Stack
												</span>
											</div>
										</div>
									</div>
									<div className="w-full h-[60%] flex flex-col gap-4">
										<div className="w-full h-[65%] flex justify-center items-center z-20">
											<p className="text-[16px] text-[#649B9B] text-center">
												At Novus, were dedicated to crafting captivating designs
												that resonate with users. Every detail, from color to
												navigation, is meticulously considered for a seamless
												experience. Committed to innovation
											</p>
										</div>
										<button className="w-[90%] mx-auto h-[23%] bg-[#00171A] z-20 flex justify-center items-center border border-[#00393D] rounded-full text-[14px] text-[#E5FFFD]">
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 w-full h-[350px]  bg-gradient-to-t from-[#000e0f] to-transparent"></div>
			</div>
			<div className="w-full px-8 mt-20">
				<div className="w-full min-h-[550px] relative rounded-3xl overflow-hidden flex gap-6">
					<div className="w-[40%] min-h-[550px] flex flex-col justify-center gap-5 p-10">
						<div className=" flex flex-col gap-8">
							<h1 className="text-[38px] text-[#E5FFFD]">
								Unlocking Your Digital Potential
							</h1>
							<p className="text-[#507C7C] text-[16px]">
								Discover the Novus advantage – where passion meets proficiency.
								Choose us for a transformative partnership, delivering
								cutting-edge solutions, unmatched expertise, and a commitment to
								driving your digital success story.
							</p>
						</div>
						<div className="buttons flex gap-4">
							<button className="flex items-center justify-center transition-all duration-300  h-[50px] w-[150px]  border border-[#00393D] hover:bg-[#66FFF0] rounded-full hover:text-black text-[14px]">
								View Projects
							</button>
							<button
								className="flex items-center justify-center transition-all duration-300  h-[50px] w-[150px]  border border-[#00393D] 
							bg-[#66FFF0] rounded-full text-black text-[14px] hover:bg-[#000e0f] hover:text-white"
							>
								Contact Us
							</button>
						</div>
					</div>
					<div className="w-[60%] min-h-[550px] flex flex-col justify-center items-center relative showCaseBg">
						<Image
							className="absolute"
							width={600}
							height={203}
							src={showCase}
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="mt-20 px-8 w-full relative">
				<div className="w-full flex flex-col gap-10 bg showCaseBg3">
					<div className="w-[80%] mx-auto flex flex-col gap-4">
						<h3 className="text-center text-[38px] text-[#E5FFFD]">
							Showcasing Digital Brilliance
						</h3>
						<p className="text-[16px] text-[#507C7C] text-center">
							Explore a gallery of our proudest achievements and witness the
							seamless fusion of creativity and technology in each project
							within our diverse portfolio.
						</p>
					</div>
					<div className="w-full flex justify-between">
						<div className="maxw-[500px] h-[50px] px-2 flex justify-center items-center bg-[#001719] border border-[#00393d] rounded-full">
							<ul className="flex justify-evenly max-w-[490px]  items-center transition-all">
								<div className="w-[100px] flex justify-center items-center">
									<Link
										href={"/"}
										className="hover:text-white text-[#649B9B] w-[70px] transition-all duration-200 h-[40px]  px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
									>
										<div className="text-[14px] ">Design</div>
									</Link>
								</div>
								<div className="w-[120px] flex justify-center items-center">
									<Link
										href={"/"}
										className="hover:text-white text-[#649B9B] min-w-[72px] transition-all duration-200 h-[40px]  px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
									>
										<div className="text-[14px]  ">Development</div>
									</Link>
								</div>
								<div className="w-[100px] flex justify-center items-center">
									<Link
										href={"/"}
										className="hover:text-white text-[#649B9B] min-w-[79px] transition-all duration-200 h-[40px]  px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
									>
										<div className="text-[14px] ">Marketing</div>
									</Link>
								</div>
								<div className="w-[120px] flex justify-center items-center">
									<Link
										href={"/"}
										className="hover:text-white text-[#649B9B] min-w-[79px] transition-all duration-200 h-[40px]  px-2 hover:bg-gradient-to-l hover:from-[#00181b] hover:to-emerald-950 rounded-[100px] hover:border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
									>
										<div className="text-[14px] ">Management</div>
									</Link>
								</div>
							</ul>
						</div>
						<div className="w-[120px] flex justify-center items-center">
							<Link
								href={"/"}
								className="text-white  min-w-[79px] transition-all duration-200 h-[40px]  px-2 bg-gradient-to-l from-[#00181b] to-emerald-950 rounded-[100px] border border-teal-700 hover:border-teal-700 gap-2.5 flex justify-center items-center"
							>
								<div className="text-[14px] ">Management</div>
							</Link>
						</div>
					</div>
					<div className="w-full lg:flex-row flex-col flex items-center gap-10">
						<div className="relative flex flex-col p-8  gap-5 lg:w-1/2  bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
							<div className="flex flex-col gap-5">
								<div className="w-full h-[60px] flex justify-between items-center">
									<h4 className="text-[20px] text-[#ccfffa]">
										Designer Portfolio
									</h4>
									<button
										className="flex items-center justify-center transition-all duration-300  h-[40px] w-[120px]  border border-[#00393D] 
							bg-[#66FFF0] rounded-full text-black text-[14px] hover:bg-[#000e0f] hover:text-white"
									>
										View Projects
									</button>
								</div>
								<p className="text-[#649B9B] text-[14px]">
									Explore a showcase of unique design projects that blend
									creativity and technical finesse. Lorem, ipsum dolor sit amet
									consectetur adipisicing elit. Vero, at.
								</p>
							</div>
							<div className="w-full flex flex-wrap items-center  gap-3">
								<div className="flex gap-3 items-center w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
									<span className="text-[12px] text-[#649B9B]">Client</span>
									<svg
										width="4"
										height="4"
										viewBox="0 0 4 4"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="2" cy="2" r="2" fill="#507C7C" />
									</svg>
									<span className="text-[12px] text-[#99FFF5] w-[90px]">
										John Smith
									</span>{" "}
								</div>
								<div className="flex gap-3 items-center w-[160px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
									<span className="text-[12px] text-[#649B9B]">Category</span>
									<svg
										width="4"
										height="4"
										viewBox="0 0 4 4"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="2" cy="2" r="2" fill="#507C7C" />
									</svg>
									<span className="text-[12px] text-[#99FFF5]">Portfolio</span>{" "}
								</div>
								<div className="flex gap-3 items-center w-[240px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
									<span className="text-[12px] text-[#649B9B]">Work</span>
									<svg
										width="4"
										height="4"
										viewBox="0 0 4 4"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="2" cy="2" r="2" fill="#507C7C" />
									</svg>
									<span className="text-[12px] text-[#99FFF5]">Design</span>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
											fill="#1AFFE9"
										/>
									</svg>
									<span className="text-[12px] text-[#99FFF5]">
										Develoopment
									</span>
								</div>
							</div>
							<div className="w-full border flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl">
								<div className="flex gap-5 justify-between">
									<div className="w-1/2 rounded-xl h-[230px] overflow-hidden">
										<Image
											width={50000}
											className="object-cover h-[230px]"
											height={50000}
											src={Image1}
											alt=""
										/>
									</div>
									<div className="w-1/2 rounded-xl h-[230px] overflow-hidden">
										<Image
											width={50000}
											className="object-cover h-[230px]"
											height={50000}
											src={Image2}
											alt=""
										/>
									</div>
								</div>
								<div className="w-full h-[60px] flex justify-between items-center z-20">
									<div className="w-[200px] h-[45px] rounded-full flex justify-center items-center border-[#00393D] border gap-2">
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M13.107 3.73662C14.3023 2.53671 16.0507 2.51151 17.0185 3.48315C17.9882 4.45663 17.9621 6.216 16.7661 7.41672L14.7462 9.44443C14.5026 9.68898 14.5034 10.0847 14.7479 10.3283C14.9925 10.5719 15.3882 10.5711 15.6318 10.3266L17.6516 8.29889C19.2444 6.69996 19.4444 4.14719 17.9041 2.60098C16.3621 1.05294 13.815 1.2547 12.2214 2.85445L8.18169 6.90983C6.58894 8.50876 6.38898 11.0616 7.9292 12.6078C8.1728 12.8523 8.56853 12.8531 8.81308 12.6095C9.05763 12.3659 9.0584 11.9701 8.8148 11.7256C7.84508 10.7521 7.8712 8.99272 9.06728 7.792L13.107 3.73662Z"
												fill="#1AFFE9"
											/>
											<path
												d="M12.0708 8.39226C11.8272 8.14771 11.4315 8.14694 11.1869 8.39055C10.9424 8.63415 10.9416 9.02988 11.1852 9.27443C12.1549 10.2479 12.1288 12.0073 10.9327 13.208L6.89302 17.2634C5.69776 18.4633 3.94936 18.4885 2.98147 17.5169C2.01175 16.5434 2.03787 14.784 3.23395 13.5833L5.25382 11.5556C5.49743 11.311 5.49666 10.9153 5.25211 10.6717C5.00756 10.4281 4.61183 10.4288 4.36823 10.6734L2.34836 12.7011C0.755608 14.3 0.555641 16.8528 2.09587 18.399C3.63793 19.9471 6.18506 19.7453 7.77862 18.1456L11.8183 14.0902C13.4111 12.4912 13.611 9.93847 12.0708 8.39226Z"
												fill="#1AFFE9"
											/>
										</svg>

										<Link
											href={"http://www.google.com"}
											className="text-[#649B9B] text-[14px]"
											target="_blank"
										>
											www.google.com
										</Link>
									</div>
									<div className="button w-[130px] h-[55px] rounded-full border-[#00393D] p-2 border flex justify-between">
										<button>
											<svg
												width="52"
												height="36"
												viewBox="0 0 52 36"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="#00393D"
												/>
												<path
													d="M28.5 13L23.5 18L28.5 23"
													stroke="white"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</button>
										<button>
											<svg
												width="52"
												height="36"
												viewBox="0 0 52 36"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													fill="url(#paint0_linear_1_597)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="#00393D"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="url(#paint1_radial_1_597)"
												/>
												<path
													d="M23.5 13L28.5 18L23.5 23"
													stroke="white"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_1_597"
														x1="58.898"
														y1="-13.0909"
														x2="2.11379"
														y2="20.033"
														gradientUnits="userSpaceOnUse"
													>
														<stop offset="0.238871" stop-color="#003033" />
														<stop
															offset="1"
															stop-color="#001D1F"
															stop-opacity="0"
														/>
													</linearGradient>
													<radialGradient
														id="paint1_radial_1_597"
														cx="0"
														cy="0"
														r="1"
														gradientUnits="userSpaceOnUse"
														gradientTransform="translate(25.7347 36) rotate(-90) scale(10.8 15.6)"
													>
														<stop stop-color="#00998A" />
														<stop
															offset="0.597922"
															stop-color="#00998A"
															stop-opacity="0"
														/>
													</radialGradient>
												</defs>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="relative flex flex-col p-8  gap-5 lg:w-1/2  bg-gradient-to-bl from-[#00171A] to-transparent rounded-3xl border  border-[#00393D]">
							<div className="flex flex-col gap-5">
								<div className="w-full h-[60px] flex justify-between items-center">
									<h4 className="text-[20px] text-[#ccfffa]">FutureTech AI</h4>
									<button
										className="flex items-center justify-center transition-all duration-300  h-[40px] w-[120px]  border border-[#00393D] 
							bg-[#66FFF0] rounded-full text-black text-[14px] hover:bg-[#000e0f] hover:text-white"
									>
										View Projects
									</button>
								</div>
								<p className="text-[#649B9B] text-[14px]">
									Explore a showcase of unique design projects that blend
									creativity and technical finesse. Lorem, ipsum dolor sit amet
									consectetur adipisicing elit. Vero, at.
								</p>
							</div>
							<div className="w-full flex items-center  flex-wrap gap-3">
								<div className="flex gap-3 items-center  justify-center w-[170px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
									<span className="text-[12px] text-[#649B9B]">Client</span>
									<svg
										width="4"
										height="4"
										viewBox="0 0 4 4"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="2" cy="2" r="2" fill="#507C7C" />
									</svg>
									<span className="text-[12px] text-[#99FFF5]">FutureTech</span>
								</div>
								<div className="flex gap-3 items-center  w-[160px] justify-center border border-[#00393D] h-[40px] rounded-full py-2 px-2">
									<span className="text-[12px] text-[#649B9B]">Category</span>
									<svg
										width="4"
										height="4"
										viewBox="0 0 4 4"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="2" cy="2" r="2" fill="#507C7C" />
									</svg>
									<span className="text-[12px] text-[#99FFF5]">Ai</span>
								</div>
								<div className="flex gap-3 items-center  justify-center w-[250px] border border-[#00393D] h-[40px] rounded-full py-2 px-2">
									<span className="text-[12px] text-[#649B9B]">Work</span>
									<svg
										width="4"
										height="4"
										viewBox="0 0 4 4"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="2" cy="2" r="2" fill="#507C7C" />
									</svg>
									<span className="text-[12px] text-[#99FFF5]">Design</span>
									<svg
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.8333 9.16665H10.8333V4.16665C10.8333 3.94563 10.7455 3.73367 10.5893 3.57739C10.433 3.42111 10.221 3.33331 9.99999 3.33331C9.77898 3.33331 9.56702 3.42111 9.41074 3.57739C9.25446 3.73367 9.16666 3.94563 9.16666 4.16665V9.16665H4.16666C3.94565 9.16665 3.73369 9.25444 3.57741 9.41072C3.42113 9.567 3.33333 9.77897 3.33333 9.99998C3.33333 10.221 3.42113 10.433 3.57741 10.5892C3.73369 10.7455 3.94565 10.8333 4.16666 10.8333H9.16666V15.8333C9.16666 16.0543 9.25446 16.2663 9.41074 16.4226C9.56702 16.5788 9.77898 16.6666 9.99999 16.6666C10.221 16.6666 10.433 16.5788 10.5893 16.4226C10.7455 16.2663 10.8333 16.0543 10.8333 15.8333V10.8333H15.8333C16.0543 10.8333 16.2663 10.7455 16.4226 10.5892C16.5789 10.433 16.6667 10.221 16.6667 9.99998C16.6667 9.77897 16.5789 9.567 16.4226 9.41072C16.2663 9.25444 16.0543 9.16665 15.8333 9.16665Z"
											fill="#1AFFE9"
										/>
									</svg>
									<span className="text-[12px] text-[#99FFF5]">
										Develoopment
									</span>
								</div>
							</div>
							<div className="w-full border  flex flex-col gap-5 items-center p-4 border-[#00393D] rounded-3xl  ">
								<div className="flex gap-5 justify-between">
									<div className="w-1/2 rounded-3xl h-[230px] overflow-hidden">
										<Image
											width={50000}
											className="object-cover h-[230px]"
											height={50000}
											src={Image3}
											alt=""
										/>
									</div>
									<div className="w-1/2 rounded-3xl h-[230px] overflow-hidden">
										<Image
											width={50000}
											className="object-cover h-[230px]"
											height={50000}
											src={Image4}
											alt=""
										/>
									</div>
								</div>
								<div className="w-full h-[60px] z-10 flex justify-between items-center">
									<div className="w-[200px] h-[45px] rounded-full flex justify-center items-center border-[#00393D] border gap-2">
										<svg
											width="20"
											height="21"
											viewBox="0 0 20 21"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M13.107 3.73662C14.3023 2.53671 16.0507 2.51151 17.0185 3.48315C17.9882 4.45663 17.9621 6.216 16.7661 7.41672L14.7462 9.44443C14.5026 9.68898 14.5034 10.0847 14.7479 10.3283C14.9925 10.5719 15.3882 10.5711 15.6318 10.3266L17.6516 8.29889C19.2444 6.69996 19.4444 4.14719 17.9041 2.60098C16.3621 1.05294 13.815 1.2547 12.2214 2.85445L8.18169 6.90983C6.58894 8.50876 6.38898 11.0616 7.9292 12.6078C8.1728 12.8523 8.56853 12.8531 8.81308 12.6095C9.05763 12.3659 9.0584 11.9701 8.8148 11.7256C7.84508 10.7521 7.8712 8.99272 9.06728 7.792L13.107 3.73662Z"
												fill="#1AFFE9"
											/>
											<path
												d="M12.0708 8.39226C11.8272 8.14771 11.4315 8.14694 11.1869 8.39055C10.9424 8.63415 10.9416 9.02988 11.1852 9.27443C12.1549 10.2479 12.1288 12.0073 10.9327 13.208L6.89302 17.2634C5.69776 18.4633 3.94936 18.4885 2.98147 17.5169C2.01175 16.5434 2.03787 14.784 3.23395 13.5833L5.25382 11.5556C5.49743 11.311 5.49666 10.9153 5.25211 10.6717C5.00756 10.4281 4.61183 10.4288 4.36823 10.6734L2.34836 12.7011C0.755608 14.3 0.555641 16.8528 2.09587 18.399C3.63793 19.9471 6.18506 19.7453 7.77862 18.1456L11.8183 14.0902C13.4111 12.4912 13.611 9.93847 12.0708 8.39226Z"
												fill="#1AFFE9"
											/>
										</svg>

										<Link
											href={"http://www.google.com"}
											className="text-[#649B9B] text-[14px]"
											target="_blank"
										>
											www.google.com
										</Link>
									</div>
									<div className="button w-[130px] h-[55px] rounded-full border-[#00393D] p-2 border flex justify-between">
										<button>
											<svg
												width="52"
												height="36"
												viewBox="0 0 52 36"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="#00393D"
												/>
												<path
													d="M28.5 13L23.5 18L28.5 23"
													stroke="white"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</button>
										<button>
											<svg
												width="52"
												height="36"
												viewBox="0 0 52 36"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													fill="url(#paint0_linear_1_597)"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="#00393D"
												/>
												<rect
													x="0.5"
													y="0.5"
													width="51"
													height="35"
													rx="17.5"
													stroke="url(#paint1_radial_1_597)"
												/>
												<path
													d="M23.5 13L28.5 18L23.5 23"
													stroke="white"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<defs>
													<linearGradient
														id="paint0_linear_1_597"
														x1="58.898"
														y1="-13.0909"
														x2="2.11379"
														y2="20.033"
														gradientUnits="userSpaceOnUse"
													>
														<stop offset="0.238871" stop-color="#003033" />
														<stop
															offset="1"
															stop-color="#001D1F"
															stop-opacity="0"
														/>
													</linearGradient>
													<radialGradient
														id="paint1_radial_1_597"
														cx="0"
														cy="0"
														r="1"
														gradientUnits="userSpaceOnUse"
														gradientTransform="translate(25.7347 36) rotate(-90) scale(10.8 15.6)"
													>
														<stop stop-color="#00998A" />
														<stop
															offset="0.597922"
															stop-color="#00998A"
															stop-opacity="0"
														/>
													</radialGradient>
												</defs>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 w-full h-[350px] bg-gradient-to-t from-[#000e0f] to-transparent"></div>{" "}
				</div>
			</div>
			<div className="mt-20 px-8 w-full relative">
				<div className="w-full min-h-[400px] flex flex-col gap-5 py-8">
					<div className="w-[90%] mx-auto flex flex-col items-center gap-5">
						<h1 className="text-[38px] text-[#E5FFFD] text-center">
							Client Stories: Voices of Satisfaction
						</h1>
						<p className="text-[#507C7C] text-[16px] text-center">
							Dive into a collection of testimonials that speak to the impact of
							Novus. Our clients share their journey, highlighting the
							excellence, reliability, and transformative experiences theyve
							encountered working with us.
						</p>
					</div>
					<div className="w-full h-fit overflow-hidden items-center">
						<div className="relative w-fit">
							<div
								className="flex gap-4 transition-transform duration-500 ease-in-out"
								style={{
									transform: `translateX(-${currentIndex * itemWidth}px)`,
								}}
							>
								{testimonials.map((testimonial, index) => (
									<div key={index} className="h-full w-[350px] flex-shrink-0">
										<div className="flex flex-col justify-between gap-4 sm:w-[350px] transition-all duration-200 w-[350px] h-[270px] border border-[#00393D] rounded-2xl p-5 hover:bg-gradient-to-b from-[#00393d9a] to-transparent">
											<div className="w-full h-[70px] flex items-center gap-3">
												<Image
													className="rounded-[50%] w-12 h-12 object-cover"
													width={1000}
													height={1000}
													src={testimonial.image}
													alt=""
												/>
												<div className="flex flex-col justify-center gap-1">
													<h3 className="text-[#CCFFFA] sm:text-[16px] text-sm">
														{testimonial.name}
													</h3>
													<span className="text-xs sm:text-[14px] text-[#507C7C]">
														{testimonial.title}
													</span>
												</div>
											</div>
											<p className="md:text-[14px] text-[12px] text-[#649B9B] h-[130px]">
												{testimonial.quote}
											</p>
											<div className="h-[30px] flex gap-2 items-center">
												⭐⭐⭐⭐⭐
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="w-full flex justify-between  items-center mt-8 ">
							<div className="w-[300px] h-full flex-col flex gap-1 justify-center z-20">
								<span className="text-[#507C7C] text-[15px]">Worked with</span>
								<span className="text-[#CCFFFA] text-[16px]">
									132+ Companies Worldwide
								</span>
							</div>
							<div className="buttons z-20 gap-1 items-center min-w-[130px] h-[55px] rounded-full border-[#00393D] p-2 border flex justify-between">
								<button onClick={handlePrevClick}>
									<svg
										width="52"
										height="36"
										viewBox="0 0 52 36"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											x="0.5"
											y="0.5"
											width="51"
											height="35"
											rx="17.5"
											stroke="#00393D"
										/>
										<path
											d="M28.5 13L23.5 18L28.5 23"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
								<button onClick={handleNextClick}>
									<svg
										width="52"
										height="36"
										viewBox="0 0 52 36"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect
											x="0.5"
											y="0.5"
											width="51"
											height="35"
											rx="17.5"
											fill="url(#paint0_linear_1_597)"
										/>
										<rect
											x="0.5"
											y="0.5"
											width="51"
											height="35"
											rx="17.5"
											stroke="#00393D"
										/>
										<rect
											x="0.5"
											y="0.5"
											width="51"
											height="35"
											rx="17.5"
											stroke="url(#paint1_radial_1_597)"
										/>
										<path
											d="M23.5 13L28.5 18L23.5 23"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<defs>
											<linearGradient
												id="paint0_linear_1_597"
												x1="58.898"
												y1="-13.0909"
												x2="2.11379"
												y2="20.033"
												gradientUnits="userSpaceOnUse"
											>
												<stop offset="0.238871" stopColor="#003033" />
												<stop offset="1" stopColor="#001D1F" stopOpacity="0" />
											</linearGradient>
											<radialGradient
												id="paint1_radial_1_597"
												cx="0"
												cy="0"
												r="1"
												gradientUnits="userSpaceOnUse"
												gradientTransform="translate(25.7347 36) rotate(-90) scale(10.8 15.6)"
											>
												<stop stopColor="#00998A" />
												<stop
													offset="0.597922"
													stopColor="#00998A"
													stopOpacity="0"
												/>
											</radialGradient>
										</defs>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 lg:block hidden w-[250px] h-full bg-gradient-to-r from-[#000e0f] to-transparent left-0"></div>
				<div className="absolute bottom-0 lg:block hidden w-[250px] h-full bg-gradient-to-l from-[#000e0f] to-transparent right-0"></div>
			</div>
		</div>
	);
}
