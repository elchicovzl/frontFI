import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <EmptyState />
        );
    }

    if (listing.imageMultipleSrc.length > 0) {
        for (let i = 0; i < listing.imageMultipleSrc.length; i++) {
            var parts = listing.imageMultipleSrc[i].split("/");
            parts[6] = "l_fiwatermark,w_200,x_1,y_1";
            listing.imageMultipleSrc[i] = parts.join("/");
          }
    }

    return ( 
        <ListingClient
            listing={listing}
            currentUser={currentUser}
        />
     );
}
 
export default ListingPage;