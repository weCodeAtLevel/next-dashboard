"use client";
import { Button, Container, Table, Theme } from "@radix-ui/themes";
import Link from "next/link";
import React, { useState } from "react";

const Users = () => {
  const [isToggle, setIsToggle] = useState<Record<string, boolean>>({});

  const users = [
    {
      id: "1",
      name: "abc",
      Details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: "2",
      name: "abc",
      Details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: "3",
      name: "abc",
      Details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: "4",
      name: "abc",
      Details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: "5",
      name: "abc",
      Details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  const handleButtonToggle = (userId: string) => {
    setIsToggle((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <>
      <Theme accentColor="blue" radius="large">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>No.</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Account Details</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="2px">
                Payment
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <>
                <Table.Row key={user.id}>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>
                    <Link href={`users/${user.id}`}>
                      <p className="cursor-pointer hover:font-bold">
                        {user.name.length > 8
                          ? user.name
                              .split(" ")
                              .map((letters) => letters.slice(0, 8) + "....")
                          : user.name}
                      </p>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link href={`users/${user.id}`}>
                      <p className="cursor-pointer hover:font-bold">
                        {user.Details.slice(0, 10) + "...."}
                      </p>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      key={user.id}
                      onClick={() => handleButtonToggle(user.id)}
                      variant={!isToggle[user.id] ? "classic" : "surface"}
                      radius="large"
                    >
                      {!isToggle[user.id] ? "Pay" : "Paid"}
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </>
            ))}
          </Table.Body>
        </Table.Root>
      </Theme>
    </>
  );
};

export default Users;
