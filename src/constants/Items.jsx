import beefShawarma from "../assets/beefShawarma.jpeg";
import specialShawarma from "../assets/specialShawarma.jpeg";
import specialBeef from "../assets/special.jpeg";
import specialChicken from "../assets/chickenShawarma.jpeg";
import miniSpecial from "../assets/minispecial.jpeg";
import newSha from "../assets/newSha.jpeg";
import Tigernut from "../assets/tigernut.jpeg";
import milkshakes from "../assets/milkshake.jpeg";

import beets from "../assets/beets.jpeg";
import apple from "../assets/apple.jpeg";
import creamside from "../assets/creamside.jpeg";
import avocado from "../assets/avocado.jpeg";
import pawpaw from "../assets/pawpa.jpeg";
import parfait from "../assets/parfait.jpeg";
import burger from "../assets/burger.jpg";
import singleCheese from "../assets/singleCheese.jpeg";
import cupparfait from "../assets/cupparfait.webp";
import regurlarBurger from "../assets/regurlarBurger.jpeg";

// ANY CHANGES MADE ON THE ITEM VARIABLES SHOULD BE INCLUDED IN THE useEffect which is on thee APP component (MAKE SURE TO IMPORT IT TOO) and also the menuItems component.

export const Shawarma = [
	{
		name: "Cabana Beef Prime",
		des: " Savor the flavor; with one sausage and sizeable amount of Beef ",
		price: "N 2,100",
		img: beefShawarma,
	},

	{
		name: "Caban Chicken Prime",
		des: " One sausage and sizeable amount of Chicken",
		price: "N 2,200",
		img: specialShawarma,
	},

	{
		name: "Cabana Beef Premium",
		des: "Has Two sausages and lots of beef",
		price: "N 2,400",
		img: specialBeef,
	},

	{
		name: "Cabana Supreme ",
		des:
			"for our indecisive friends; this has 1 sausage, a sizable amount of chicken and beef",
		price: "N 2,500",
		img: specialChicken,
	},

	{
		name: "Cabana Chicken Premium",
		des: "This is for chicken lovers; has a two sausages and lots of chicken",
		price: "N 2,900",
		img: newSha,
	},

	{
		name: "Cabana Mini supreme",
		des:
			"Has sizeable amount of chicken and beef mix, specially for our friends with little apetite.",
		price: "N 2,300",
		img: miniSpecial,
	},

	{
		name: "Cabana Combo",
		des: "A special jumbo sized shawarma mix of Chicken and beef",
		price: "N 3,900",
		img: specialShawarma,
	},
];

export const Smoothie = [
	{
		name: "Cabana Beet",
		des: "Carefully made from Banana, watermelon, pineapple and beats ",
		price: "N 1,500",
		img: beets,
	},
	{
		name: "Cabana Melapple",
		des: "Lovely mix from apple, watermelon, banana and pineapple ",
		price: "N 1,500",
		img: apple,
	},
	{
		name: "Cabana Creamside",
		des: "A Banana, pineapple, avocado and cucumber mix ",
		price: "N 1,500",
		img: creamside,
	},
	{
		name: "Cabana Avocalada",
		des: "An avocado, pineapple, banana and cucumber mix ",
		price: "N 1,500",
		img: avocado,
	},
	{
		name: "Cabana Papina",
		des: "Flavored from pawpaw, pineapple, banana and cucumber ",
		price: "N 1,500",
		img: pawpaw,
	},
	{
		name: "Cabana Tigernut",
		des: "Special smoothie from Tigernuts, watermelons, date and banana blend ",
		price: "N 1,500",
		img: Tigernut,
	},
];

export const Milkshake = [
	{
		name: "Milky shakes",
		des: "Classic milk drink, flavoured with nutritious fruit blends",
		price: "N 2,000",
		img: milkshakes,
	},
];

export const Burger = [
	{
		name: "Cabana Burger",
		des:
			"Hamburger with sizeable meat, mixed with tomato, onions and vegetable toppings. ",
		price: "N 2,000",
		img: regurlarBurger,
	},
	{
		name: "Cabana Classic",
		des:
			"Hamburger with nicely tastey meat lup, mixed with tomato, vegetable toppings and cheese. ",
		price: "N 2,500",
		img: singleCheese,
	},
	{
		name: "Cabana Double Decker",
		des:
			"Hamburger with two piled up slices of melted cheese on top of meat lumps, mixed with tomato, onions and vegetable toppings. ",
		price: "N 4,500",
		img: burger,
	},
];

export const Parfait = [
	{
		name: "Cabana Caramel",
		des: "our specially made fruit-mix parfait, contained in a sizable pack ",
		price: "N 2,000",
		img: cupparfait,
	},
	{
		name: "Cabana Caramel Grande",
		des: "our Jumbo pack specially made fruit-mix parfait ",
		price: "N 2,900",
		img: parfait,
	},
];
