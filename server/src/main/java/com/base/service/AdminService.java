package com.base.service;

import com.base.admin.dao.AdminDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private AdminDao adminDao;

    public Map<String, Object> adminLogin(String username, String password) throws Exception {
        Map<String, Object> retMap = new HashMap<>();
        retMap.put("flag", "err");
        retMap.put("msg", "其他错误");
        Map<String, Object> userMap = adminDao.queryUserByNameAndPwd(username, password);
        if (null == userMap || userMap.isEmpty()) {
            retMap.put("msg", "错误的用户信息");
        } else {
            retMap.put("flag", "success");
            retMap.put("user", userMap);
            return retMap;
        }
        return retMap;
    }
}
