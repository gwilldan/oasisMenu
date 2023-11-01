import beefShawarma from "../assets/beefShawarma.jpeg";
import specialShawarma from "../assets/specialShawarma.jpeg";
import specialBeef from "../assets/special.jpeg";
import specialChicken from "../assets/chickenShawarma.jpeg";
import miniSpecial from "../assets/minispecial.jpeg";
import newSha from "../assets/newSha.jpeg";

import beets from "../assets/beets.jpeg";
import apple from "../assets/apple.jpeg";
import creamside from "../assets/creamside.jpeg";
import avocado from "../assets/avocado.jpeg";
import pawpaw from "../assets/pawpa.jpeg";

// ANY CHANGES MADE ON THE ITEM VARIABLES SHOULD BE INCLUDED IN THE useEffect which is on thee APP component (MAKE SURE TO IMPORT IT TOO) and also the menuItems component.

export const Shawarma = [
	{
		name: "Beef Regular",
		des: " Savor the flavor; with one sausage and sizeable amount of Beef ",
		price: "N 1,800",
		img: beefShawarma,
	},

	{
		name: "Chicken Regular",
		des: " One sausage and sizeable amount of Chicken",
		price: "N 2,000",
		img: specialShawarma,
	},

	{
		name: "Special Beef",
		des: "Has Two sausages and lots of beef",
		price: "N 2,100",
		img: specialBeef,
	},

	{
		name: "Special Chicken",
		des: "for Chicken lovers; Has two sausages and lots of chicken",
		price: "N 2,500",
		img: specialChicken,
	},

	{
		name: "Special Shawarma",
		des: "This is a combo of chicken and beef and two sausages",
		price: "N 2,300",
		img: newSha,
	},

	{
		name: "Mini Special",
		des: "Also a combo of chicken and beef but with one sausage",
		price: "N 2,000",
		img: miniSpecial,
	},
];

export const Smoothie = [
	{
		name: "Beets",
		des: "Carefully made from Banana, watermelon, pineapple and beats ",
		price: "N 1,500",
		img: beets,
	},
	{
		name: "Melapple",
		des: "Lovely mix from apple, watermelon, banana and pineapple ",
		price: "N2,100",
		img: apple,
	},
	{
		name: "Creamside",
		des: "A Banana, pineapple, avocado and cucumber mix ",
		price: "N 2,400",
		img: creamside,
	},
	{
		name: "Avocalada",
		des: "An avocado, pineapple, banana and cucumber mix ",
		price: "N 2,400",
		img: avocado,
	},
	{
		name: "Papina",
		des: "Flavored from pawpaw, pineapple, banana and cucumber ",
		price: "N 1500",
		img: pawpaw,
	},
	{
		name: "Tigernuts",
		des: "Processed from Tigernuts, watermelons, date and banana ",
		price: "N 1500",
		img: avocado,
	},
];

export const Parfait = [
	{
		name: "Smoothie",
		des: "Very delicious smoothie mix with some ",
		price: "N 2,000",
		img: beefShawarma,
	},
];
