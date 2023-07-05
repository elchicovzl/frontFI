import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
    min?:string,
    max?:string,
    page?:number,
    userId?: string;
    parkingCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string[];
    category?: string;
  }

  export default async function getListings(
    params: IListingsParams,
    limit: number,
    offset: number
  ) {
    try {
      const {
        userId,
        roomCount, 
        parkingCount, 
        bathroomCount, 
        locationValue,
        min,
        max,
        startDate,
        endDate,
        category,
      } = params;
  
      let query: any = {};
  
      if (userId) {
        query.userId = userId;
      }
  
      if (category) {
        query.typeListing = category;
      }
  
      if (roomCount) {
        query.roomCount = {
          gte: +roomCount
        }
      }
  
      if (bathroomCount) {
        query.bathroomCount = {
          gte: +bathroomCount
        }
      }

      if (parkingCount) {
        query.parking = {
          gte: +parkingCount
        }
      }

      let minQuery ={};
      let maxQuery ={};

      console.log(min, max);

      if (min != 'NaN') {
        minQuery = {
          gte: Number(min)
        }
      }

      if (max != 'NaN') {
        maxQuery = {
          lte: Number(max)
        }
      }

      if (min > 0) {
        query.price = {...query.price, ...minQuery}
      }

      if (max > 0) {
        query.price = {...query.price, ...maxQuery}
      }

  
      const listings = await prisma.listing.findMany({
        where: query,
        take: limit,
        skip: offset,
        orderBy: {
          createdAt: 'desc'
        }
      });

      const total = await prisma.listing.count({
        where: query,
      });
  
      const safeListings = listings.map((listing) => ({
        ...listing,
        createdAt: listing.createdAt.toISOString(),
      }));

      return {
        safeListings,
        total: Number(total) ?? 0,
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }