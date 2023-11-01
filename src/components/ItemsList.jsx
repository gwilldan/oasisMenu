import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { menuItems } from "../constants/menuItems";

const ItemsList = ({ item, setItem, setItemToggle, currentItem }) => {
	// console.log(item);
	return (
		<>
			<header className="  bg-lightGreen shadow-lg z-10">
				<div className=" flex justify-between items-center p-5">
					<button
						onClick={() => setItemToggle(false)}
						className=" h-8 w-8 rounded-full border border-black grid place-content-center items-center">
						<FaChevronLeft />
					</button>
					<p className=" text-darkGreen font-bold">
						OASIS <span className="text-mainYellow">CABANA</span>
					</p>
				</div>
				<div className="px-5 flex mt-5 z-10 shadow-lg">
					{menuItems.map((i, index) => (
						<div
							key={index}
							className={` font-semibold pb-1 text-darkGreen border-b-[2px] px-2 ${
								item == i && " border-b-darkGreen"
							}`}
							type="button"
							onClick={() => setItem(i)}>
							<p>{i}</p>
						</div>
					))}
				</div>
			</header>

			<main className=" h-[calc(100%-15%)] overflow-auto mb-[150px] ">
				<section className=" flex flex-col gap-3 p-5 ">
					{currentItem.map((i, index) => (
						<div
							key={index}
							className="  bg-green-50 h-[120px] max-h-[120px] grid grid-cols-[70%_30%] shadow-lg rounded-lg p-2 gap-1 ">
							<div className=" h-full flex flex-col ">
								<h1 className=" text-lg font-bold text-darkGreen"> {i.name}</h1>
								<p className="text-[12px] flex-1 font-light  text-darkGreen ">
									{i.des}
								</p>
								<p className=" text-mainYellow font-bold">{i.price}</p>
							</div>
							<div className=" w-[90px] grid place-content-center">
								<img
									src={i.img}
									alt=""
									className="h-[80px] w-[80px] rounded-xl"
								/>
							</div>
						</div>
					))}
				</section>
			</main>
		</>
	);
};

export default ItemsList;
