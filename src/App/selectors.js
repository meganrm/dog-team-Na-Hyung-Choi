export const getAvailableDogs = (allDogs, selectedFilters) => {
    if (selectedFilters.length === 0) {
        return allDogs;
    } else if (selectedFilters.length === 1) {
        return allDogs.filter(dog => {
            return dog.tags.includes(selectedFilters[0])
        });
    } else {
        let filteredDogs = new Set();
        allDogs.forEach(dog => {
            selectedFilters.forEach(filter => {
                if (dog.tags.includes(filter)) {
                    filteredDogs.add(dog);
                }
            })
        })
        return [...filteredDogs];
    }
}