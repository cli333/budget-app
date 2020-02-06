import React from 'react';
import './App.css';

import AddBill from '../AddBill/AddBill';
import BillProvider from '../../Context/BillContext';
import BillList from '../BillList/BillList';

const App = () => (
	<div className="bills-container">
		<BillProvider>
			<AddBill />
			<BillList />
		</BillProvider>
	</div>
);

export default App;
