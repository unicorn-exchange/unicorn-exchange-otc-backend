import {mockBaseCtx} from "../test_utils";
import {createDB} from "../../src/services/db";
import {settingsCommonCtr} from "../../src/api/v1/routes/settings/common";

createDB(mockBaseCtx);

describe("Settings common route test", () => {
  it("should return counties", async () => {
    const settings = await settingsCommonCtr();
    expect(settings.countries.length).toBeGreaterThan(-1);
  });
});
