// Example usage:
// const controlString = "*"; // Grant access to all users
// const accessGranted = {feature1: "crud", feature3: "cr"};
//
// const userHasAccess = hasAccess(controlString, accessGranted);
// console.log(userHasAccess); // Output: true

export function hasAccess(controlString, accessGranted) {
    // Check if the controlString is "*"
    if (controlString === "*") {
        return true; // Grant access to all users
    }

    if(controlString?.length > 0) {

        // Split the control string into individual features and their permissions
        const controlList = controlString.split(',');

        // Iterate through each feature in the control string
        for (const control of controlList) {
            // Split each feature and its permissions. If no permissions assume any.
            const [feature, permissions = "*"] = control.split(':');

            // Check if the feature exists in the accessGranted object
            if (accessGranted.hasOwnProperty(feature)) {
                // If permissions is "*", consider it as a wildcard and return true
                if (permissions === "*") {
                    return true;
                }

                // Check if the user's permissions include any of the required permissions
                for (const permission of permissions) {
                    if (accessGranted[feature].includes(permission)) {
                        // If any permission is granted, return true
                        return true;
                    }
                }
            }
        }
    }

    // If none of the features have been found or none of the permissions match, return false
    return false;
}
