package com.base.admin.controller;

import com.base.admin.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.Map;
import com.core.util.WebToken;
import com.core.util.Constant;

@Controller
class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping({"admin/login"})
    public @ResponseBody Map login(@RequestParam("username") String username, @RequestParam("password") String password) throws Exception{
        Map<String,Object> retMap = adminService.adminLogin(username, password);
        if (retMap.get("flag") == "success") {
            Map<String, Object> loginTokenMap = new HashMap<>();
            loginTokenMap.put("username", username);
            loginTokenMap.put("password", password);
            String token = WebToken.createJWT(Constant.JWT_ID,TokenMgr.generalSubject(loginTokenMap),Constant.JWT_TTL);
        } 
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
