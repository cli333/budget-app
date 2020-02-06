import React, { createContext, useState, useEffect } from 'react';

export const BillContext = createContext();

const BillProvider = ({ children }) => {
	const [bills, setBills] = useState([]);

	const alphabetical = bills => bills.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1));

	useEffect(() => {
		// why asynchronous here!?!?!?
		(async function() {
			const JSONbills = await localStorage.getItem('bills');
			setBills(JSON.parse(JSONbills) || []);
		})();
	}, [setBills]);

	useEffect(() => {
		console.log(bills);
	}, [bills]);

	const updateBills = bill => {
		const updatedBills = alphabetical([...bills, bill]);
		localStorage.setItem('bills', JSON.stringify(updatedBills));
		setBills(updatedBills);
	};

	const editBill = billToUpdate => {
		const billsFiltered = bills.filter(bill => bill.title !== billToUpdate.title);
		const updatedBills = alphabetical([...billsFiltered, billToUpdate]);
		localStorage.setItem('bills', JSON.stringify(updatedBills));
		setBills(updatedBills);
	};

	return (
		<BillContext.Provider
			value={{
				bills,
				updateBills,
				editBill,
			}}
		>
			{children}
		</BillContext.Provider>
	);
};

export default BillProvider;
