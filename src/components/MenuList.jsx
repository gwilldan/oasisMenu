import React from "react";
import Vector from "../assets/vector.svg";
import Logo from "../assets/oasisLogo.png";
import { FaChevronRight } from "react-icons/fa6";
import { menuItems } from "../constants/menuItems";
import { easeIn, easeInOut, motion } from "framer-motion";
import { BiLogoInstagramAlt, BiLogoFacebookCircle } from "react-icons/bi";
import { FaWhatsapp, FaLocationDot } from "react-icons/fa6";

const MenuList = ({ itemToggle, setItemToggle, setItem }) => {
	return (
		<motion.main
			animate={
				itemToggle
					? {
							display: "none",
					  }
					: {
							display: "block",
					  }
			}
			transition={{
				ease: "easeIn",
				delay: 0.2,
			}}
			style={{
				height: "100dvh",
				width: "100dvw",
			}}>
			<nav className=" h-[215px] bg-darkGreen relative overflow-hidden">
				<img
					src={Vector}
					alt="vector"
					className=" w-[700px] sm:w-full"
				/>
				<section className=" absolute h-full w-full top-0 grid place-content-center text-center">
					<img
						src={Logo}
						className=" h-[130px] w-[130px] mx-auto "
					/>
					<h1 className=" mb-[-5px] text-2xl font-bold text-white ">
						Hey! Foodie
					</h1>
					<p className=" text-mainYellow font-semibold">
						Here's our menu for today
					</p>
				</section>
			</nav>

			<aside className=" p-4  ">
				<h2 className=" text-darkGreen font-semibold text-xl">Menu</h2>
				<section className=" flex flex-col gap-2  my-5">
					{menuItems.map((i, index) => (
						<button
							className=" h-[55px] rounded-lg border-[0.5px] border-darkGreen shadow-md flex items-center px-4 justify-between "
							key={index}
							onClick={() => {
								setItemToggle(true);
								setItem(i);
							}}>
							<p className=" text-darkGreen font-semibold ">{i}</p>
							<FaChevronRight className="text-mainYellow " />
						</button>
					))}
				</section>
			</aside>
			<img
				src={Vector}
				alt="vector"
				className="  w-[700px] md:w-full"
			/>

			<footer className=" text-darkGreen fixed bottom-0 w-full h-10 p-2 flex justify-between ">
				<div className=" flex items-center gap-2">
					<FaLocationDot className=" text-2xl" />
					<p>1 Atiku Avenue, Uyo</p>
				</div>
				<section className=" flex items-center gap-1 text-2xl  ">
					<a href="https://wa.me/2349117466084">
						<FaWhatsapp />
					</a>
					<a
						href="https://instagram.com/oasiscabanauyo"
						target="_blank">
						<BiLogoInstagramAlt />
					</a>
					<a
						href="https://www.facebook.com/oasiscabanauyo"
						target="_blank">
						<BiLogoFacebookCircle />
					</a>
				</section>
			</footer>
		</motion.main>
	);
};

export default MenuList;
