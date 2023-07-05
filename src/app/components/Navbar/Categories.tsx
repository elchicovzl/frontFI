'use client';
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiPlainSquare, 
  GiVikingLonghouse, 
  GiHouse, 
  GiCastle, 
  GiCaveEntrance, 
  GiOfficeChair, 
  GiPersonInBed,
  GiWindmill,
  GiForestCamp
} from 'react-icons/gi';
import { FaLaptopHouse, FaParking, FaStore, FaWarehouse } from 'react-icons/fa';
import { MdOutlineApartment } from 'react-icons/md';
import { BiBuilding } from 'react-icons/bi';


export const categories = [
    {
        label: 'Apartamento',
        icon: MdOutlineApartment,
        description: 'This property is close to the beach!',
      },
      {
        label: 'Apartaestudio',
        icon: FaLaptopHouse,
        description: 'This property is has windmills!',
      },
      {
        label: 'Casa',
        icon: GiHouse,
        description: 'This property is modern!'
      },
      {
        label: 'Finca',
        icon: GiVikingLonghouse,
        description: 'This property is in the countryside!'
      },
      {
        label: 'Habitacion',
        icon: GiPersonInBed,
        description: 'This is property has a beautiful pool!'
      },
      {
        label: 'Lote',
        icon: GiForestCamp,
        description: 'This property is on an island!'
      },
      {
        label: 'Oficina',
        icon: GiOfficeChair,
        description: 'This property is near a lake!'
      },
      {
        label: 'Bodega',
        icon: FaWarehouse,
        description: 'This property has skiing activies!'
      },
      {
        label: 'Local',
        icon: FaStore,
        description: 'This property is an ancient castle!'
      },
      {
        label: 'Edificio',
        icon: BiBuilding,
        description: 'This property is in a spooky cave!'
      },
      {
        label: 'Parqueadero',
        icon: FaParking,
        description: 'This property offers camping activities!'
      },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
            className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto
            ">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category == item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
        
    )
}

export default Categories;