package com.base.service;

import com.base.dao.IBaseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private IBaseDao baseDao;

    public Map<String, Object> adminLogin(String username, String password) throws Exception {
        Map<String, Object> params = new HashMap<>();
        params.put("username", username);
        params.put("password",password);
        String sql = " select user_id, user_name from t_sys_user where user_name=:username and user_password=:password ";
        return baseDao.queryForMap(sql, params);
    }
}
