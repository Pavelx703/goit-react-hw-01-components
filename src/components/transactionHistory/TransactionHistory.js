import React from "react";
import style from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionHistory({ items }) {
  return (
    <>
      <table className={style.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item.id} className={style.item}>
              <td className={style.label_type}>{item.type}</td>
              <td className={style.label}>{item.amount}</td>
              <td className={style.percentage}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
