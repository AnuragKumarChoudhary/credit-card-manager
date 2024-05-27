import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  let percent = {
    "gas": 4,
    "grocery": 4,
    "dining": 3,
    "verizon": 2,
    "other": 1
  }

  let [gasAmt, setGasAmt] = useState('');
  let [groceryAmt, setGroceryAmt] = useState('');
  let [diningAmt, setDiningAmt] = useState('');
  let [verizonAmt, setVerizonAmt] = useState('');
  let [otherAmt, setOtherAmt] = useState('');
  let [totalAmt, setTotalAmt] = useState(0);

  let [pvdeGasAmt, setPvdeGasAmt] = useState(0);
  let [pvdeGroceryAmt, setPvdeGroceryAmt] = useState(0);
  let [pvdeDiningAmt, setPvdeDiningAmt] = useState(0);
  let [pvdeVerizonAmt, setPvdeVerizonAmt] = useState(0);
  let [pvdeOtherAmt, setPvdeOtherAmt] = useState(0);
  let [pvdeTotalAmt, setPvdeTotalAmt] = useState(0);

  function setGasAmount(event) {
    if (event.target.value && parseFloat(event.target.value)>0) {
      setGasAmt(parseFloat(event.target.value));
    } else {
      setGasAmt('')
    }
  }

  function setGroceryAmount(event) {
    if (event.target.value && parseFloat(event.target.value)>0) {
      setGroceryAmt(parseFloat(event.target.value));
    } else {
      setGroceryAmt('')
    }
  }

  function setDiningAmount(event) {
    if (event.target.value && parseFloat(event.target.value)>0) {
      setDiningAmt(parseFloat(event.target.value));
    } else {
      setDiningAmt('')
    }
  }

  function setVerizonAmount(event) {
    if (event.target.value && parseFloat(event.target.value)>0) {
      setVerizonAmt(parseFloat(event.target.value));
    } else {
      setVerizonAmt('')
    }
  }

  function setOtherAmount(event) {
    if (event.target.value && parseFloat(event.target.value)>0) {
      setOtherAmt(parseFloat(event.target.value));
    } else {
      setOtherAmt('')
    }
  }

  useEffect(() => {
    calculatePercentageAmt();
  })

  function calculatePercentageAmt() {
    setPvdeGasAmt(parseFloat(((percent["gas"] * gasAmt) / 100).toFixed(2)));
    setPvdeGroceryAmt(parseFloat(((percent["grocery"] * groceryAmt) / 100).toFixed(2)));
    setPvdeDiningAmt(parseFloat(((percent["dining"] * diningAmt) / 100).toFixed(2)));
    setPvdeVerizonAmt(parseFloat(((percent["verizon"] * verizonAmt) / 100).toFixed(2)));
    setPvdeOtherAmt(parseFloat(((percent["other"] * otherAmt) / 100).toFixed(2)));

    calculateTotal();
    calculatePVDETotal();
  }

  function calculateTotal() {
    if (parseFloat(gasAmt) && parseFloat(groceryAmt) && parseFloat(diningAmt) && parseFloat(verizonAmt) && parseFloat(otherAmt)) {
      setTotalAmt(parseFloat((gasAmt + groceryAmt + diningAmt + verizonAmt + otherAmt).toFixed(2)));
    }
  }

  function calculatePVDETotal() {
    if (parseFloat(gasAmt) && parseFloat(groceryAmt) && parseFloat(diningAmt) && parseFloat(verizonAmt) && parseFloat(otherAmt)) {
      setPvdeTotalAmt(parseFloat((pvdeGasAmt + pvdeGroceryAmt + pvdeDiningAmt + pvdeVerizonAmt + pvdeOtherAmt).toFixed(2)));
    }
  }

  return (
    <div className="main-container">
      <div className="title-container">
        <h3>Credit Card Calculator</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Purchase Type</th>
            <th>Estiomated Monthly Spend</th>
            <th>%</th>
            <th>Potential Verizon Dollars Earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gas</td>
            <td><input type="number" id="gas" min="0" value={gasAmt} onChange={setGasAmount}></input></td>
            <td>{percent["gas"]} %</td>
            <td>$ {pvdeGasAmt}</td>
          </tr>
          <tr>
            <td>Grocery Store</td>
            <td><input type="number" id="grocery_store" min="0" value={groceryAmt} onChange={setGroceryAmount}></input></td>
            <td>{percent["grocery"]} %</td>
            <td>$ {pvdeGroceryAmt}</td>
          </tr>
          <tr>
            <td>Dining</td>
            <td><input type="number" id="dining" min="0" value={diningAmt} onChange={setDiningAmount}></input>
            </td>
            <td>{percent["dining"]} %</td>
            <td>$ {pvdeDiningAmt}</td>
          </tr>
          <tr>
            <td>Verizon</td>
            <td><input type="number" id="verizon" min="0" value={verizonAmt} onChange={setVerizonAmount}></input>
            </td>
            <td>{percent["verizon"]} %</td>
            <td>$ {pvdeVerizonAmt}</td>
          </tr>
          <tr>
            <td>Other</td>
            <td><input type="number" id="other" min="0" value={otherAmt} onChange={setOtherAmount}></input></td>
            <td>{percent["other"]} %</td>
            <td>$ {pvdeOtherAmt}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$ {totalAmt}</td>
            <td></td>
            <td>$ {pvdeTotalAmt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
