// To provide actual test script for TC001

import{test} from "@playwright/test";
import { General } from "../lib/General";

test("TC001", async ({page})=>{
    let obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
});
