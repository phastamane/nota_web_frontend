"use client";

import { User as HeroUIUser } from "@heroui/react";
import { useAuthStore } from "../../store/useAuthStore";
import UserSkeleton from "./UserSkeleton";
import { useNavigate } from "react-router";
import { UserIcon } from "../../shared/Icons";

export default function User() {
  const navigator = useNavigate();

    const user = useAuthStore((s) => s.user);
  const customer = useAuthStore((s) => s.customer);
  const notary = useAuthStore((s) => s.notary);

  if (!user) return <UserSkeleton />;

  const profile = user.role === "notary" ? notary : customer;

  return (
    <HeroUIUser
      avatarProps={{
        icon: <UserIcon />
      }}
      description={
        <div className="text-blue-500 text-base max-sm:text-xs">
          <a
            className="cursor-pointer"
            onClick={() => navigator("/account")}
          >
            {`@${user.username}`}
          </a>
        </div>
      }
      name={<p className="max-sm:text-xs">{profile?.first_name + " " + profile?.last_name}</p>}
    />
  );
}
