import HomeIcon from "@assets/icons/HomeIcon";
import LibraryIcon from "@assets/icons/LibraryIcon";
import Logo from "@assets/icons/Logo";
import MyPlaylistIcon from "@assets/icons/MyPlaylistIcon";
import PlaylistFavouriteIcon from "@assets/icons/PlaylistFavouriteIcon";
import PlaylistIcon from "@assets/icons/PlaylistIcon";
import SearchIcon from "@assets/icons/SearchIconn";
import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

const Sidebar: React.FC = () => {
  const nav: NavItem[][] = [
    [
      { name: "Trang chủ", icon: HomeIcon, path: "" },
      { name: "Tìm kiếm", icon: SearchIcon, path: "/b" },
      { name: "Thư viện", icon: LibraryIcon, path: "/c" },
    ],
    [
      { name: "Tạo playlist", icon: PlaylistIcon, path: "/d" },
      { name: "Bài hát đã thích", icon: PlaylistFavouriteIcon, path: "/f" },
      { name: "Tập của bạn", icon: MyPlaylistIcon, path: "/g" },
    ],
  ];
  return (
    <nav className="bg-bg-base w-60 flex flex-col items-center min-h-screen pt-6">
      <Logo />
      <div className="flex flex-col items-start w-full px-3">
        {nav.map((list, index) => {
          return (
            <div key={index} className="pt-5 w-full">
              {list.map((item) => {
                return <NavItem key={item.name} item={item} />;
              })}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
