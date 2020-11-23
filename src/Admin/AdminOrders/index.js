import React from "react";
import SearchButton from "../../components/SearchButton";

const AdminOrders = () => {
  return (
    <>
      <div>
        <SearchButton />
        <div style={{ display: "flex", justifyContent: 'space-around'}}>
          <div>
            <p>Alexandre Santos</p>
            <p>8FH2U37D</p>
          </div>
          <div>
            <p>289,00 R$</p>
            <p>16/11/2020</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrders;
