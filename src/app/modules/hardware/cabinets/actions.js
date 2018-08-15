export async function getMountaineerCabinets({ http, props, state }) {
    let response = await http.get('/hardware/cabinets');
    state.set('hardware.cabinets', response.result);
}