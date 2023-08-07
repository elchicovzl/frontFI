'use client';

import Container from "@/app/components/Container";
import { categories } from "@/app/components/Navbar/Categories";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";
import Gallery from "@/app/components/Gallery";
import { NumericFormat } from "react-number-format";
import { FaDollarSign } from "react-icons/fa6";


interface ListingClientProps {
    reservations?: Reservation[];
    listing: SafeListing & {
      user: SafeUser;
    };
    currentUser?: SafeUser | null;
  }

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    reservations = [],
    currentUser
  }) => {

    const category = useMemo(() => {
        return categories.find((items) => 
         items.label === listing.typeListing);
     }, [listing.typeListing]);

     console.log(listing.imageMultipleSrc);
    return ( 
        <Container>
            <div className="flex flex-col gap-6">
                <ListingHead
                    title={listing.title}
                    imageSrc={listing.imageSrc}
                    locationValue={listing.locationValue}
                    id={listing.id}
                    currentUser={currentUser}
                />
                <div className="
                    w-full
                    overflow-hidden 
                    rounded-xl
                    relative
                    "
                >
                    {listing.imageMultipleSrc.length ? (
                        <Gallery images={listing.imageMultipleSrc} />
                    ) :   <div className="relative order-first md:order-last h-64 md:h-auto flex justify-center items-center border border-dashed border-gray-400 col-span-2 m-2 rounded-lg bg-no-repeat bg-center bg-origin-padding bg-cover">
                                <span className="text-gray-400 opacity-75">
                                    <svg className="w-64 h-64"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </span>
                            </div>
                    }
                </div>
                
                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-7
                    md:gap-10
                    mt-6
                ">
                    <ListingInfo 
                        user={listing.user}
                        category={category}
                        description={listing.description}
                        roomCount={listing.roomCount}
                        guestCount={listing.guestCount}
                        bathroomCount={listing.bathroomCount}
                        locationValue={listing.locationValue}
                        parking={listing.parking}
                        floor={listing.floor}
                        area={listing.area}
                        stratum={listing.stratum}
                        antique={listing.antique}

                    
                    />

                    <div className="col-span-3 mt-5 sm:mt-0">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow">
                            <div className="p-3 mr-4 text-emerald-600 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                            <FaDollarSign size={26} />
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Precio
                                </p>
                                <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                <NumericFormat
                                    displayType="text"
                                    className="ml-auto"
                                    value={listing.price}
                                    prefix="$"
                                    thousandSeparator
                                    />
                                    <span className="ml-2">cop</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </Container>
     );
}
 
export default ListingClient;