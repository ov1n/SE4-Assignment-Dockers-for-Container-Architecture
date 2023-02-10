import React from "react";

const Shop = () => {
  return (
    <div className=" w-full">
      <div
        class="banner"
        style={{
          backgroundImage: "url('https://image.ibb.co/meT7Jb/header_bg_1.jpg')",
        }}
      >
        <div class="banner__overlay">
          <div class="banner__container">
            <h1 class="banner__title">COFFEE HOUSE</h1>
            <p class="banner__text">Serving only the best since 2023</p>
            <a href="/manage" class="btn btn--opacity">
              Manage Shop
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
                We believe in coffee that tastes incredible
              </h1>
              <p class="sect__subtitle">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo.
              </p>
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
                  Order Now
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
                  Order Now
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
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="half-sect">
        <div class="half half-sect__first">
          <div class="description">
            <h2 class="description__title">FRESH BEANS</h2>
            <p class="description__p">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <a href="#" class="btn">
              Learn more
            </a>
          </div>
        </div>
        <div class="half half-sect__second"> </div>
      </div>

      <div class="sect sect--brown sect--no-bottom">
        <div class="container">
          <div class="row--center">
            <div class="col-md-5 col-sm-6 col--inbl ">
              <h1 class="sect__title sect--white-text">Our Story</h1>
              <p class="sect__subtitle sect--white-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
