'use client';

import { IconType } from "react-icons";

interface CategoryViewProps {
  icon: IconType,
  label: string,
  description: string
  size:number
}

const CategoryView: React.FC<CategoryViewProps> = ({ 
  icon: Icon,
  label,
  description,
  size
 }) => {
  return ( 
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={size} className="text-neutral-500" />
        <div className="flex flex-col">
            <div 
              className="text-lg text-neutral-500"
            >
              {label}
            </div>
            <div 
              className="text-neutral-500 font-light"
            >
              {description}
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default CategoryView;