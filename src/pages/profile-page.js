import { useSelector, useDispatch } from "react-redux";
import {toggleVisibleProfile} from "../store/profile";
import { ProfileForm } from "../components";

export const ProfilePage = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>profile page</h1>
            <hr />
            <div>
                {profile.isVisible && (
                    <>
                        <h3>First Name: {profile.firstName}</h3>
                        <h3>Last Name: {profile.lastName}</h3>
                        <h3>Phone: {profile.phone}</h3>
                    </>
                )}
                <button onClick={() => dispatch(toggleVisibleProfile())}> Toggle</button>
            </div>
            <hr />
            <ProfileForm {...profile}/>
        </div>
    );
};
