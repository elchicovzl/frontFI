'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  address: string;
  images: Array<string>;
  id: string;
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  address,
  images,
  id,
  currentUser
}) => {
  const { getByValue } = useCountries();

  return ( 
    <>
      <Heading
        title={title}
        subtitle={address}
      />
    </>
   );
}
 
export default ListingHead;