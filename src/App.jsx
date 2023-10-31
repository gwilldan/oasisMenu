import { useState } from "react";
import { Items, ItemsList, MenuList } from "./components";

function App() {
	return (
		<div>
			<MenuList />
			<Items />
			<ItemsList />
		</div>
	);
}

export default App;
