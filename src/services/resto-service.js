export default class RestoService{
    _api = 'http://localhost:3000';

    getResource = async (url) => {
        const response = await fetch(this._api+url);

        if (!response.ok){
            throw new Error('Server Error');
        }

        return await response.json();
    };

    getMenuItems = async () => {
        return await this.getResource('/menu');
    }
}