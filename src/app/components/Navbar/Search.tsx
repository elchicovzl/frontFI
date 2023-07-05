'use client'

import useSearchModal from '@/app/hooks/useSearchModal';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaBed, FaBath, FaSquare, FaCamera } from 'react-icons/fa';

const Search = () => {

    const searchModal = useSearchModal();
    const params = useSearchParams();

    const  min = params?.get('min');
    const  max = params?.get('max');
    const roomCount = params?.get('roomCount');
    const bathroomCount = params?.get('bathroomCount');
    const parking = params?.get('parking');

    const priceRangeLabel = useMemo(() => {
        if (min || max) {
          return `Desde $${min} cop - Hasta $${max} cop`;
        }
    
        return 'Agregue rangos de precio';
    }, [min, max]);

    const moreInfoLabel = useMemo(() => {
        let label = [];

        if (roomCount) {
            label.push(`${roomCount} Cuarto`) ;
        }

        if (bathroomCount) {
            label.push(`${bathroomCount} Baño`);
        }

        if (parking) {
            label.push(`${parking} Parqueadero`);
        }

        return (label.length)? label.join(', ') : 'Mas información';

    }, [roomCount, bathroomCount, parking]);

    return ( 
        <div
        onClick={searchModal.onOpen}
        className="
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        ">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-6">
                    {priceRangeLabel}
                </div>
                <div>
                    /
                </div>
                <div className="hidden sm:block text-sm font-semibold px-6 bottom-x-[1px] flex-1 text-center">
                    {moreInfoLabel}
                </div>
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="p-2 bg-emerald-600 rounded-full text-white">
                        <BiSearch size={18} />
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Search;