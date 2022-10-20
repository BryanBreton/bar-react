export let tables = [{ numero: 1, note: 10 }, { numero: 2, note: 0 }, { numero: 3, note: 0 }, { numero: 4, note: 0 }, { numero: 5, note: 0 }, { numero: 6, note: 0 }, { numero: 7, note: 0 }]
export let drinks = [{ name: "Sex on the Beach", price: 15}, { name: "Gin Tonic", price: 10},{ name: "Margarita", price: 12}]

export const mutations = {
    setTables: function (index, obj) {
        console.log(obj);
        tables[index] = obj
    }
}
