import {
    clearNetworkErrors,
    networkError
} from "../../actions/network";
import { error, message } from "../../reducers/network";
describe("Тест для network.js", () => {
    describe("Reducer error", () => {
        it("Action clearNetworkErrors возвращает initialState", () => {
            const request = {
                type: clearNetworkErrors.toString()
            };
            const next = error(null, request);
            expect(next).toBeNull();
        });
        it("Action networkError добавляет action.payload к state", () => {
            const action = {
                type: networkError.toString(),
                payload: new Error("Some error")
            };
            const next = error(null, action);
            expect(next).toEqual(action.payload);
        });
    });
    describe("Reducer message", () => {
        it("Action clearNetworkErrors возвращает initialState", () => {
            const request = {
                type: clearNetworkErrors.toString()
            };
            const next = message(null, request);
            expect(next).toBeNull();
        });
        it("Action networkError добавляет action.payload.response.data.message к state", () => {
            const action = {
                type: networkError.toString(),
                payload: {
                    response: { data: { message: "Some message" } }
                }
            };
            const next = message(null, action);
            expect(next).toEqual(action.payload.response.data.message);
        });
    });
});