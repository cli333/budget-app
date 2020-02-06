import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const BillList = () => {
	const { bills, editBill } = useContext(BillContext);
	return (
		<div className="bill-list-container">
			{bills.map((bill, index) => (
				<div key={index} className="bill-list-row">
					<input
						type="checkbox"
						className="form-check-input"
						checked={bill.enabled}
						onChange={() =>
							editBill({
								title: bill.title,
								monthlyCost: bill.monthlyCost,
								enabled: !bill.enabled,
							})
						}
					/>
					<div className="bill-list-row-content">
						{bill.title} - ${bill.monthlyCost}
					</div>
				</div>
			))}
		</div>
	);
};

export default BillList;
