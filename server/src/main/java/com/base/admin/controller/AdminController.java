package com.base.admin.controller;

import com.base.admin.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Map;

@Controller
class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping({"admin/login"})
    public @ResponseBody Map login(@RequestParam("username") String username, @RequestParam("password") String password) throws Exception{
        Map<String,Object> retMap = adminService.adminLogin(username, password);
        return retMap;
    }

    @RequestMapping({"admin/userlist"})
    public Map getUserList(){
        Map<String,Object> retMap = adminService.getUserList();
        return retMap;
    }
    @RequestMapping({"admin/userlistpage"})
    public Map getUserListPage(){
        Map<String,Object> retMap = adminService.getUserList();
        return retMap;
    }
}
