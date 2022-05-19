type MenuOptions = "" | "dog" | "cat" | "all" | "fish";

export const createMenuObject = (active: MenuOptions) => {
    let returnObject = { all: false, dog: false, cat: false, fish: false };

    if (active !== "") {
        returnObject[active] = true;
    }

    return returnObject;
};
