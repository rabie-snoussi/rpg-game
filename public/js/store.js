import { SECRET } from "./constants.js";

class Store {
  constructor() {
    this.data = {
      grid: false,
    };
  }

  loadSavedData() {
    try {
      const storeString = localStorage.getItem('data');
      const decrypted = CryptoJS.AES.decrypt(storeString, SECRET).toString(
        CryptoJS.enc.Utf8
      );
      const store = JSON.parse(decrypted);

      const keys = _.keys(this.data);
      const filteredStore = _.pick(store, keys);
      const mergedStore = _.merge(this.data, filteredStore);

      this.data = mergedStore;
    } catch (error) {}
  }

  saveInLocalStorage() {
    const storeString = JSON.stringify(this.data);
    const encrypted = CryptoJS.AES.encrypt(storeString, SECRET).toString();

    localStorage.setItem('data', encrypted);
  }
}

export default new Store();
