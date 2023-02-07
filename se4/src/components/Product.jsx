import React from "react";

const Product = () => {
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div class="banner__overlay">
          <div class="banner__container">
            <h1 class="banner__title">COFFEE HOUSE</h1>
            <p class="banner__text">Serving only the best since 2023</p>
            <a href="#" class="btn btn--opacity">
              Product
            </a>
          </div>
          <img
            class="banner__scroll-down"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+Cjwvc3ZnPgo="
          />
        </div>
      </div>

      <div class="sect sect--type">
        <div class="">
          <div class="row--center">
            <div class="col-md-5 col-xs-8 col-sm-6 col--inbl">
              <h1 class="sect__title">
                Listed Products
              </h1>
              <p class="sect__subtitle">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo.
              </p>
              <div class="row--margin row--center">
                <a href="#" class="btn">
                  Add Item
                </a>
              </div>
            </div>
          </div>
          <div class="row row--small row--margin row--center">
            <div class="col-md-4 col-sm-4 coffee">
              <img
                src="https://image.ibb.co/bKy6Db/coffee_item_2.png"
                class="coffee__img"
              />
              <h2 class="coffee__name">Mocha latte</h2>
              <p class="coffee__descr">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <h2 class="coffee__name">1500.00 LKR</h2>
              <div class="row--margin row--center">
                <a href="#" class="btn">
                  Update Details
                </a>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 coffee">
              <img
                src="https://image.ibb.co/nN0WeG/coffee_item_1.png"
                class="coffee__img"
              />
              <h2 class="coffee__name">Pour over</h2>
              <p class="coffee__descr">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <h2 class="coffee__name">1500.00 LKR</h2>
              <div class="row--margin row--center">
                <a href="#" class="btn">
                  Update Details
                </a>
              </div>
            </div>

            <div class="col-md-4 col-sm-4 coffee">
              <img
                src="https://image.ibb.co/dHQa6w/coffee_item_3.png"
                class="coffee__img"
              />
              <h2 class="coffee__name">Espresso</h2>
              <p class="coffee__descr">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
              <h2 class="coffee__name">1500.00 LKR</h2>
              <div class="row--margin row--center">
                <a href="#" class="btn">
                  Update Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
