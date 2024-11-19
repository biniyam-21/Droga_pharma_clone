import { Link, NavLink } from "react-router-dom";
// import { Image } from "antd";
import logo from "assets/images/logo.png";
import text from "assets/images/Group2.png";
import { RouteName } from "constants/route";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MainMenu from "./MainMenu";
import { useTranslation } from "react-i18next";

export const items: MenuProps["items"] = [
  {
    label: <Link to={"/products"}>Medicine</Link>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"/products"}>Medical Devices</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"/products"}>Laboratory</Link>,
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"/products"}>Medical Equipment’s</Link>,
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link to={"/products"}>
        Orthopedics and Surgical <br /> Instruments and Implants
      </Link>
    ),
    key: "4",
  },
  {
    type: "divider",
  },
];

// const item2: MenuProps["items"] = [
//   {
//     key: "1",
//     label: "Item 1",
//   },
//   {
//     key: "2",
//     label: "Item 2",
//   },
//   {
//     key: "3",
//     label: "Item 3",
//   },
// ];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [showMainMenu, setShowMainMenu] = useState<boolean>(false);

  const handleOpenMainMenu = () => setShowMainMenu(true);
  const handleCloseMainMenu = () => setShowMainMenu(false);

  // function changeLanguage(e: any) {
  //   i18n.changeLanguage(e.target.value);
  // }

  function changeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <header className="w-full h-auto md:h-[100px] py-4 flex items-center justify-around  bg-colorGray">
      <nav className="w-full max-w-[1512px] justify-between max-md:justify-around mx-auto flex items-center px-6">
        <Link className="flex gap-4 items-center px-4" to={RouteName.Home}>
          {/* <img
            src={logo}
            className="md:h-[75px] md:w-[86px] h-16 w-20 md:max-[900px]:h-9 md:max-[900px]:w-18  md:max-[1200px]:h-16 md:max-l[1200px]:w-20"
          />
          <img
            src={text}
            className="md:h-[34px] md:w-[200px] h-7 w-20   md:max-[1200px]:h-7 md:max-[1200px]:w-28 md:max-[930px]:hidden md:max-[1030px]:hidden"
          /> */}
          <div className="flex md:max-[1000px]:flex-col md:max-[950px]:hidden items-center gap-x-4">
            <img src={logo} alt="logo" height={20} className="h-6" />
            <p className="uppercase text-base font-bold tracking-widest">
              Melabooks
            </p>
          </div>
        </Link>
        <div className="hidden md:mr-10 md:flex max-w-[617px] items-center gap-x-7 px-6 text-black text-base leading-5 text-left">
          <NavLink
            to={RouteName.Home}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
          >
            {t("home")}
            {/* Home */}
          </NavLink>
          <NavLink
            to={RouteName.About}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
          >
            {t("AboutUs")}
          </NavLink>
          <NavLink
            to={RouteName.Products}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
          >
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {t("Products")}
                  <DownOutlined width={20} />
                </Space>
              </a>
            </Dropdown>
          </NavLink>
          <NavLink
            to={RouteName.Research}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
          >
            {t("researchDev")}
          </NavLink>
          <NavLink
            to={RouteName.News}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
          >
            {t("news")}
          </NavLink>
          <NavLink
            to={RouteName.Vacancy}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
          >
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {t("vacancy")}

                  <DownOutlined width={20} />
                </Space>
              </a>
            </Dropdown>
          </NavLink>
          <NavLink
            to={RouteName.Contact}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
          >
            {t("contactUs")}
          </NavLink>
        </div>
        {/* hey there  */}
        {/* <h3 className="text-base text-left hidden 1350:block ">
          +251-112-73-45-45
        </h3> */}
        <NavLink to={"#"}>
          <select
            className="ml-2 px-4 outline-none bg-inherit max-md:hidden"
            onChange={changeLanguage}
          >
            <option value="en">English</option>
            <option value="amh">አማርኛ</option>
            <option value="oro">Oromic</option>
          </select>
        </NavLink>
        <button
          onClick={handleOpenMainMenu}
          className="outline-none rounded-full bg-blue flex md:hidden justify-center items-center"
        >
          <IoMenu className="font-extrabold text-4xl" />
        </button>
      </nav>
      <MainMenu show={showMainMenu} handleClose={handleCloseMainMenu} />
    </header>
  );
}

// function NavItem({ to, text }: { to: string; text: string }) {
//   return (
//     <NavLink
//       to={to}
//       className={(_) => `uppercase font-medium text-sm tracking-widest`}
//     >
//       {text}
//     </NavLink>
//   );
// }
