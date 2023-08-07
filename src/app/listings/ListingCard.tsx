'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';

import { 
    SafeListing, 
    SafeReservation, 
    SafeUser
} from "@/app/types";

import Button from "../components/Button";
import HeartButton from "../components/HeartButton";
import { NumericFormat } from "react-number-format";

import { 
  GiForestCamp
} from 'react-icons/gi';

import { FaBed, FaBath, FaSquare, FaCamera } from 'react-icons/fa';

interface ListingCardProps {
    data: SafeListing;
    reservation?: SafeReservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null
};

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionLabel,
    actionId = '',
    currentUser,
  }) => {
    const router = useRouter();

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
    
        if (disabled) {
          return;
        }
    
        onAction?.(actionId)
    }, [disabled, onAction, actionId]);

    const price = useMemo(() => {
        if (reservation) {
          return reservation.totalPrice;
        }
    
        return data.price;
    }, [reservation, data.price]);

    const reservationDate = useMemo(() => {
        if (!reservation) {
          return null;
        }
      
        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);
    
        return `${format(start, 'PP')} - ${format(end, 'PP')}`;
      }, [reservation]);

      console.log(data);

    return (
        <div 
          onClick={() => router.push(`/listings/${data.id}`)} 
          className="col-span-2 cursor-pointer group"
        >

          <div className="relative mx-auto w-full">
            <div className="relative inline-block w-full transform">
              <div className="rounded-lg bg-white p-4 shadow">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <Image
                          fill
                          className="
                            object-cover 
                            h-full 
                            w-full 
                            group-hover:scale-110 
                            transition
                          "
                          src={data.imageSrc}
                          alt="Listing"
                        />
                    </div>
                  </div>
        
                  <div className="absolute bottom-0 left-5 mb-3 flex bg-black rounded-lg p-1">
                    <p className="flex items-center font-medium text-white shadow-sm">
                      <FaCamera className="mr-2 text-lg text-white"/>
                      {data.imageMultipleSrc.length}
                    </p>
                  </div>
                  
        
                  <span className="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-emerald-600 px-2 py-1 text-xs font-semibold text-white"> {data.typeListing} </span>
                </div>
        
                <div className="mt-4">
                  <h2 className="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg">{data.address}</h2>
        
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <NumericFormat
                      displayType="text"
                      className="ml-auto"
                      value={price}
                      prefix="$"
                      thousandSeparator
                    />
                    <span className="ml-2">cop</span>
                  </p>
                </div>
                
                <div className="justify-center">
                  <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                    <p className="flex items-center font-medium text-gray-800">
                      <FaBed className="mr-2"/>
                      {data.roomCount}
                    </p>
        
                    <p className="flex items-center font-medium text-gray-800">
                      <FaBath className="mr-2" />
                      {data.bathroomCount}
                    </p>
                    <p className="flex items-center font-medium text-gray-800">
                      <FaSquare className="mr-2" />
                      {data.area}m<sup>2</sup>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       );
}

export default ListingCard;