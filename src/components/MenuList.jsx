import React from "react";
import Vector from "../assets/vector.svg";
import Logo from "../assets/oasisLogo.png";
import { FaChevronRight } from "react-icons/fa6";
import { menuItems } from "../constants/menuItems";

const MenuList = () => {
	return (
		<main
			style={{
				height: "100dvh",
				width: "100dvw",
			}}>
			<nav className=" h-[215px] bg-darkGreen relative overflow-hidden">
				<img
					src={Vector}
					alt="vector"
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

			<aside className=" p-4 ">
				<h2 className=" text-darkGreen font-semibold text-xl">Menu</h2>
				<section className=" flex flex-col gap-2  my-5">
					{menuItems.map((i, index) => (
						<button
							className=" h-[55px] rounded-lg border-[0.5px] border-darkGreen shadow-md flex items-center px-4 justify-between "
							key={index}
							onClick={() => console.log(i)}>
							<p className=" text-darkGreen font-semibold ">{i}</p>
							<FaChevronRight className="text-mainYellow" />
						</button>
					))}
				</section>
			</aside>
			<img
				src={Vector}
				alt="vector"
			/>
		</main>
	);
};

export default MenuList;