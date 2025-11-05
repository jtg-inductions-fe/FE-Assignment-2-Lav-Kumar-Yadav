/**
 * Represents a user profile with basic identity and picture information.
 */
export type User = {
    /**
     * The user's full name components.
     */
    name: {
        /**
         * The user's title or honorific (e.g., "Mr", "Ms", "Dr").
         */
        title: string;
        /**
         * The user's first name.
         */
        first: string;
        /**
         * The user's last name.
         *
         */
        last: string;
    };
    /**
     * The user's email address.
     */
    email: string;
    /**
     * URLs of the user's profile pictures in various sizes.
     */
    picture: {
        /**
         * URL to the large-sized profile picture.
         */
        large: string;
        /**
         * URL to the medium-sized profile picture.
         */
        medium: string;
        /**
         * URL to the thumbnail-sized profile picture.
         */
        thumbnail: string;
    };
};
