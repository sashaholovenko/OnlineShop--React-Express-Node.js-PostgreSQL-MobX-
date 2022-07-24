import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Fridges"},
            {id: 2, name: "Smartphones"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]
        this._devices = [
            {id: 1, name: "Iphone 6s", price: 2500, rating: 5, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
            {id: 2, name: "Iphone SE", price: 1500, rating: 4, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
            {id: 3, name: "Samsung S9", price: 22500, rating: 3, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
            {id: 4, name: "Google Pixel 3", price: 24500, rating: 2, img: "https://static.wikia.nocookie.net/naruto/images/b/bb/Itachi.png/revision/latest/scale-to-width-down/1000?cb=20220214112531"},
        ]
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
    setUser(user) {
        this._user = user
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

}