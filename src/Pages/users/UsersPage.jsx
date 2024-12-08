import { UsersInfinityComponent } from "../../Components/User/Users";

/**
 * The main user page component that renders user details.
 *
 * @returns {JSX.Element} The user page with dynamic content.
 *
 * @example
 * // Rendered via React Router
 * <Route path="/user/:id" element={<UserPage />} />
 */
export const UsersPage = () => {
    // const { id } = useParams();
    console.log("UsersPage")
    return <UsersInfinityComponent />;
    // return <>HI from UsersPage</>
};

