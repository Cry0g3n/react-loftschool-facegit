import users from "../users";
import {fetchUserRequest, fetchUserSuccess, fetchUserFailure} from "../../actions/users";

describe("reducer users изменяют isFetching", () => {
    it("action с типом fetchUserRequest изменяет isFetching на true", () => {
        const next = users(undefined, {
            type: fetchUserRequest.toString()
        });
        expect(next.isFetching).toEqual(true);
    });
    it("action с типом fetchUserSuccess изменяет isFetching на false", () => {
        const next = users(undefined, {
            type: fetchUserSuccess.toString(),
            payload: {
                data: {}
            }
        });
        expect(next.isFetching).toEqual(false);
    });
    it("action с типом fetchUserFailure изменяет isFetching на false", () => {
        const next = users(undefined, {
            type: fetchUserFailure.toString(),
            payload: new Error("test error")
        });
        expect(next.isFetching).toEqual(false);
    });
});

describe("reducer users изменяют isFetched", () => {
    it("action с типом fetchUserRequest изменяет isFetched на false", () => {
        const next = users(undefined, {
            type: fetchUserRequest.toString()
        });
        expect(next.isFetched).toEqual(false);
    });
    it("action с типом fetchUserSuccess изменяет isFetched на true", () => {
        const next = users(undefined, {
            type: fetchUserSuccess.toString(),
            payload: {
                data: {}
            }
        });
        expect(next.isFetched).toEqual(true);
    });
    it("action с типом fetchUserFailure изменяет isFetched на false", () => {
        const next = users(undefined, {
            type: fetchUserFailure.toString(),
            payload: new Error("test error")
        });
        expect(next.isFetched).toEqual(false);
    });
});

describe("reducer users изменяют isFetched", () => {
    it("action с типом fetchUserRequest очищает данные user", () => {
        const next = users(undefined, {
            type: fetchUserRequest.toString()
        });
        expect(next.data).toBeNull();
    });
    it("action с типом fetchUserSuccess наполняет данными user", () => {
        const next = users(undefined, {
            type: fetchUserSuccess.toString(),
            payload: {
                data: {id: 1}
            }
        });
        expect(next.data).not.toBeNull();
    });
});

describe("reducer users изменяет user", () => {
    it("action с типом fetchUserRequest очищает данные user", () => {
        const next = users(undefined, {
            type: fetchUserRequest.toString()
        });
        expect(next.data).toBeNull();
    });
    it("action с типом fetchUserSuccess наполняет данными user", () => {
        const next = users(undefined, {
            type: fetchUserSuccess.toString(),
            payload: {
                data: {id: 1}
            }
        });
        expect(next.data).not.toBeNull();
    });
});

describe("reducer users изменяют error", () => {
    it("action с типом fetchUserRequest очищает данные error", () => {
        const next = users(undefined, {
            type: fetchUserRequest.toString()
        });
        expect(next.error).toBeNull();
    });
    it("action с типом fetchUserSuccess очищает данные error", () => {
        const next = users(undefined, {
            type: fetchUserSuccess.toString(),
            payload: {
                data: {id: 1}
            }
        });
        expect(next.error).toBeNull();
    });
    it("action с типом fetchUserFailure наполняет данными error", () => {
        const next = users(undefined, {
            type: fetchUserFailure.toString(),
            payload: new Error("test error")
        });
        expect(next.error).not.toBeNull();
    });
});