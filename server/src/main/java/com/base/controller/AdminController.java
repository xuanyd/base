package com.base.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class AdminController {

    @RequestMapping({"main.html"})
    public String main(){
        System.out.print("sdfsdfs");
        return "index";
    }

    @RequestMapping({"admin/login"})
    public @ResponseBody Map login(){
        Map<String, Object> retMap = new HashMap<>();
        System.out.println("admin login...........................");
        retMap.put("user","sdfdsf");
        return retMap;
    }

    @RequestMapping({"admin/doLogin.html"})
    public String doLogin(){
        System.out.println("admin login...........................");
        return "admin/main";
    }

}
