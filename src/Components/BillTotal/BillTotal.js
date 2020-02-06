import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const BillTotal = () => {
	const { bills, selectedCostInterval } = useContext(BillContext);

	const moneyIntervalTransform = cost => {
		const monthlyCost = Number.parseFloat(cost);
		switch (selectedCostInterval) {
			case 'Monthly':
				return monthlyCost;
			case 'Yearly':
				return monthlyCost * 12;
			case 'Weekly':
				return (monthlyCost * 12) / 52;
			case 'Daily':
				return (monthlyCost * 12) / 365;
			default:
				return 0;
		}
	};

	return (
		<React.Fragment>
			<div className="bill-total-container">
				{selectedCostInterval} bill cost:
				<span className="total-cost">{` $${moneyIntervalTransform(
					bills.reduce((acc, curr) => {
						return curr.enabled ? acc + Number(curr.monthlyCost) : acc;
					}, 0)
				).toFixed(2)}`}</span>
			</div>
			<div className="total-saved-container">
				{selectedCostInterval} saved:
				<span className="total-saved">
					{` $${moneyIntervalTransform(
						bills.reduce((acc, curr) => {
							return !curr.enabled ? acc + Number(curr.monthlyCost) : acc;
						}, 0)
					).toFixed(2)}`}
				</span>
			</div>
		</React.Fragment>
	);
};

export default BillTotal;
