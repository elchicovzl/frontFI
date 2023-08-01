'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import Gallery from "../Gallery";

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
      <div className="
          w-full
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Gallery images={[]} />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton 
            listingId={id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </>
   );
}
 
export default ListingHead;