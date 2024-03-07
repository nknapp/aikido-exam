describe("test setup", () => {
  describe("clears local storage before each test", () => {
    it("setting storage", () => {
      localStorage.setItem("test", "1");
    });
    it("is clean in next test", () => {
      expect(localStorage.getItem("test")).toBeNull();
    });
  });

  describe("clears local storage before each test", () => {
    it("setting storage", () => {
      sessionStorage.setItem("test", "1");
    });
    it("is clean in next test", () => {
      expect(sessionStorage.getItem("test")).toBeNull();
    });
  });
});
