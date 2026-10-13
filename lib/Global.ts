// To provide Test data & objects/elements related to whole application

import {Page} from '@playwright/test';
export class Global{
    // constructor: To create object creation and u doesn't required to call the me fun whenever u
    //               created object automatically constructor will be executed
    constructor(public page: Page){
        this.page = page;
    }
    //******************Test Data******************//
    public url: string = "https://ctcorphyd.com/SureshIT/login.php";
    public username: string = "sureshit";
    public password: string = "sureshit";
    public emp_firstname: string = "SureshIT";
    public emp_lastname: string = "Hydrabad";
    //*****************Object/Elements************//
    public textbox_loginname = "//input[@name='txtUserName']"; 
    public textbox_password = "//input[@name='txtPassword']";
    public button_login = "//input[@value='Login']";
    public link_logout = "//a[text()='Logout']";
    public frame_empinfo = "//iframe[@id='rightMenu']";
    public button_add = "//input[@value='Add']";
    public textbox_emp_firstname = "//input[@name='txtEmpFirstName']"
    public textbox_emp_lastname = "//input[@name='txtEmpLastName']";
    public button_save = "//input[@value='Save']";
}