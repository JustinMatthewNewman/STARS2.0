import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";

import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from "react-icons/fa";


type Props = {
  session: Session | null;
};

function ProfileMenu({ session }: Props) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) return null
  return (
    <div className="flex items-center gap-4">
      <Dropdown
        radius="sm"
        showArrow
        placement="bottom-start"
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content: "p-0 border-small border-divider bg-background",
        }}
      >
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: session?.user?.image || null,
            }}
            className="transition-transform"
            name={session?.user?.name}
            description={`@${session?.user?.username || null}`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">{session?.user?.email}</p>
          </DropdownItem>
          <DropdownSection aria-label="Profile & Actions" showDivider>
            <DropdownItem key="dashboard">Dashboard</DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="new_project" endContent={<div>+</div>}>
              Team Render
            </DropdownItem>
          </DropdownSection>
          <DropdownItem key="settings">Profile</DropdownItem>
          <DropdownItem key="team_settings">Graphic Settings</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>

          <DropdownSection aria-label="Preferences" showDivider>
              {theme === "light" ? (
                <DropdownItem
                  isReadOnly
                  key="theme"
                  className="cursor-default"
                  endContent={<FaSun />}
                  onClick={() => setTheme('dark')}
                >
                  Theme
                </DropdownItem>
              ) : (
                <DropdownItem
                  isReadOnly
                  key="theme"
                  className="cursor-default"
                  endContent={<FaMoon />}
                  onClick={() => setTheme('light')}
                >
                  Theme
                </DropdownItem>
              )}
          </DropdownSection>

          <DropdownItem
            onPress={() => signOut()}
            key="logout"
            color="danger"
            endContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            }
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default ProfileMenu;
