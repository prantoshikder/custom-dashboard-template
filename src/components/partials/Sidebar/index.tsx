"use client";

import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const Sidebar = () => {
  const router = useRouter();
  const routePath = usePathname();

  const [current, setCurrent] = useState<string | any>("");
  const [selectedMenu, setSelectedMenu] = useState<string | any>("dashboard");

  const primaryMenuSelect: any = routePath.split("/")[2];

  const [openKeys, setOpenKeys] = useState<any>(
    primaryMenuSelect === "information"
      ? ["information"]
      : primaryMenuSelect === "settings"
      ? ["settings"]
      : [""]
  );

  const items: MenuItem[] = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <SettingOutlined />,
      className: `${selectedMenu === "dashboard" ? "activeMenu" : ""}`
    },
    {
      label: "Accounts",
      key: "accounts",
      icon: <SettingOutlined />,
      className: `${selectedMenu === "accounts" ? "activeMenu" : ""}`
    },
    {
      label: "Information",
      key: "information",
      icon: <SettingOutlined />,
      className: `${selectedMenu === "settings" ? "activeMenu" : ""}`,
      children: [
        {
          label: "Personal",
          key: "personal",
          icon: <SettingOutlined />,
          className: `${selectedMenu === "personal" ? "activeMenu" : ""}`
        },
        {
          label: "Securdity",
          key: "securidty",
          icon: <SettingOutlined />,
          className: `${selectedMenu === "security" ? "activeMenu" : ""}`
        }
      ]
    },
    {
      label: "Settings",
      key: "settings",
      icon: <SettingOutlined />,
      className: `${selectedMenu === "settings" ? "activeMenu" : ""}`,
      children: [
        {
          label: "Personalize",
          key: "personalize",
          icon: <SettingOutlined />,
          className: `${selectedMenu === "personalize" ? "activeMenu" : ""}`
        },
        {
          label: "Security",
          key: "security",
          icon: <SettingOutlined />,
          className: `${selectedMenu === "security" ? "activeMenu" : ""}`
        }
      ]
    },
    {
      label: "Logout",
      key: "logout",
      icon: <LogoutOutlined />
    }
  ];

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    console.log("latestOpenKey", latestOpenKey);

    setOpenKeys([latestOpenKey]);
  };

  useEffect(() => {
    const pathname = routePath.split("/");

    if (pathname?.length === 3) {
      setCurrent(pathname[2]);
      return;
    } else if (pathname?.length === 4) {
      setCurrent(pathname[3]);
      return;
    } else {
      setCurrent(pathname[1]);
    }
  }, [routePath]);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);

    if (e?.keyPath?.length === 2) {
      setSelectedMenu(e.key);

      const path1 = e.keyPath[1];
      const path2 = e.keyPath[0];

      router.push(`/dashboard/${path1}/${path2}`);

      return;
    } else {
      setSelectedMenu(e.key);

      if (e.key === "dashboard") {
        router.push("/dashboard");
      } else {
        router.push(`/dashboard/${e.key}`);
      }
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>LOGO</h1>
      </div>

      <Menu
        selectedKeys={[current]}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
        theme="dark"
        onClick={onClick}
      />
    </div>
  );
};

export default Sidebar;
