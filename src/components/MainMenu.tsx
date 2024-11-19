import { RouteName } from "constants/route";
import { NavLink, Link } from "react-router-dom";
import logo from "assets/images/logo.png";
import { IoMdClose } from "react-icons/io";
import { Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
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

interface IProp {
  show: boolean;
  handleClose: () => void;
}

export default function MainMenu({ show, handleClose }: IProp) {
  const { t, i18n } = useTranslation();

  function changeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div
      className={`${
        show ? "right-0" : "-right-[1512px]"
      } fixed md:hidden transition-all duration-500 top-0 w-full z-50`}
    >
      <div className="w-full flex min-h-screen  flex-col bg-lighter-gray relative">
        <div className="w-full flex items-center justify-between h-66 px-6">
          <div className="flex gap-x-8 items-center">
            <div className="flex items-center gap-x-4">
              <img src={logo} className="h-14 w-18 relative top-4" />
            </div>
          </div>
          <button
            onClick={handleClose}
            // onClick={() => console.log(show)}
            className="outline-none relative right-6 top-4  md:hidden"
          >
            <IoMdClose className="font-extrabold text-4xl text-red-700" />
          </button>
        </div>
        <div className="w-full flex flex-col gap-y-4 text-xl font-bold uppercase items-center pt-7">
          <NavLink
            to={RouteName.Home}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
            onClick={handleClose}
          >
            {t("home")}
          </NavLink>
          <NavLink
            to={RouteName.About}
            className={({ isActive }) =>
              `${
                isActive ? "border-b-cardYellow " : ""
              } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
            }
            onClick={handleClose}
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
            onClick={handleClose}
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
            onClick={handleClose}
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
            onClick={handleClose}
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
            onClick={handleClose}
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
            onClick={handleClose}
          >
            {t("contactUs")}
          </NavLink>
          <NavLink to={"#"}>
            <select
              className="ml-2 outline-none bg-inherit px-4"
              onChange={changeLanguage}
            >
              <option value="en">English</option>
              <option value="amh">አማርኛ</option>
              <option value="oro">Oromic</option>
            </select>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

// function NavItem({
//   to,
//   text,
//   onClick,
// }: {
//   to: string;
//   text: string;
//   onClick: () => void;
// }) {
//   return (
//     <NavLink
//       className={({ isActive }) =>
//         `${
//           isActive ? "border-b-cardYellow " : ""
//         } border-b-4 border-transparent hover:border-cardYellow duration-200 transition-all text-nowrap`
//       }
//       to={to}
//       onClick={onClick}
//     >
//       {text}
//     </NavLink>
//   );
// }
