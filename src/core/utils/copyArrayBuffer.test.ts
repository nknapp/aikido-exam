import {copyArrayBuffer} from "$core/utils/copyArrayBuffer";


describe("copyArrayBuffer", () => {
    it("has the same values", () => {
        const original = createBuffer([1, 2, 3, 4]);
        const copy = copyArrayBuffer(original);
        expect(new Uint8Array(original)).toEqual(new Uint8Array(copy))
    })

    it("does not change copy if original is changed", () => {
        const original = createBuffer([1, 2, 3, 4]);
        const copy = copyArrayBuffer(original)
        new Uint8Array(original).set([5,6,7,8])
        expect(new Uint8Array(original)).not.toEqual(new Uint8Array(copy))
    })

})


function createBuffer(array: Array<number>) {
    const buffer = new ArrayBuffer(4);
    const uint8Array = new Uint8Array(buffer);
    uint8Array.set(array);
    return buffer;
}
