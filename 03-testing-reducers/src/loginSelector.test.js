import { selectAuthenticated } from "./loginSelector";

describe("Login Selectors", () => {
  describe("selectAuthenticated", () => {
    it("should return login.authenticated as boolean", () => {
      mockState = {
        login: {
          authenticated: false,
          authenticating: false
        }
      };
      const selected = selectAuthenticated.resultFunc(mockState.login);
      expect(selected).toEqual(false);
    });
  });
});
