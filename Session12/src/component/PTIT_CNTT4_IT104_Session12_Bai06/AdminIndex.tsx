import React from 'react';

export default function AdminIndex() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{
        background: "gray",
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black"
      }}>
        <p>Header</p>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div style={{
          background: "Blue",
          color: "black",
          width: "25%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <p>Menu</p>
        </div>

        <div style={{
          background: "lightgray",
          color: "black",
          width: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <p>Main</p>
        </div>
      </div>

      <div style={{
        background: "gray",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        position: "relative",
        bottom: "50px"
      }}>
        <p>Footer</p>
      </div>
    </div>
  )
}
