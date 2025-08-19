import React from 'react';

export default function UserLayout() {
  const cartArray = Array.from({ length: 16 }, () => "Cart");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            background: "#ccc",
            padding: "10px"
        }}>
            <div style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginBottom: "5px",
                textAlign: "center"
            }}>Header</div>
        </div>
        <div style={{
                background: "#aaa",
                padding: "5px",
                textAlign: "center"
            }}>Navigation</div>

        <div style={{ display: "flex", flex: 1 }}>
            <div style={{
                width: "20%",
                background: "lightgreen",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                Menu
            </div>

            <div style={{
                width: "50%",
                display: "flex",
                flexWrap: "wrap",
                padding: "10px",
                gap: "10px",
                background: "white"
            }}>
            {cartArray.map((value, index) => (
                <div key={index} style={{
                    flex: "0 0 calc(25% - 10px)",
                    background: "lightgray",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    position: "relative",
                }}>
                    {value}
                </div>
            ))}
            </div>

            <div style={{
                width: "30%",
                background: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                Article
            </div>
        </div>
        <div style={{
            position: "relative",
            bottom: "100px"
        }}>
            <p></p>
        </div>
    </div>
  );
};