'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { FaBed, FaBath, FaSquare, FaParking} from 'react-icons/fa';
import { FaHouseChimneyMedical, FaClock, FaBuilding } from "react-icons/fa6";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: SafeUser,
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  parking: number;
  floor: number;
  area: number;
  stratum: number;
  antique: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
  parking,
  floor,
  area,
  stratum,
  antique
}) => {
  const { getByValue } = useCountries();

  const coordinates = locationValue;

  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
        <div>Por Frontera Inmobiliaria </div>
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div className="flex ">
            <FaBed className="mr-2 mt-1"/> {roomCount} Habitaciones
          </div>
          <div className="flex">
            <FaBath className="mr-2 mt-1" /> {bathroomCount} Baños
          </div>
        </div>
      </div>
      <hr />
      <div className="text-xl    font-semibold">
        Categoria
      </div>
      {category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description}
          size={40}
        />
      )}
      <hr />
      <div className="text-xl    font-semibold">
        Descripción general
      </div>
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
      <div className="text-xl    font-semibold">
        Características
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

        {roomCount > 0 ? (
            <ListingCategory
            icon={FaBed} 
            label={`${roomCount} Habitacion`}
            description={""}
            size={26}
          />
          ) : null}
      
          
        {bathroomCount > 0 ? (
          <ListingCategory
            icon={FaBath} 
            label={`${bathroomCount} Baños`}
            description={""}
            size={26}
          />
          ) : null}

        {parking > 0 ? (
          <ListingCategory
            icon={FaParking} 
            label={`${parking} Parqueadero`}
            description={""}
            size={26}
          />
        ) : null}

        {floor > 0 ? (
          <ListingCategory
            icon={FaBuilding} 
            label={`${floor} Pisos`}
            description={""}
            size={26}
          />
        ) : null}

        {stratum > 0 ? (
          <ListingCategory
            icon={FaHouseChimneyMedical} 
            label={`${stratum} Estrato`}
            description={""}
            size={26}
          />
        ) : null}

        {antique > 0 ? (
          <ListingCategory
            icon={FaClock} 
            label={`${antique} Antiguedad`}
            description={""}
            size={26}
          />
        ) : null}

        {area > 0 ? (
          <ListingCategory
            icon={FaSquare} 
            label={`${area}m Area `}
            description={""}
            size={26}
          />
        ) : null}
      </div>
      <hr />
      <div className="text-xl    font-semibold">
        Ubicación
      </div>
      <Map center={coordinates}  />
    </div>
   );
}
 
export default ListingInfo;