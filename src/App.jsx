import { useState } from "react";
import { MenuList, ItemsList } from "./components";
import { motion, AnimatePresence } from "framer-motion";
import {
	Shawarma,
	Smoothie,
	Parfait,
	Milkshake,
	Burger,
} from "./constants/Items";
import { useEffect } from "react";

function App() {
	const [item, setItem] = useState();
	const [itemToggle, setItemToggle] = useState(false);
	const [currentItem, setCurrentItem] = useState([]);

	useEffect(() => {
		item == "Shawarma" && setCurrentItem(Shawarma);
		item == "Smoothie" && setCurrentItem(Smoothie);
		item == "Milkshake" && setCurrentItem(Milkshake);
		item == "Burger" && setCurrentItem(Burger);
		item == "Parfait" && setCurrentItem(Parfait);
	}, [item]);

	return (
		<div
			style={{
				height: "100dvh",
				width: "100dvw",
				overflow: "hidden",
			}}>
			<MenuList
				itemToggle={itemToggle}
				setItemToggle={setItemToggle}
				setItem={setItem}
			/>
			<AnimatePresence>
				<motion.section
					animate={
						itemToggle
							? {
									y: "0",
							  }
							: {
									y: "50px",
							  }
					}
					exit={{
						y: "100px",
						display: "none",
					}}
					transition={{
						ease: "easeInOut",
					}}
					style={{
						height: "100dvh",
						width: "100dvw",
					}}
					className="bg-lightGreen ">
					<ItemsList
						item={item}
						setItem={setItem}
						itemToggle={itemToggle}
						setItemToggle={setItemToggle}
						currentItem={currentItem}
						setCurrentItem={setCurrentItem}
					/>
				</motion.section>
			</AnimatePresence>
		</div>
	);
}

export default App;
