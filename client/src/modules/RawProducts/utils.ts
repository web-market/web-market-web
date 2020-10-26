import { FilterValuesProps } from './store/types';

export const normalizeFilterValuesData = (data: FilterValuesProps) => {
    return data.map(item => {
        return {
            id: item.id,
            name: item.value
        };
    });
};
