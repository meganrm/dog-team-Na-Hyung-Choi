import { getAvailableDogs } from './selectors';

const mockListOfDogs = [
    {name: 'doggo 1', tags: ["tag 1"]},
    {name: 'doggo 2', tags: ["tag 2"]},
    {name: 'doggo 3', tags: ["tag 2", "tag 3"]},
    {name: 'doggo 4', tags: ["tag 3", "tag 5"]},
    {name: 'doggo 5', tags: ["tag 1", "tag 2"]}
]

describe('getAvailableDogs', () => {
    
    test('it returns all dogs if no filters are selected', () => {
        const selectedFilters = [];
        expect(getAvailableDogs(mockListOfDogs, selectedFilters).length).toEqual(mockListOfDogs.length)
    })
    test('if a filter is selected, only returns dogs with that filter in their tags list', () => {
        const selectedFilters = ['tag 1'];
        expect(getAvailableDogs(mockListOfDogs, selectedFilters).length).toEqual(2);
        expect(getAvailableDogs(mockListOfDogs, selectedFilters)[0].name).toEqual('doggo 1');
    })
    test('if more than one filter is selected, only returns dogs with either of the filters in their tag list', () => {
        const selectedFilters = ['tag 1', 'tag 2'];
        expect(getAvailableDogs(mockListOfDogs, selectedFilters).length).toEqual(4);
        expect(getAvailableDogs(mockListOfDogs, selectedFilters)).toEqual(
            [
                {name: 'doggo 1', tags: ["tag 1"]},
                {name: 'doggo 2', tags: ["tag 2"]},
                {name: 'doggo 3', tags: ["tag 2", "tag 3"]},
                {name: 'doggo 5', tags: ["tag 1", "tag 2"]}
            ]
        );
    })
})