import React from "react";
import axios from "axios";

const Shop = () => {
  const coffee = [
    {
      id: 1,
      name: "Espresso",
      description:
        "It is known for its rich, intense flavor and is a key ingredient in many popular coffee drinks, such as lattes and cappuccinos.",
      price: 950.0,
      rating: 4,
      url: "https://image.ibb.co/bKy6Db/coffee_item_2.png",
    },
    {
      id: 1,
      name: "Espresso",
      description:
        "It is known for its rich, intense flavor and is a key ingredient in many popular coffee drinks, such as lattes and cappuccinos.",
      price: 950.0,
      rating: 4,
      url: "https://image.ibb.co/bKy6Db/coffee_item_2.png",
    },
    {
      id: 1,
      name: "Espresso",
      description:
        "It is known for its rich, intense flavor and is a key ingredient in many popular coffee drinks, such as lattes and cappuccinos.",
      price: 950.0,
      rating: 4,
      url: "https://image.ibb.co/bKy6Db/coffee_item_2.png",
    },
    {
      id: 1,
      name: "Espresso",
      description:
        "It is known for its rich, intense flavor and is a key ingredient in many popular coffee drinks, such as lattes and cappuccinos.",
      price: 950.0,
      rating: 4,
      url: "https://image.ibb.co/bKy6Db/coffee_item_2.png",
    },
    {
      id: 1,
      name: "Espresso",
      description:
        "It is known for its rich, intense flavor and is a key ingredient in many popular coffee drinks, such as lattes and cappuccinos.",
      price: 950.0,
      rating: 4,
      url: "https://image.ibb.co/bKy6Db/coffee_item_2.png",
    },
  ];
  return (
    <div className=" w-full">
      <div
        class="banner"
        style={{
          backgroundImage: "url('./header_bg.jpg')",
        }}
      >
        <div class="banner__overlay">
          <div class="banner__container">
            <h1 class="banner__title">COFFEE HOUSE</h1>
            <p class="banner__text">Let's talk coffee</p>
            <a href="/manage" class="btn btn--opacity">
              SHOP
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
            <div class=" col-md-5 col-xs-8 col-sm-6 col--inbl">
              <h1 class="sect__title">
                We believe in coffee that tastes incredible
              </h1>
            </div>
          </div>
          <div class="flex flex-row relative max-w-[1200px] mx-auto ">
            <div class="grid grid-cols-4 gap-5  ">
              {coffee.map((item) => (
                <div class="flex flex-col items-center mt-10">
                  <img src={item.url} class="coffee__img" />
                  <h2 class="coffee__name">{item.name}</h2>
                  <div class="mb-5">
                    <a href="#" class="btn">
                      {item.rating}.0
                    </a>
                  </div>
                  <p class="coffee__descr mt-2">{item.description}</p>
                  <h2 class="coffee__name">{item.price}.00 LKR</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div class="half-sect">
        <div class="half half-sect__first">
          <div class="description">
            <h2 class="description__title">OUR BRANCHES</h2>
            <p class="description__p">WE SERVE YOU ON ALL </p>
            <p class="description__p">7 DAYS OF THE WEEK 7.00AM TO 11.30PM</p>
            <p class="description__p">
              {" "}
              WE ARE AVAILABLE ON UBER EATS & PICKME FOODS
            </p>
          </div>
        </div>
        <div
          class="half half-sect__second"
          style={{ backgroundImage: `url('./slide-01.jpg')` }}
        >
          {" "}
        </div>
      </div>

      <div class="sect sect--brown sect--no-bottom">
        <div class="">
          <div class="row--center">
            <div class="col-md-5 col-sm-6 col--inbl mb-4">
              <h1 class="sect__title sect--white-text">
                Let's talk coffee Story
              </h1>
              <p class="sect__subtitle sect--white-text mb-4">
                Whether you're searching for something new to warm your mug,
                seeking the best brew method for your favorite blend or
                exploring our rarest offerings, you’ve come to the right place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
