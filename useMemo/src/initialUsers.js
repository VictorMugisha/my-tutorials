export const initialUsers = new Array(8_999_999)
    .fill(0)
    .map((_, i) => {
        return {
            id: i,
            isSelected: i === 8_999_998
        }
    })