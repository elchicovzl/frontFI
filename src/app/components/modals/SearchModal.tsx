'use client';

import qs from 'query-string';
import dynamic from 'next/dynamic'
import { useCallback, useMemo, useState } from "react";
import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";
import CountrySelect, { 
  CountrySelectValue
} from "../inputs/CountrySelect";
import Heading from '../Heading';
import RangePrice from '../RangePrice';

enum STEPS {
  LOCATION = 0,
  INFO = 1,
}

const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.LOCATION);

  const [roomCount, setRoomCount] = useState(0);
  const [bathroomCount, setBathroomCount] = useState(0);
  const [parkingCount, setParkingCount] = useState(0);
  
  const [priceRange, setPriceRange] = useState({min:'', max:''});

  const onBack = useCallback(() => {
    setStep((value) => value - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((value) => value + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    let minStr = priceRange.min.replace('$','');
    let maxStr = priceRange.max.replace('$','');

    let min = parseFloat(minStr.replaceAll(',',''));
    let max = parseFloat(maxStr.replaceAll(',',''));

    if (isNaN(min)) {
      min = 0;
    }

    if (isNaN(max)) {
      max = 0;
    }
    
    const updatedQuery: any = {
      ...currentQuery,
      max,
      min,
      roomCount,
      bathroomCount
    };

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });

    setStep(STEPS.LOCATION);
    searchModal.onClose();
    router.push(url);
  }, 
  [
    step, 
    searchModal, 
    priceRange, 
    router, 
    roomCount,
    onNext,
    parkingCount,
    bathroomCount,
    params
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return 'Buscar'
    }

    return 'Siguiente'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined
    }

    return 'Regresar'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Precio"
        subtitle="Elija entre un rango de precio!"
      />
      <RangePrice
        onChange={(value) => setPriceRange(value)}
        value={priceRange}
        title=""   
        subtitle=""
      />
      <hr />
    </div>
  )

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Más Informacion"
          subtitle="!Encuentra la propiedad que necesitas!"
        />
        <Counter 
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title="Cuartos" 
          subtitle="¿Cuantos cuartos necesitas?"
        />        
        <hr />
        <Counter 
          onChange={(value) => {
            setBathroomCount(value)
          }}
          value={bathroomCount}
          title="Baños"
          subtitle="¿Cuantos baños necesitas?"
        />
        <hr />
        <Counter 
          onChange={(value) => setParkingCount(value)}
          value={parkingCount}
          title="Parqueadero" 
          subtitle="¿Cuantos parqueadero necesitas?"
        />
      </div>
    )
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filtros"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
}

export default SearchModal;