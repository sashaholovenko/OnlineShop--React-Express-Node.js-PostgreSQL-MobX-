import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Fridges"},
            {id: 2, name: "Smartphones"},
            {id: 3, name: "Laptops"},
            {id: 4, name: "PCs"},
            {id: 5, name: "Headphones"},

        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Xiaomi"},
            {id: 5, name: "Asus"},
            {id: 6, name: "Acer"},
            {id: 7, name: "LG"},

        ]
        this._devices = [
            {id: 1, name: "Iphone 6s", price: 2500, rating: 5, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
            {id: 2, name: "Iphone SE", price: 1500, rating: 4, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
            {id: 3, name: "Samsung S9", price: 22500, rating: 3, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
            {id: 4, name: "Google Pixel 1", price: 24500, rating: 2, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
            {id: 5, name: "Qoogle Pixel 2", price: 24500, rating: 2, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
            {id: 6, name: "Hoogle Pixel 3", price: 24500, rating: 2, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

}