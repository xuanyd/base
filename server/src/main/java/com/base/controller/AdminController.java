package com.base.controller;

import com.base.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping({"main.html"})
    public String main(){
        System.out.print("sdfsdfs");
        return "index";
    }

    @RequestMapping({"admin/login"})
    public @ResponseBody Map login(HttpServletRequest req, HttpSession httpSession){
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        Map<String,Object> retMap = adminService.adminLogin(username, password);
        return retMap;
    }
}
