'use client'

import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import ListingCard from "@/app/listings/ListingCard"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";

import getCurrentUser from "@/app/actions/getCurrentUser";
import { PaginationButton } from "@/app/components/pagination-button";
import React from "react";
import { SafeListing, SafeUser } from "../types";

interface ListingsProps {
    listings: Array<SafeListing> | {}
    currentUser: SafeUser | {},
    pageCount:number | 1
};


const Listings = async ({ listings , currentUser, pageCount }: ListingsProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [isPending, startTransition] = React.useTransition();

  const page = searchParams?.get("page") ?? "1"
  const per_page = searchParams?.get("per_page") ?? "3"
  const sort = searchParams?.get("sort") ?? "createdAt.desc"

  // Create query string
  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString())

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, String(value))
        }
      }

      return newSearchParams.toString()
    },
    [searchParams]
  );

  if (listings.length == 0) {
    return (
      <EmptyState showReset />
    )
  }

  return (
      <Container>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
        {listings.length ? (
            <PaginationButton
              className="mt-5"
              pageCount={pageCount}
              page={page}
              per_page={per_page}
              sort={'createdAt.desc'}
              createQueryString={createQueryString}
              router={router}
              pathname={'/'}
              isPending={isPending}
              startTransition={startTransition}
            />
          ) : null}
      </Container>
  )
}

export default Listings;
