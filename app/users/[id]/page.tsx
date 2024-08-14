"use client";
import { useParams } from "next/navigation";
import React from "react";

type Props = {};

function UserDetails({}: Props) {
  const params = useParams();

  const [utrNumber, setUtrNumber] = React.useState<string | null>(null);

  const id = params.id as string | null;

  React.useEffect(() => {
    const storedUTR = localStorage.getItem(`utr_${id}`);
    setUtrNumber(storedUTR);
  }, [id]);

  return (
    <>
      <p>UTR number : {utrNumber}</p>
    </>
  );
}

export default UserDetails;
