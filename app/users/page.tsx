"use client";
import { Container, Table, Theme } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Users = () => {
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

  const [isToggle, setIsToggle] = useState<Record<string, boolean>>({});
  const [positions, setPositions] = useState<Record<string, string>>(
    Object.fromEntries(users.map((user) => [user.id, "No"]))
  );
  const [utrInputs, setUtrInputs] = useState<Record<string, string>>({});
  const [utrNumbers, setUtrNumbers] = useState<Record<string, string>>({});

  React.useEffect(() => {
    // Load stored UTR numbers from localStorage when the component mounts
    const storedUtrs = users.reduce((acc, user) => {
      const utr = localStorage.getItem(`utr_${user.id}`);
      if (utr) {
        acc[user.id] = utr;
      }
      return acc;
    }, {} as Record<string, string>);
    setUtrNumbers(storedUtrs);
  }, []);

  const handleButtonToggle = (userId: string) => {
    setIsToggle((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const handlePositionChange = (userId: string, newPosition: string) => {
    setPositions((prev) => ({
      ...prev,
      [userId]: newPosition,
    }));
  };

  const handleUtrInputChange = (userId: string, value: string) => {
    setUtrInputs((prev) => ({
      ...prev,
      [userId]: value,
    }));
  };

  const handleSaveUtr = (userId: string) => {
    const utr = utrInputs[userId];
    if (utr && utr.length === 12) {
      localStorage.setItem(`utr_${userId}`, utr);
      setUtrNumbers((prev) => ({
        ...prev,
        [userId]: utr,
      }));
      alert("UTR saved successfully!");
    } else {
      alert("Please enter a complete UTR number (12 digits).");
    }
  };

  return (
    <>
      <Theme accentColor="blue" radius="large">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="hidden lg:table-cell">
                Account Details
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell width="full">
                Payment Stucked
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Payment</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.id}>
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
                <Table.Cell className="hidden lg:table-cell">
                  <Link href={`users/${user.id}`}>
                    <p className="cursor-pointer hover:font-bold">
                      {user.Details.slice(0, 30) + "...."}
                    </p>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <DropdownMenu>
                    {utrNumbers[user.id] ? (
                      <>
                        <DropdownMenuTrigger
                          disabled
                          className="w-64 inline-flex items-center  rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-4"
                        >
                          {positions[user.id]}
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Reasons</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup
                            value={positions[user.id]}
                            onValueChange={(value) =>
                              handlePositionChange(user.id, value)
                            }
                          >
                            <DropdownMenuRadioItem value="No">
                              No
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </>
                    ) : (
                      <>
                        <DropdownMenuTrigger className="w-64 inline-flex items-center  rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-4">
                          {positions[user.id]}
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Reasons</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuRadioGroup
                            value={positions[user.id]}
                            onValueChange={(value) =>
                              handlePositionChange(user.id, value)
                            }
                          >
                            <DropdownMenuRadioItem value="No">
                              No
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value=" incorrect account details">
                              incorrect account details
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value=" bank issue">
                              bank issue
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="Others">
                              Others
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </>
                    )}
                  </DropdownMenu>
                </Table.Cell>
                <Table.Cell>
                  {utrNumbers[user.id] ? (
                    <div>
                      <p>PAID (UTR: {utrNumbers[user.id]} )</p>
                    </div>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Enter UTR</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit UTR Number</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="utr" className="text-right">
                              UTR Number
                            </Label>
                            <Input
                              id="utr"
                              placeholder="Enter UTR Number"
                              className="col-span-3"
                              maxLength={12}
                              value={utrInputs[user.id] || ""}
                              onChange={(e) =>
                                handleUtrInputChange(user.id, e.target.value)
                              }
                              onKeyDown={(e) => {
                                // Allow only digits to be entered
                                if (
                                  !/^\d+$/.test(e.key) &&
                                  e.key !== "Backspace"
                                ) {
                                  e.preventDefault();
                                }
                              }}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            type="submit"
                            onClick={() => handleSaveUtr(user.id)}
                          >
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Theme>
    </>
  );
};

export default Users;
