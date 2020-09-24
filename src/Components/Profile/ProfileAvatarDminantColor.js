import getAverageColor from "get-average-color";
import IMAGE from "../../images/git-profile.jpg";

const ProfileAvatarDominantColor = (setRGB, profile) => {

    if (profile) {
        profile.photos.large
            ?
            getAverageColor(profile.photos.large).then(rgb => {
                setRGB(rgb);
            })
            :
            getAverageColor(IMAGE).then(rgb => {
                setRGB(rgb);
            })
    }

}

export default ProfileAvatarDominantColor;