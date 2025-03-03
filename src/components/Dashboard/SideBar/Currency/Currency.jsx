import React, { useEffect } from "react";
import {
  CurrencyWrapper,
  CurrencyTable,
  CurrencyTableHead,
  CurrencyTableHeadItem,
  CurrencyHeadWrapper,
} from "./CurrencyStyled";
import { selectCurrencyRates } from "../../../../redux2/currency/selectors";
import { fetchCurrencyRates } from "../../../../redux2/currency/operations";
import { useDispatch, useSelector } from "react-redux";
import { CurrencyChart } from "./Chart";

export const Currency = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectCurrencyRates);

  useEffect(() => {
    dispatch(fetchCurrencyRates());
  }, [dispatch]);

  if (!rates) {
    return <div>Loading...</div>;
  }

  console.log("Rates:", rates); // Debugging line to check the rates object

  return (
    <CurrencyWrapper>
      <CurrencyTable>
        <CurrencyHeadWrapper>
          <CurrencyTableHead>
            <CurrencyTableHeadItem>Currency</CurrencyTableHeadItem>
            <CurrencyTableHeadItem>Purchase</CurrencyTableHeadItem>
            <CurrencyTableHeadItem>Sale</CurrencyTableHeadItem>
          </CurrencyTableHead>
        </CurrencyHeadWrapper>
        <tbody>
          <tr>
            <td>USD</td>
            <td>{Number(rates["USD"]).toFixed(2)}</td>
            <td>{Number(rates["USD"]).toFixed(2)}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{Number(rates["EUR"]).toFixed(2)}</td>
            <td>{Number(rates["EUR"]).toFixed(2)}</td>
          </tr>
        </tbody>
      </CurrencyTable>
      <CurrencyChart />
    </CurrencyWrapper>
  );
};

export default Currency;
