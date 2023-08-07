import React from "react";
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Contact from './components/Contact'

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";

import getCurrentUser from "./actions/getCurrentUser";
import { PaginationButton } from "./components/pagination-button";
import Listings from "@/app/components/listings";

interface HomeProps {
  searchParams: IListingsParams
};

const Home = async ({ searchParams }: HomeProps) => {  
  
  const currentUser = await getCurrentUser();

  const page = searchParams?.page ?? "1"
  const per_page = "9";

  // Products transaction
  const limit = typeof per_page === "string" ? parseInt(per_page) : 10;
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;

  const {safeListings, total} = await getListings(searchParams, limit, offset);
  const pageCount = Math.ceil(total / limit);

  return (
      <div>
        <Listings currentUser={currentUser}  listings={safeListings} pageCount={pageCount} />
        <div className="mt-20">
          <Services />
          <Testimonials />
          <Contact />
        </div>
      </div>
  )
}

export default Home;
