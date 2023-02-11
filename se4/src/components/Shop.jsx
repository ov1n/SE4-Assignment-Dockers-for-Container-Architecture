import React from "react";

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
        className="banner"
        style={{
          backgroundImage: "url('./header_bg.jpg')",
        }}
      >
        <div className="banner__overlay">
          <div className="banner__container">
            <h1 className="banner__title">COFFEE HOUSE</h1>
            <p className="banner__text">Let's talk coffee</p>
            <a href="/product" className="btn btn--opacity">
              Manage Products
            </a>
          </div>
          <img
            className="banner__scroll-down"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+Cjwvc3ZnPgo="
          />
        </div>
      </div>
      <div className="sect sect--type">
        <div className="">
          <div className="row--center">
            <div className=" col-md-5 col-xs-8 col-sm-6 col--inbl">
              <h1 className="sect__title">
                We believe in coffee that tastes incredible
              </h1>
            </div>
          </div>
          <div className="flex flex-row relative max-w-[1200px] mx-auto ">
            <div className="grid grid-cols-4 gap-5  ">
              {coffee.map((item) => (
                <div className="flex flex-col items-center mt-10">
                  <img src={item.url} className="coffee__img" />
                  <h2 className="coffee__name">{item.name}</h2>
                  <div className="mb-5">
                    <a href="#" className="btn">
                      {item.rating}.0
                    </a>
                  </div>
                  <p className="coffee__descr mt-2">{item.description}</p>
                  <h2 className="coffee__name">{item.price}.00 LKR</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="half-sect">
        <div className="half half-sect__first">
          <div className="description">
            <h2 className="description__title">OUR BRANCHES</h2>
            <p className="description__p">WE SERVE YOU ON ALL </p>
            <p className="description__p">7 DAYS OF THE WEEK 7.00AM TO 11.30PM</p>
            <p className="description__p">
              {" "}
              WE ARE AVAILABLE ON UBER EATS & PICKME FOODS
            </p>
          </div>
        </div>
        <div
          className="half half-sect__second"
          style={{ backgroundImage: `url('./slide-01.jpg')` }}
        >
          {" "}
        </div>
      </div>

      <div className="sect sect--brown sect--no-bottom">
        <div className="">
          <div className="row--center">
            <div className="col-md-5 col-sm-6 col--inbl mb-4">
              <h1 className="sect__title sect--white-text">
                Let's talk coffee Story
              </h1>
              <p className="sect__subtitle sect--white-text mb-4">
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
