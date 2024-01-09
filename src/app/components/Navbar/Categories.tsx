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
        description: 'El lugar perfecto.',
      },
      {
        label: 'Apartaestudio',
        icon: FaLaptopHouse,
        description: 'Mono ambiente.',
      },
      {
        label: 'Casa',
        icon: GiHouse,
        description: 'De sus sueños.'
      },
      {
        label: 'Finca',
        icon: GiVikingLonghouse,
        description: 'Distracción fuera de la ciudad.'
      },
      {
        label: 'Lote',
        icon: GiForestCamp,
        description: 'Excelente ubicación'
      },
      {
        label: 'Oficina',
        icon: GiOfficeChair,
        description: 'Excelente estado.'
      },
      {
        label: 'Bodega',
        icon: FaWarehouse,
        description: 'Excelente estado.'
      },
      {
        label: 'Local',
        icon: FaStore,
        description: 'Excelente estado.'
      },
      {
        label: 'Edificio',
        icon: BiBuilding,
        description: 'Excelente estado.'
      },
      {
        label: 'Parqueadero',
        icon: FaParking,
        description: 'Seguridad confiable.'
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