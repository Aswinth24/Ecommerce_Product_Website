import React, { useState } from "react";
import { data } from "./Data";
const LeftHalf = () => {
  const [products] = useState(() => {
    return data;
  });
  const initial = () => {
    return 0;
  };
  const [i, setIndex] = useState(initial());
  const [j, setIndex1] = useState(initial());
  const [hidden, setHidden] = useState(false);

  return (
    <React.Fragment>
      <div className="left_cont">
        <div className="product-img">
          <img
            src={products[i].mainImage}
            alt="product"
            onClick={() => setHidden(hidden === false ? true : false)}
          />
          <div
            className="previous previous1"
            onClick={() => {
              if (i > 0) {
                setIndex(i - 1);
              }
            }}
          >
            <img src="images/icon-previous.svg" alt="" />
          </div>
          <div
            className="next next1"
            onClick={() => {
              if (i < products.length - 1) {
                setIndex(i + 1);
              }
            }}
          >
            <img src="images/icon-next.svg" alt="" />
          </div>
        </div>
        <div className="thumbnail">
          {products.map((items, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setIndex(index);
                }}
                className={i === index ? "border" : ""}
              >
                <img src={items.thumbnail} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className={"overlay-container" + (hidden === true ? "" : " hidden")}>
        <div className="left_cont">
          <div className="product-img">
            <img src={products[j].mainImage} alt="product" />
            <div
              className="previous"
              onClick={() => {
                if (j > 0) {
                  setIndex1(j - 1);
                }
              }}
            >
              <img src="images/icon-previous.svg" alt="" />
            </div>
            <div
              className="next"
              onClick={() => {
                if (j < products.length - 1) {
                  setIndex1(j + 1);
                }
              }}
            >
              <img src="images/icon-next.svg" alt="" />
            </div>
            <div
              className="close"
              onClick={() => {
                setHidden(hidden === false ? true : false);
              }}
            >
              <img src="images/icon-close.svg" alt="" />
            </div>
          </div>
          <div className="thumbnail">
            {products.map((items, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setIndex1(index);
                  }}
                  className={j === index ? "border" : ""}
                >
                  <img src={items.thumbnail} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LeftHalf;
