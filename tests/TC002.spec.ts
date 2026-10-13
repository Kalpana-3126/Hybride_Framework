//To provide actual Test Scripts for TC002
import { test } from "@playwright/test";
import { General } from "../lib/General";
test("TC002: Add New Employee", async ({ page }) => {
    let obj = new General(page);
    await obj.openApplication();
    await obj.login();
    await obj.addNewEmployee();
    await obj.logout();
});